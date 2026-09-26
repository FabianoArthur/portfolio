# Contributing

Thanks for taking the time! This is a personal portfolio, so the scope is small, but fixes
(typos, accessibility, broken links, performance) are very welcome.

1. Use Node 22 (`nvm use`) and install with `npm ci`.
2. Run `npm run dev` and open <http://localhost:3000>.
3. Before opening a pull request, run the same gates as CI:

   ```bash
   npm run lint && npm run typecheck && npm test && npm run build && npm run check:export
   ```

4. Copy lives in `messages/en.json` and `messages/pt.json`. Every key must exist in both
   (a test enforces it). Projects are listed in `lib/projects.ts`.
5. Keep commits small and use [Conventional Commits](https://www.conventionalcommits.org/)
   (`feat:`, `fix:`, `docs:`, `chore:` …).
