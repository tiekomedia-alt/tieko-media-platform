import ChapterMarker from "@/components/home/ChapterMarker";

export default function ProblemSection() {
  return (
    <section aria-label="Visibility needs a foundation" className="problem-section relative w-full bg-soft-paper border-b border-grid-grey/50">
      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          <div className="lg:col-span-3 pt-1 lg:border-t lg:border-grid-grey/80 lg:pt-6">
            <ChapterMarker number="01" />
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-action-red" aria-hidden="true" />
              <p className="text-[0.75rem] font-bold uppercase tracking-[0.2em] text-slate">Visibility needs a foundation</p>
            </div>
          </div>

          <div className="lg:col-span-9 space-y-6 sm:space-y-7 lg:border-t lg:border-grid-grey/80 lg:pt-6">
            <h2 className="font-display font-bold uppercase text-[2.15rem] sm:text-[2.8rem] md:text-[3.25rem] leading-[0.98] tracking-[-0.005em] text-ink-black max-w-[720px]">
              Attention is not enough. Your business needs infrastructure.
            </h2>

            <div className="space-y-5 text-slate text-[1.0625rem] sm:text-[1.125rem] leading-relaxed max-w-[720px]">
              <p>A campaign can bring people to your business. What they find next determines whether they trust it.</p>
              <p>An incomplete business identity, a confusing website, inconsistent content, weak records, poor measurement or decisions made without evidence can turn attention into wasted effort.</p>
              <p className="font-medium text-ink-black border-l-2 border-action-red pl-4 py-1">Tieko Media connects the systems behind the public result. We help you build correctly, communicate clearly, reach deliberately and improve with evidence.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
