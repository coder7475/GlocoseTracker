# Contributing to GlucoseTracker

Thank you for your interest in contributing! This guide will help you get started.

## Getting Started

1. **Fork the repository** and clone your fork
2. **Install dependencies**:
   ```bash
   pnpm install
   ```
3. **Start the development server**:
   ```bash
   pnpm start
   ```

## Development Workflow

1. Create a new branch from `main`:
   ```bash
   git checkout -b feature/your-feature-name
   ```
2. Make your changes
3. Run the linter:
   ```bash
   pnpm run lint
   ```
4. Commit your changes with a clear message
5. Push to your fork and open a Pull Request

## Code Style

- **TypeScript**: The project uses strict TypeScript. Ensure your code is properly typed.
- **Components**: Follow the existing component structure in `src/components/`.
- **Naming**: Use PascalCase for components, camelCase for functions and variables.
- **Files**: Component files should be named after their export (e.g., `MacroCard.tsx`).

## Pull Request Guidelines

- Keep PRs focused on a single feature or fix
- Provide a clear description of what the PR does
- Reference any related issues
- Ensure all lint checks pass

## Reporting Issues

When reporting bugs, please include:
- Device model and OS version
- Steps to reproduce the issue
- Expected vs actual behavior
- Screenshots if applicable

## Code of Conduct

Please be respectful and constructive in all interactions. We're here to build something great together!

## Questions?

Feel free to open an issue for any questions about contributing.
