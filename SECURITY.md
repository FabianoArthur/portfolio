# Security policy

## Reporting a vulnerability

Please **don't open a public issue**. Report it privately through
[GitHub private vulnerability reporting](https://github.com/FabianoArthur/portifolio/security/advisories/new)
or by email to fabianoarthur47@gmail.com. I'll acknowledge within a few days.

## What this site does to stay safe

- **Static only.** No server, no forms, no cookies, no analytics, no third-party scripts.
- **Content-Security-Policy** as a `<meta>` tag (GitHub Pages can't send headers), injected
  right after `<meta charset>` so it governs every script and stylesheet:
  `default-src 'self'`, no third-party origins, `object-src 'none'`, `base-uri 'self'`,
  `form-action 'none'`. `script-src` needs `'unsafe-inline'` because a static Next.js export
  inlines its page payload and there are no per-request nonces. `scripts/check-export.mjs`
  fails the build if the policy is missing, changed or placed after any resource.
- **Known limits of GitHub Pages:** headers such as `X-Frame-Options`,
  `frame-ancestors`, `Strict-Transport-Security` or `Permissions-Policy` can't be set, and
  `frame-ancestors` is ignored inside a `<meta>` policy. Put the site behind a proxy/CDN that
  sets headers if clickjacking protection is required.
- **Supply chain:** `npm ci` from the lockfile, GitHub Actions pinned by commit SHA,
  least-privilege `permissions:` in every workflow, and [gitleaks](https://github.com/gitleaks/gitleaks)
  scans the full git history on every push and pull request.
