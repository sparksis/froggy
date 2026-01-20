# Project Amphibian: Architecture & Specification

## Metadata
- **Name:** Project Amphibian (Froggy Weather PWA)
- **Version:** 1.0.0
- **Type:** Progressive Web App (PWA) / Dashboard
- **Target Runtime:** Cloudflare Pages (Edge)

## Tech Stack
- **Framework:** Next.js 15+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + `@tailwindcss/container-queries`
- **State Management:** Zustand (Global UI State)
- **Data Fetching:** Tanstack Query (Polling & Caching)
- **Deployment:** Cloudflare Pages (`@cloudflare/next-on-pages`)

## Core Constraints
1.  **Image Optimization:** MUST be disabled or handled manually via SVGs. Next.js `<Image>` optimization is incompatible with Cloudflare Pages export unless an external loader is used. Set `unoptimized: true` in config.
2.  **Rendering Strategy:** Client-Side Fetching for Weather Data (due to long-running dashboard usage). Static Export (SSG) for the App Shell.
3.  **Responsive Design:** MUST use Container Queries, not just Media Queries, to support resizing widgets within Home Assistant or Smart Mirrors.

## Functional Requirements
- **The Logic Matrix:** A mapping system converting WMO Weather Codes + Time + Temp -> Frog Asset (e.g., "Frog in Raincoat").
- **Burn-in Protection:** Pixel-shifting logic for OLED Smart Mirrors.
- **Wake Lock:** Navigator API integration to keep displays awake.
