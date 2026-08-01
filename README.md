# 🚀 SourceSprint — Frontend

SourceSprint is a high-intensity, collaborative open-source event frontend where users can learn Git, master GitHub, and make their first contributions in a gamified, real-time environment. 

This repository contains the interactive client-side application built with React, TailwindCSS, and Three.js.

---

## ✨ Features

- **🌌 Interactive 3D Starfield**: A premium, interactive 3D particle background using `@react-three/fiber` and `@react-three/drei` that responds to mouse movements.
- **📝 Live Registration**: Seamless registration form at `/register` with client-side validation (e.g., matching student emails and GitHub usernames).
- **⏱️ Live Timer**: High-precision countdown component keeping track of the event launch.
- **🏆 Gamified Leaderboard**: View active participants, scores, and real-time project statistics.
- **📚 Resources Hub**: Curated materials and instructions to guide new contributors.
- **📱 Fully Responsive**: Optimized for desktop, tablet, and mobile screens.

---

## 🛠️ Tech Stack

- **Framework**: [React](https://reactjs.org/) (v17)
- **Styling**: [TailwindCSS](https://tailwindcss.com/) & Vanilla CSS
- **3D Graphics**: [Three.js](https://threejs.org/) via React Three Fiber (R3F) & Drei
- **Routing**: [React Router](https://v5.reactrouter.com/) (v5)
- **HTTP Client**: [Axios](https://axios-http.com/)
- **Icons**: Font Awesome

---

## 🚀 Getting Started

### 📋 Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed:
- Recommended Node version: `v16` or newer (successfully running on `v24` with legacy flags)

### ⚙️ Installation

Clone the repository and install dependencies. Because some packages have older peer dependency trees, run the install with the `--legacy-peer-deps` flag:

```bash
# Clone the repository
git clone https://github.com/thetan-dev/SourceSprint--Frontend.git
cd SourceSprint--Frontend

# Install all packages
npm install --legacy-peer-deps
```

### 💻 Running the App Locally

Start the local development server:

```bash
npm run dev
```

The application will run at **[http://localhost:3000](http://localhost:3000)**.

---

## 📦 Scripts Available

In the project directory, you can run:

| Command | Action |
| :--- | :--- |
| `npm run dev` / `npm start` | Runs the app in development mode with hot-reloading. |
| `npm run build` | Builds the production-ready static assets in the `build` folder. |
| `npm run test` | Launches the test runner. |
| `npm run eject` | Ejects the Create React App configuration. |

---

## 📂 Project Structure

```text
SourceSprint--Frontend/
├── public/                 # Static public assets (HTML, Favicon, manifest)
├── src/
│   ├── assets/             # SVGs, images, static datasets, and logos
│   ├── components/         # Reusable UI components (Timer, Navbar, Footer, etc.)
│   ├── Pages/              # Page views
│   │   ├── HomePage/       # Event home layout
│   │   ├── EnrollPage/     # Status pages for enrollment actions
│   │   └── RegistrationPage/# Registration form and particle canvas
│   ├── App.js              # Application entry point and router switch
│   ├── index.js            # React renderer
│   ├── index.css           # Global stylesheet and Tailwind directives
│   └── tailwind.config.js  # Tailwind CSS configuration setup
├── package.json            # Manifest file for scripts and dependencies
└── package-lock.json       # Strict dependency tree lockfile
```

---

## 🤝 Contributing

We welcome contributions! Feel free to open issues or submit pull requests to help improve the SourceSprint experience. 

1. Fork the Repository.
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`).
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the Branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.
