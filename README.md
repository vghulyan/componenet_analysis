# Component Usage Reporter

A full-stack Next.js application for analyzing React/TypeScript codebase. It discovers:

- How many times each UI component is used
- Which package each component is imported from
- The average number of props each component takes
- Unused components in the project
- Persists all results to PostgreSQL via Prisma

---

## 🚀 Features

- **Static scan** of your `src/` directory for `.js`/`.jsx`/`.ts`/`.tsx` files
- **JSX component detection** via capitalized tags
- **Import-source tracking** (e.g. `import Button from 'react'` vs. `import Button from '@my/ui'`)
- **Average prop-count calculation** per component
- **Interactive UI** with:
  - Zebra-striped, responsive tables
  - Per-component pie charts showing import-source breakdown
  - Global “Top 10 Components” donut chart
- **“Clone & Persist”** a public GitHub repo on-the-fly
- **Prisma-backed** PostgreSQL schema with indexable project records or
- **SQL JS-backed** SQL JS DB

---

## 📦 Installation

1. **Clone** this repo

   ````bash
   git clone https://github.com/your-org/component-usage-reporter.git
   cd component-usage-reporter```

   ````

2. Install dependencies
   `npm install`

3. Configure environment

```cp .env.example .env
# then edit .env and set :
DB_PROVIDER=sqljs      # or use: sqljs | prisma

if using Postgres then set the DATABASE_URL to point to your your Postgres
```

4. If using Postgres. Initialize database
   `npx prisma migrate dev --name init`

5. Start development server
   `npm run dev`

6. Open http://localhost:3000 in your browser.

---

## 🖼️ Screenshots

### Top 10 Components Donut Chart

![Top 10 Components](/public/screenshot_1.png)

### Per-Component Breakdown

![Per-Component Breakdown](/public/screenshot_2.png)

---
