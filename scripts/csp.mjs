/**
 * Content-Security-Policy for the static site, delivered as <meta> because
 * GitHub Pages can't send response headers.
 *
 * 'unsafe-inline' scripts are required: a static Next.js export inlines its
 * RSC payload and has no per-request nonces. No third-party origin is allowed.
 * frame-ancestors is not listed: browsers ignore it in a <meta> policy.
 */
export const contentSecurityPolicy = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data:",
  "font-src 'self'",
  "connect-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'none'",
].join("; ");

const escapeAttr = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;");

export const cspMetaTag = `<meta http-equiv="Content-Security-Policy" content="${escapeAttr(contentSecurityPolicy)}"/>`;

const CHARSET = /<meta charset="utf-8"\/?>/i;

/**
 * Puts the CSP meta immediately after <meta charset>, before every script and
 * stylesheet: a meta policy only governs what the parser meets after it.
 * Idempotent.
 */
export function injectCsp(html) {
  if (html.includes(cspMetaTag)) return html;
  const match = CHARSET.exec(html);
  if (!match) throw new Error("injectCsp: no <meta charset> found");
  const at = match.index + match[0].length;
  return html.slice(0, at) + cspMetaTag + html.slice(at);
}
