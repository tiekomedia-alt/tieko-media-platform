"use client";

import { FormEvent, useMemo, useState } from "react";
import Link from "next/link";
import {
  diqCategories,
  diqQuestions,
  type DiqCategory,
  type DiqTier,
} from "@/lib/diq";

type Result = {
  score: number;
  tier: DiqTier;
  categoryScores: Record<DiqCategory, number>;
};

type Stage = "intro" | "quiz" | "email" | "result";

const confettiPieces = Array.from({ length: 54 }, (_, index) => ({
  id: index,
  left: (index * 37) % 100,
  delay: (index % 9) * 55,
  duration: 1500 + (index % 7) * 130,
  rotation: (index * 47) % 360,
}));

function loadLogo() {
  return new Promise<HTMLImageElement>((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = reject;
    image.src = "/brand/tieko-logo-header.png";
  });
}

async function createScorecardBlob(result: Result) {
  const canvas = document.createElement("canvas");
  canvas.width = 1200;
  canvas.height = 630;
  const context = canvas.getContext("2d");
  if (!context) throw new Error("Scorecard drawing is not supported in this browser.");

  const colours = {
    red: "#d92d20",
    orange: "#d97706",
    green: "#16803c",
  } as const;
  const accent = colours[result.tier.colour];

  context.fillStyle = "#f4f0e7";
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = "#252321";
  context.fillRect(0, 0, 410, canvas.height);
  context.fillStyle = accent;
  context.fillRect(410, 0, 18, canvas.height);

  try {
    const logo = await loadLogo();
    context.drawImage(logo, 58, 42, 168, 88);
  } catch {
    context.fillStyle = "#ffffff";
    context.font = "700 34px Arial";
    context.fillText("TIEKO", 60, 95);
  }

  context.fillStyle = "#ffffff";
  context.font = "700 20px Arial";
  context.fillText("YOUR DIGITAL INTELLIGENCE", 60, 190);
  context.fillText("QUOTIENT", 60, 220);
  context.font = "800 162px Arial";
  context.fillText(String(result.score), 54, 405);
  context.font = "700 34px Arial";
  context.fillText("OUT OF 100", 62, 454);
  context.fillStyle = "#d4ccc0";
  context.font = "22px Arial";
  context.fillText("tiekomedia.com", 60, 564);

  context.fillStyle = accent;
  context.font = "800 46px Arial";
  context.fillText(result.tier.label.toUpperCase(), 482, 102);
  context.fillStyle = "#252321";
  context.font = "26px Arial";
  context.fillText("Your capability profile", 482, 150);

  diqCategories.forEach((category, index) => {
    const y = 218 + index * 70;
    const value = result.categoryScores[category];
    context.fillStyle = "#5f5b55";
    context.font = "700 19px Arial";
    context.fillText(category.toUpperCase(), 482, y);
    context.textAlign = "right";
    context.fillText(`${value}%`, 1118, y);
    context.textAlign = "left";
    context.fillStyle = "#ddd5c8";
    context.fillRect(482, y + 15, 636, 14);
    context.fillStyle = value >= 70 ? "#16803c" : value >= 50 ? "#d97706" : "#d92d20";
    context.fillRect(482, y + 15, Math.max(8, 6.36 * value), 14);
  });

  context.fillStyle = "#5f5b55";
  context.font = "18px Arial";
  context.fillText("20-question assessment / Completed with Tieko Media", 482, 590);

  return new Promise<Blob>((resolve, reject) => {
    canvas.toBlob((blob) => (blob ? resolve(blob) : reject(new Error("Could not create scorecard."))), "image/png");
  });
}

