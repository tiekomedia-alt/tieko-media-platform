export function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export function emailField(label: string, value: string) {
  return `<tr><td style="padding:8px 12px;border-bottom:1px solid #e5e1da;font-weight:700;vertical-align:top">${escapeHtml(label)}</td><td style="padding:8px 12px;border-bottom:1px solid #e5e1da">${escapeHtml(value)}</td></tr>`;
}

export function emailLayout(title: string, fields: string) {
  return `
    <div style="background:#f4f0e7;padding:32px;font-family:Arial,sans-serif;color:#111">
      <div style="max-width:680px;margin:0 auto;background:#fff;border:1px solid #d8d1c5">
        <div style="background:#252321;color:#fff;padding:24px">
          <p style="margin:0 0 8px;color:#ef7779;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:1px">Tieko Media website</p>
          <h1 style="margin:0;font-size:28px">${escapeHtml(title)}</h1>
        </div>
        <table style="width:100%;border-collapse:collapse;font-size:14px">${fields}</table>
      </div>
    </div>
  `;
}
