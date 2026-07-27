healIQ — Patient Experience Analytics Dashboard
Beyond the Survey.

A modern dashboard for Patient Experience Analytics and Automated Service Recovery. Built with React, Tailwind CSS, Vite, and Lucide React.

Features
Overview: Key performance indicators (KPIs), sentiment trends, facility heatmaps, top categories, department summaries, highlights, trending issues, and NPS tracking.

Live Feed: Real-time feedback stream powered by mock data.

Service Recovery: Automated workflow triggers and department assignments with toast confirmation.

Analytics: Category and source breakdowns, resolution metrics, and monthly trends.

Settings: Customizable notifications, dashboard preferences, integrations, and organization management.

Multi-Language Support: English, Hindi (हिंदी), and Tamil (தமிழ்).

Dark Mode: Integrated theme toggle for full light/dark mode support.

chatIQ: AI-powered patient experience assistant powered by the Claude API.

Setup & Configuration
Prerequisites
Ensure you have Node.js installed on your machine.

Environment Setup (chatIQ)
Copy .env.example to .env:

Bash
cp .env.example .env
Add your Anthropic API key to .env:

Code snippet
VITE_ANTHROPIC_API_KEY=sk-ant-your-key-here
Local Development
Install dependencies:

Bash
npm install
Start the development server:

Bash
npm run dev
Open http://localhost:5173 in your browser.

Build
To create a production build, run:

Bash
npm run build
The output files will be generated in the dist/ directory.

Deployment (GitHub Pages)
This project includes a GitHub Action to automatically build and deploy the app on pushes to the main branch.

Create a repository on GitHub (e.g., healiq-dashboard).

Push your code:

Bash
git init
git add .
git commit -m "Initial commit: healIQ dashboard"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
In your GitHub repository, go to Settings > Pages > Source and select GitHub Actions.

Once the deployment workflow finishes, your site will be live at:
`