export default function DiqAssessment() {
  const [stage, setStage] = useState<Stage>("intro");
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<boolean[]>([]);
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");
  const [error, setError] = useState("");
  const [result, setResult] = useState<Result | null>(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const [shareMessage, setShareMessage] = useState("");
  const progress = useMemo(() => Math.round((answers.length / diqQuestions.length) * 100), [answers.length]);
  const question = diqQuestions[current];

  async function beginAssessment() {
    setStatus("sending");
    setError("");

    try {
      const response = await fetch("/api/diq", { method: "GET", credentials: "same-origin", cache: "no-store" });
      const data = (await response.json()) as { error?: string };
      if (!response.ok) {
        throw new Error(data.error || "The assessment is temporarily unavailable.");
      }
      setStage("quiz");
      setStatus("idle");
    } catch (sessionError) {
      setStatus("error");
      setError(
        sessionError instanceof Error
          ? sessionError.message
          : "The assessment is temporarily unavailable. Please try again shortly.",
      );
    }
  }

  function answerQuestion(value: boolean) {
    const nextAnswers = answers.slice(0, current);
    nextAnswers[current] = value;
    setAnswers(nextAnswers);

    if (current === diqQuestions.length - 1) {
      setShowConfetti(true);
      window.setTimeout(() => setShowConfetti(false), 2800);
      setStage("email");
      return;
    }

    setCurrent((position) => position + 1);
  }

  function goBack() {
    if (current === 0) {
      setStage("intro");
      return;
    }
    setCurrent((position) => position - 1);
    setAnswers((currentAnswers) => currentAnswers.slice(0, -1));
  }

  async function submitEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setError("");

    try {
      const response = await fetch("/api/diq", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, answers, website: company, consent: true }),
      });
      const payload = (await response.json()) as Result & { error?: string };
      if (!response.ok) throw new Error(payload.error || "We could not send your scorecard.");

      setResult({ score: payload.score, tier: payload.tier, categoryScores: payload.categoryScores });
      setStage("result");
      setStatus("idle");
    } catch (submissionError) {
      setStatus("error");
      setError(submissionError instanceof Error ? submissionError.message : "Please try again.");
    }
  }

  async function downloadScorecard() {
    if (!result) return;
    const blob = await createScorecardBlob(result);
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `tieko-diq-${result.score}.png`;
    link.click();
    URL.revokeObjectURL(url);
  }

  async function shareScore() {
    if (!result) return;
    const text = `I scored ${result.score}/100 on Tieko Media's Digital Intelligence Quotient: ${result.tier.label}.`;
    const blob = await createScorecardBlob(result);
    const file = new File([blob], `tieko-diq-${result.score}.png`, { type: "image/png" });

    try {
      if (navigator.share && navigator.canShare?.({ files: [file] })) {
        await navigator.share({ title: "My Tieko DIQ score", text, url: window.location.href, files: [file] });
        setShareMessage("Scorecard shared.");
      } else if (navigator.share) {
        await navigator.share({ title: "My Tieko DIQ score", text, url: window.location.href });
        setShareMessage("Score shared.");
      } else {
        await navigator.clipboard.writeText(`${text} ${window.location.href}`);
        setShareMessage("Share text copied to your clipboard.");
      }
    } catch (shareError) {
      if (shareError instanceof DOMException && shareError.name === "AbortError") return;
      setShareMessage("Sharing is unavailable here. Download the scorecard instead.");
    }
  }

  function restart() {
    setStage("intro");
    setCurrent(0);
    setAnswers([]);
    setEmail("");
    setResult(null);
    setError("");
    setShareMessage("");
  }

  return (
    <section className="diq-assessment" aria-labelledby="diq-assessment-heading">
      {showConfetti && (
        <div className="diq-confetti" aria-hidden="true">
          {confettiPieces.map((piece) => (
            <span
              key={piece.id}
              style={{
                left: `${piece.left}%`,
                animationDelay: `${piece.delay}ms`,
                animationDuration: `${piece.duration}ms`,
                transform: `rotate(${piece.rotation}deg)`,
              }}
            />
          ))}
        </div>
      )}

      {stage === "intro" && (
        <div className="diq-intro-card">
          <div>
            <p className="section-eyebrow">Free 3-minute assessment</p>
            <h2 id="diq-assessment-heading">Is your business infrastructure working for you?</h2>
            <p>Answer 20 yes-or-no questions across five capability areas. Each &ldquo;yes&rdquo; earns 5 points, for a score out of 100.</p>
          </div>
          <div className="diq-intro-actions">
            <button type="button" onClick={beginAssessment} disabled={status === "sending"}>
              {status === "sending" ? "Preparing your test..." : "Take the DIQ test"} <span aria-hidden="true">&rarr;</span>
            </button>
            <span>Free. No account needed. We only ask for your email when your score is ready.</span>
            {error && <p className="diq-form-error" role="alert">{error}</p>}
          </div>
        </div>
      )}

      {stage === "quiz" && question && (
        <div className="diq-quiz-card">
          <div className="diq-progress" aria-label={`${progress}% complete`}>
            <div className="diq-progress-meta">
              <span>{question.category}</span>
              <span>{current + 1} / {diqQuestions.length}</span>
            </div>
            <div className="diq-progress-track"><span style={{ width: `${progress}%` }} /></div>
          </div>

          <div className="diq-question" aria-live="polite">
            <p>Question {String(current + 1).padStart(2, "0")}</p>
            <h2>{question.text}</h2>
            <span>{question.context}</span>
          </div>

          <div className="diq-answer-actions" role="group" aria-label="Choose your answer">
            <button type="button" className="diq-answer-yes" onClick={() => answerQuestion(true)}>
              <strong>Yes</strong><span>This is in place</span>
            </button>
            <button type="button" className="diq-answer-no" onClick={() => answerQuestion(false)}>
              <strong>No</strong><span>Not yet</span>
            </button>
          </div>
          <button type="button" className="diq-back" onClick={goBack}>&larr; Previous</button>
        </div>
      )}

      {stage === "email" && (
        <div className="diq-email-card">
          <div className="diq-email-copy">
            <p className="section-eyebrow">Assessment complete</p>
            <h2>Your DIQ score is ready.</h2>
            <p>Enter your email to reveal the scorecard here and receive a private copy in your inbox.</p>
            <p className="diq-privacy-note">We only collect your email address. It will never appear on your downloadable or shared scorecard.</p>
          </div>
          <form onSubmit={submitEmail} className="diq-email-form">
            <label htmlFor="diq-email">Email address</label>
            <input
              id="diq-email"
              name="email"
              type="email"
              inputMode="email"
              autoComplete="email"
              maxLength={254}
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@company.com"
            />
            <div className="diq-honeypot" aria-hidden="true">
              <label htmlFor="diq-company">Company website</label>
              <input id="diq-company" name="company" tabIndex={-1} autoComplete="off" value={company} onChange={(event) => setCompany(event.target.value)} />
            </div>
            <label className="diq-consent">
              <input type="checkbox" required />
              <span>Email my DIQ result and relevant Tieko Media recommendations.</span>
            </label>
            <button type="submit" disabled={status === "sending"}>
              {status === "sending" ? "Securing your result..." : "Reveal and email my score"}
            </button>
            {error && <p className="diq-form-error" role="alert">{error}</p>}
          </form>
        </div>
      )}

      {stage === "result" && result && (
        <div className={`diq-result diq-result-${result.tier.colour}`}>
          <div className="diq-scorecard" id="diq-scorecard">
            <div className="diq-scorecard-brand">
              <span>Tieko Media</span>
              <small>Digital Intelligence Quotient</small>
            </div>
            <div className="diq-score-main">
              <div className="diq-score-number"><strong>{result.score}</strong><span>/100</span></div>
              <div><p>Your DIQ level</p><h2>{result.tier.label}</h2></div>
            </div>
            <p className="diq-score-summary">{result.tier.summary}</p>
            <div className="diq-category-results">
              {diqCategories.map((category) => (
                <div key={category}>
                  <span>{category}</span><strong>{result.categoryScores[category]}%</strong>
                  <div><i style={{ width: `${result.categoryScores[category]}%` }} /></div>
                </div>
              ))}
            </div>
            <p className="diq-scorecard-url">tiekomedia.com</p>
          </div>

          <div className="diq-result-actions">
            <p>{result.tier.recommendation}</p>
            <div>
              <button type="button" onClick={shareScore}>Share score</button>
              <button type="button" className="diq-download" onClick={downloadScorecard}>Download scorecard</button>
            </div>
            {shareMessage && <span role="status">{shareMessage}</span>}
            <Link href="/start-your-review">Get a free infrastructure review <span aria-hidden="true">&rarr;</span></Link>
            <button type="button" className="diq-restart" onClick={restart}>Retake the assessment</button>
          </div>
        </div>
      )}
    </section>
  );
}
