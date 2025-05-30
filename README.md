# Lyfe Next.js Template

A modern Next.js template using the Pages Router, featuring a hybrid architecture that combines feature-based organization with component-driven development enabling scalable development and modular organization. Built with TypeScript, Tailwind CSS, and a curated set of powerful tools.

## 🏗️ Project Architecture

```
src/
├── components/          # Shared, reusable UI components
│   ├── ui/             # Primitive components (button, input, etc.)
│   ├── layout/         # App shell components (navbar, sidebar)
│   └── shared/         # Reusable widgets (avatar, user menu, etc.)
├── features/           # Feature-based domain folders
│   ├── auth/          # Auth logic (api, hooks, components)
│   └── agents/        # Agent listing or interactions
├── hooks/             # Global custom hooks
├── lib/               # Utility functions and constants
├── providers/         # App-wide providers (query, zustand, theme)
├── routes/            # Route definitions and guards
├── pages/             # Next.js pages
├── types/             # Shared TypeScript types
└── styles/            # Tailwind and global CSS
```

### Architecture Overview

- **Feature Folders**: Each feature encapsulates its own `components/`, `api.ts`, `hooks/`, and `store.ts`
- **Shared Components**: Reusable UI components in `components/` are available across features
- **Global Providers**: App-wide providers (ReactQueryProvider, ZustandStoreProvider) wrap the application

## 🚀 Features

- ⚡️ Next.js with Pages Router
- 🔥 React 19 with TypeScript
- 🎨 Tailwind CSS with shadcn/ui components
- 📦 PNPM as package manager
- 🎯 ESLint + Prettier for code quality
- 🔄 React Query for data fetching
- 🎭 Radix UI primitives
- 🎮 State management with Zustand
- 🚀 Turbopack for faster development

## 📦 Setup Instructions

### 1. Using the Template

```bash
# Create a new project using the template
pnpm dlx lyfe init <project-name>

# Navigate to project directory
cd <project-name>

# Install dependencies
pnpm install

# Start development server
pnpm dev
```


### 2. Manual Setup

```bash
# Clone the repository
git clone https://github.com/your-username/your-repo.git
cd your-repo

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

## 🧱 Code Guidelines

### Feature Organization
- Keep feature-specific logic inside respective `features/` folders
- Each feature should be self-contained with its own components, API calls, and state management
- Use `hooks/` for shared logic (e.g., `useDebounce`, `useIsMobile`)

### Component Development
- All UI components should be reusable and responsive
- Follow consistent naming conventions:
  - kebab-case for files
  - PascalCase for components
- Use shadcn/ui components as building blocks
- Use `pnpm lyfe add <component/template-name>` for additional components or template built as shareable.

### State Management (Zustand)
- Lightweight, scalable state management per feature
- Feature-specific stores live in `features/<feature>/store.ts`
- Global state managed through providers

### API Handling (React Query)
- All API calls use `@tanstack/react-query`
- Query setup provided in `ReactQueryProvider`
- API logic co-located in feature folders (`features/<feature>/api.ts`)

### UI System
- Tailwind CSS for utility-first styling
- shadcn/ui for accessible, reusable components
- Extensible through Tailwind configuration

## 🛠️ Available Scripts

- `pnpm dev` - Start development server with Turbopack
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## 📚 Key Dependencies

- **Framework**: Next.js
- **UI Library**: React 19
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Data Fetching**: TanStack Query
- **UI Components**: shadcn/ui + Radix UI
- **Development**: TypeScript, ESLint, Prettier

## 🔧 Configuration Files

- `next.config.ts` - Next.js configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration
- `eslint.config.mjs` - ESLint configuration
- `postcss.config.mjs` - PostCSS configuration

## 📝 License

This project is private and proprietary.

## 🤝 Contributing

This is a private template. Please contact the maintainers for contribution guidelines.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

