# Component Usage Reporter

Scans a React / TypeScript codebase and reports how each UI component is used.

- Counts every component instance.
- Records the import path for each component.
- Calculates the average number of props per component.
- Lists components that are never imported.
- Saves all results to PostgreSQL (Prisma) or in-browser SQL.js.

Purpose & Context
Our new Component Usage Reporter is designed to analyse how React UI components are used across your codebase.

# Key Features & Workflows

1. Clone & Persist

   - Enter a Git URL and project name in CloneForm
   - Repository is cloned, built, and its usage data captured.

2. Saved Projects Management

   - SavedProjectsTable lists all analused projects with "Load" actions.
   - Quickly switch between reports to compare multiple codebases or branches.

3. Top-10 Pie Chart

   - ChartsPanel displays a pie of the ten most-imported components.
   - Immediately highlights your "core" components candiates for prioritise migration.

4. Components Per Package Bar Chart

   - Visualises how many distinct components each package contributes.
   - Reveals which libraries drive the most UI code surface.

5. Drill Down Detail Table

   - DetailTable lists each component, its average props count, import sources, usage breakdown across files.
   - Sortable by name or average props to find heavy or property rich components.

6. Unused Components

   - A collapsible list of components never imported ideal for cleanup or retirement.

---

# Benefits

The component Usage Reporter provides the analytical backbone for a controlled, transparent migration from legacy UI libraries to your new component system minimising risk, maximising ROI.

- Data Drive Decisions - Move from gut feel to measurable migration milestones.
- Cost Savings - Focus effort where impact is highest, avoid spending on rarely used components.
- Quality & Consistency - Standardise on a single UI library, reducing maintenance overhead.
- Transparency - Charts and tables sh owing integration progress.

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

   ```bash
   git clone https://github.com/your-org/component-usage-reporter.git
   cd component-usage-reporter
   ```

2. Install dependencies
   `npm install`

3. Configure environment

```cp .env.example .env
# then edit .env and set :
DB_PROVIDER=sqljs      # or use: sqljs | prisma

if using Postgres then point your DATABASE_URL to your your Postgres db
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
