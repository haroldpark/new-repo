# React + TypeScript + Vite

<!-- BADGES-START -->
![Build](https://img.shields.io/github/actions/workflow/status/haroldpark/new-repo/ci.yml?style=flat-square)
![Version](https://img.shields.io/github/v/release/haroldpark/new-repo?style=flat-square)
![License](https://img.shields.io/github/license/haroldpark/new-repo?style=flat-square)
![Stars](https://img.shields.io/github/stars/haroldpark/new-repo?style=flat-square)
![Issues](https://img.shields.io/github/issues/haroldpark/new-repo?style=flat-square)
![Last Commit](https://img.shields.io/github/last-commit/haroldpark/new-repo?style=flat-square)
<!-- BADGES-END -->










This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x';
import reactDom from 'eslint-plugin-react-dom';

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

# Workflows

## Included

1.  CI/CD - Build, Test, and Deploy
2.  Github automation - Auto-labeling
3.  Github automation - PR checks/workflows
4.  Github automation - release management

5.  Notifications - Discord/slack/telegram/email/sms/push notifications
6.  Utility - compress images
7.  Merge conflict???

## What's possible?

## Code Quality & Security

- Automated code formatting (Prettier, Black, gofmt) with auto-commits X
- Security vulnerability scanning (CodeQL, Snyk, dependency audits) X
- License compliance checking
- Code coverage reporting with trend tracking X
- Static analysis and linting enforcement X

## Documentation & Communication

- Auto-generate and update documentation from code comments X
- Create changelog entries from commit messages or PR labels X
- Update README badges automatically X
- Generate API documentation with scalar or GitHub Pages X
- Comment on PRs with build results, coverage changes, or performance metrics X

## Environment & Infrastructure Management

- Spin up/tear down preview environments for each PR X <----
- Database migrations and rollbacks
- Infrastructure as Code deployments (Terraform, CloudFormation)
- NPM Package Publishing
- Multi-environment promotion workflows (dev → staging → prod)
- Automatic scaling based on usage patterns

## Advanced Automation

- Dependency updates with automated testing (Dependabot + custom workflows)
- Performance benchmarking and regression detection X
- Cross-repository workflows (update multiple repos simultaneously)
- Scheduled maintenance tasks (cleanup old branches, archive issues) X
- Auto-merge PRs that pass all checks (great for dependency updates)
- Manual approvals (pause workflows and require human confirmation)

## Quality Gates & Compliance

- Require specific reviewers based on changed files X <----
- Enforce commit message conventions X <----
- Block deployments during maintenance windows X <----
- Audit logging for compliance requirements X <----