# SourceSprint — Frontend

[![React](https://img.shields.io/badge/React-17.0.2-61DAFB?style=flat-square&logo=react&logoColor=black)](https://reactjs.org/)
[![Three.js](https://img.shields.io/badge/Three.js-r158-black?style=flat-square&logo=three.js&logoColor=white)](https://threejs.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3.3-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Node.js](https://img.shields.io/badge/Node.js-16%2B-339933?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-E8A045?style=flat-square)](https://github.com/thetan-dev/SourceSprint--Frontend/pulls)

SourceSprint is a high-intensity, collaborative open-source platform designed to help developers learn Git, master modern open-source workflows, and make their first contributions in a gamified, real-time environment.

This repository hosts the client-side single-page application built with React, Tailwind CSS, and Three.js.

---

## Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Technology Stack](#technology-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Local Development](#local-development)
  - [Environment Configuration](#environment-configuration)
- [Available Scripts](#available-scripts)
- [Project Architecture](#project-architecture)
- [Contribution Workflow](#contribution-workflow)

---

## Overview

The SourceSprint frontend provides an immersive experience for event participants:
- Dynamic 3D visual environments that respond to user mouse physics.
- Live validation for participant registration and GitHub verification.
- Interactive documentation and cheatsheets for mastering Git CLI commands.
- Live scoreboards and event countdown scheduling.

---

## Key Features

- **Interactive 3D Galaxy Canvas**: Real-time particle field powered by `@react-three/fiber` and `@react-three/drei` providing dynamic cursor-following depth.
- **Participant Registration**: Dedicated registration workflow at `/register` with validation rules for student identifiers and GitHub handles.
- **Precision Countdown Timer**: Synchronized event countdown tracking launch milestones.
- **Git Developer Resources Hub**: Interactive command hub at `/resources` featuring copyable commands, environment setup notes, and verified CLI guides.
- **Gamified Leaderboard**: Live ranking system tracking contributor activities and project statistics.
- **Responsive Glassmorphism UI**: Bespoke dark aesthetic with golden-amber accents, optimized across mobile, tablet, and widescreen displays.

---

## Technology Stack

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **UI Framework** | React 17.0.2 | Component architecture and state management |
| **3D Graphics** | Three.js / React Three Fiber / Drei | Interactive canvas and particle systems |
| **Styling** | Tailwind CSS & Custom CSS3 | Modern glassmorphic dark design system |
| **Routing** | React Router v5 | Client-side routing and route-level protection |
| **Networking** | Axios | REST API communication with backend services |
| **Icons & Assets** | Custom SVG Design System & Font Awesome | Scalable vector iconography |

---

## Getting Started

### Prerequisites

- **Node.js**: `v16.x` or higher (compatible with `v18`, `v20`, and `v22` using legacy provider flags)
- **Package Manager**: `npm` (bundled with Node.js) or `yarn`
- **Git**: Installed and configured on your system

### Installation

1. Clone the repository to your local environment:
   ```bash
   git clone https://github.com/thetan-dev/SourceSprint--Frontend.git
   cd SourceSprint--Frontend
   ```

2. Install dependencies:
   ```bash
   npm install --legacy-peer-deps
   ```
   > **Note**: The `--legacy-peer-deps` flag ensures smooth resolution with React 17 and Three.js peer dependency trees.

### Local Development

Start the development server with hot-reload enabled:

```bash
npm run dev
```

The application will be accessible at:
```text
http://localhost:3000
```

### Environment Configuration

The app talks to the backend through a single environment variable. Copy the
provided sample and set it:

```bash
cp .env.sample .env
```

```env
# .env  — base URL of the SourceSprint backend (no trailing slash)
REACT_APP_BACKEND_URL=http://localhost:5000
```

Notes:
- The variable **must** be named `REACT_APP_BACKEND_URL` (Create React App only
  exposes `REACT_APP_*` vars).
- CRA reads env vars at **build time**, so rebuild/redeploy after changing it.
- If it is unset, the code falls back to `http://localhost:5000` for local dev.

---

## Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the development server at `http://localhost:3000` |
| `npm start` | Alias for `npm run dev` with legacy OpenSSL support enabled |
| `npm run build` | Compiles an optimized, production-ready bundle into the `build/` directory |
| `npm test` | Launches the interactive test runner |
| `npm run eject` | Ejects Create React App configuration (one-way operation) |

---

## Project Architecture

```text
SourceSprint--Frontend/
├── public/                 # Static assets, HTML shell, and manifest
│   ├── favicon.ico
│   └── index.html
├── src/
│   ├── assets/             # Vector icons, branding assets, and static illustrations
│   ├── components/         # Reusable presentation and layout components
│   │   ├── Home/           # Hero section and 3D galaxy canvas
│   │   ├── Navbar/         # Main navigation headers
│   │   ├── Resources/      # Git commands reference and CLI setup guides
│   │   ├── Timer/          # Event countdown components
│   │   └── Footer/         # Social links, chapter information, and credits
│   ├── Pages/              # Primary route views
│   │   ├── HomePage/       # Landing page view
│   │   ├── RegistrationPage/# Registration form view
│   │   ├── ResourcesPage/  # Developer resources hub view
│   │   └── LeaderboardPage/# Live leaderboard and metrics
│   ├── App.js              # Application root and route definitions
│   ├── index.js            # React DOM mounting entry point
│   ├── index.css           # Global stylesheets and design tokens
│   └── tailwind.config.js  # Tailwind CSS theme configuration
├── package.json            # Project dependencies and operational scripts
└── package-lock.json       # Deterministic dependency lockfile
```

---

## Contribution Workflow

We welcome contributions from the community. To contribute:

1. **Fork** the repository on GitHub.
2. **Clone** your fork locally:
   ```bash
   git clone https://github.com/<your-username>/SourceSprint--Frontend.git
   cd SourceSprint--Frontend
   ```
3. **Create a branch** for your feature or bugfix:
   ```bash
   git checkout -b feature/your-feature-name
   ```
4. **Make your changes** and test locally:
   ```bash
   npm run dev
   ```
5. **Commit your work** with clear, descriptive messages:
   ```bash
   git commit -m "feat: implement responsive filter for resources hub"
   ```
6. **Push** the branch to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```
7. **Open a Pull Request** against the `main` branch with a clear description of your changes.
