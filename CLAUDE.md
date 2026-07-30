# Deployment workflow

- This repository is already connected to Cloudflare Pages externally through the Cloudflare dashboard.
- Cloudflare Pages automatically deploys every push to the main branch.
- The Cloudflare integration is not visible from the local repository, GitHub webhooks, commit statuses, Wrangler files, or the local Claude Code environment.
- The absence of locally detectable Cloudflare configuration does not mean that Cloudflare is disconnected.
- Never state that Cloudflare Pages is disconnected or unconfigured.
- Never attempt to detect, verify, connect, configure, or troubleshoot Cloudflare unless I explicitly ask.
- After pushing to main, report only that the GitHub push succeeded.
- Do not mention Cloudflare deployment status after routine content or design changes.
- Do not add Wrangler, Cloudflare configuration files, GitHub Actions, webhooks, or deployment scripts unless I explicitly request them.

# Standard change workflow

For approved website changes:

1. Make only the requested changes.
2. Run npm run build.
3. Commit the changes.
4. Push main to GitHub.
5. Confirm:
   - commit hash
   - push succeeded
   - local and remote are in sync
   - working tree is clean
6. Stop there.
