# Modern TypeScript Kit

A minimal, modern TypeScript project template with built-in development, testing, and build toolchain. This template provides a solid foundation for TypeScript projects using the Void0 stack.

## Features

- 🚀 **Modern TypeScript** configuration targeting ES2022
- 📦 **tsup** for fast, simple bundling
- 🧪 **Vitest** for unit testing
- 🔍 **Type-safe environment variables** with Zod
- 🧹 **Code quality tools** including Prettier and oxlint
- 📄 **ESM modules** by default
- 🔄 **Watch mode** for development

## Getting Started

### Prerequisites

- Node.js (v18 or newer recommended)
- pnpm (recommended) or npm or yarn

### Installation

1. Clone this template:

```bash
# Using GitHub CLI
gh repo create my-project --template abstrucked/modern-ts-kit

# Or clone directly
git clone https://github.com/abstrucked/modern-ts-kit.git my-project
cd my-project
```

2. Install dependencies:

```bash
pnpm install
```

3. Create a `.env` file in the root directory with the following variables:

```
NODE_ENV=development
API_KEY=your_api_key_here
```

## Usage

### Development

Start the development server with hot reloading:

```bash
pnpm dev
```

### Building

Build the project for production:

```bash
pnpm build
```

The output will be in the `dist` directory.

### Running

Run the built application:

```bash
pnpm start
```

### Testing

Run tests:

```bash
pnpm test
```

### Type Checking

Run TypeScript type checking:

```bash
pnpm typecheck
```

### Linting and Formatting

Lint your code:

```bash
pnpm lint
```

Format your code:

```bash
pnpm format
```

## Project Structure

```
modern-ts-kit/
├── dist/               # Compiled output (generated)
├── src/                # Source code
│   ├── env.ts          # Environment variable configuration
│   ├── index.ts        # Main entry point
│   └── index.test.ts   # Example test file
├── .env                # Environment variables (create this)
├── package.json        # Project metadata and dependencies
├── tsconfig.json       # TypeScript configuration
└── tsup.config.ts      # Bundling configuration
```

## Environment Variables

This template uses Zod to validate environment variables, ensuring type safety. The following variables are required:

- `NODE_ENV`: Either 'development' or 'production'
- `API_KEY`: Your API key

You can add more variables by modifying the schema in `src/env.ts`.

## License

ISC

## Author

abstrucked