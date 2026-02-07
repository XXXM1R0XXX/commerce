# AGENTS.md — Next.js Commerce

This is the Vercel Commerce template: a Next.js 15 App Router storefront backed by Shopify's Storefront API.
Single-package repository (not a monorepo). Package manager is **pnpm**.

## Build / Lint / Test Commands

```bash
pnpm install          # Install dependencies
pnpm dev              # Start dev server (uses Turbopack)
pnpm build            # Production build
pnpm start            # Start production server
pnpm test             # Runs prettier:check (no test framework)
pnpm prettier:check   # Check formatting
pnpm prettier         # Auto-fix formatting
```

There is no unit/integration test framework configured. The `test` script only runs Prettier.
There is no ESLint — Prettier is the sole code quality tool (default config + `prettier-plugin-tailwindcss`).

To type-check without building:

```bash
pnpm tsc --noEmit
```

## Environment Variables

Copy `.env.example` to `.env.local`. Required vars:

- `SHOPIFY_STORE_DOMAIN` — e.g. `my-store.myshopify.com`
- `SHOPIFY_STOREFRONT_ACCESS_TOKEN`
- `SHOPIFY_REVALIDATION_SECRET` — for webhook-based ISR
- `COMPANY_NAME`, `SITE_NAME` — display strings

## Project Structure

```
app/                    # Next.js App Router pages and API routes
  api/revalidate/       # Webhook revalidation endpoint
  [page]/               # Dynamic CMS pages
  product/[handle]/     # Product detail pages
  search/[collection]/  # Collection/search pages
components/             # React components (cart, grid, layout, product)
lib/                    # Shared library code
  shopify/              # Shopify Storefront API client, GraphQL queries, types
    fragments/          # Reusable GraphQL fragments
    mutations/          # GraphQL mutations (cart operations)
    queries/            # GraphQL queries (products, collections, etc.)
  constants.ts          # App constants (tags, default options)
  utils.ts              # Utility functions
  type-guards.ts        # Runtime type guards
fonts/                  # Font files for opengraph image generation
```

## TypeScript

- **Strict mode** is enabled (`strict: true`, `noUncheckedIndexedAccess: true`)
- `baseUrl: "."` — use absolute imports from project root: `import { getCart } from "lib/shopify"`
- No path aliases (`@/` etc.) — bare paths starting with `lib/`, `components/`, `app/`
- Always handle potentially-undefined index access (enforced by `noUncheckedIndexedAccess`)

## Code Style

### Formatting

- Prettier defaults: double quotes, 2-space indent, trailing commas, semicolons, 80 char print width
- Tailwind classes are auto-sorted by `prettier-plugin-tailwindcss`
- Run `pnpm prettier` before committing

### Imports

- **Absolute imports** for cross-directory references: `import CartModal from "components/cart/modal"`
- **Relative imports** for same-directory or sibling files: `import { FilterItem } from "./item"`
- No `@/` prefix — the project uses `baseUrl: "."` directly
- VSCode is configured to auto-organize imports on save

### Naming Conventions

- **Files**: `kebab-case.tsx` (e.g., `cart-context.tsx`, `edit-item-quantity-button.tsx`)
- **React components**: `PascalCase` (e.g., `CartProvider`, `VariantSelector`)
- **Functions / variables**: `camelCase` (e.g., `reshapeCart`, `selectedVariantId`)
- **Constants**: `UPPER_SNAKE_CASE` (e.g., `HIDDEN_PRODUCT_TAG`, `TAGS`)
- **Types / interfaces**: `PascalCase` (e.g., `ShopifyCart`, `ProductVariant`)

### Exports

- **Named exports** for most components and utilities
- **Default exports** for page components (`page.tsx`), layouts (`layout.tsx`), and some leaf UI components

### Props Typing

- Inline at function parameters, not as separate interfaces:
  ```tsx
  function ProductCard({ product }: { product: Product }) { ... }
  ```

## React / Next.js Patterns

### Server vs Client Components

- **Server Components by default** — do not add `"use client"` unless the component needs browser APIs, hooks, or event handlers
- Add `"use client"` only for interactive components (modals, forms, search, galleries, context providers)
- Use `"use server"` for Server Actions (e.g., `components/cart/actions.ts`)

### Async Server Components

- Server Components can be `async` and fetch data directly:
  ```tsx
  export default async function Page() {
    const products = await getCollectionProducts({ collection: "..." });
    return <Grid items={products} />;
  }
  ```

### Caching

- Uses experimental `use cache` / `"use cache: private"` directives with `cacheTag` and `cacheLife`
- ISR via webhook-based revalidation at `/api/revalidate`

### React 19 APIs

- `useOptimistic` for optimistic cart updates
- `useActionState` for form action state management
- `<Suspense>` boundaries with fallbacks for async content

### Next.js Experimental Features

- **Partial Pre-Rendering (PPR)** enabled
- **Inline CSS** enabled
- **use cache** enabled

## Styling

- **Tailwind CSS v4** exclusively — no CSS modules, no styled-components
- CSS entry point: `app/globals.css` with `@import "tailwindcss"` (v4 syntax)
- No `tailwind.config.ts` — Tailwind v4 uses CSS-based configuration
- Use **`clsx`** for conditional class composition:
  ```tsx
  import clsx from "clsx";
  <div className={clsx("base-class", condition && "conditional-class")} />;
  ```
- **Dark mode** supported via `dark:` prefix throughout
- Plugins: `@tailwindcss/container-queries`, `@tailwindcss/typography`

## Data Layer (Shopify)

- All Shopify data fetching goes through `lib/shopify/index.ts`
- GraphQL queries use tagged template literals with `/* GraphQL */` comment for IDE highlighting
- Reusable GraphQL fragments live in `lib/shopify/fragments/`
- Shopify responses (edges/nodes) are "reshaped" into flat types before use
- Types for Shopify API responses and reshaped data are in `lib/shopify/types.ts`

## Error Handling

- `app/error.tsx` is a client-side error boundary (uses `"use client"`)
- Shopify API errors: check response status in `shopifyFetch`, throw on non-200 with error body
- Cart operations use try/catch in Server Actions, returning error messages via `useActionState`
- Type guards in `lib/type-guards.ts` for runtime validation

## Images

- Remote images from `cdn.shopify.com` are allowed in `next.config.ts`
- Formats: AVIF and WebP preferred
- Opengraph images generated dynamically via `opengraph-image.tsx` at multiple route levels
