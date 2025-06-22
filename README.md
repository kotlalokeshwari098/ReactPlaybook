# React Playbook


*A visual learning tool to explore React internals — JSX compilation, Virtual DOM, Diffing, and Reconciliation.*

## \:beginner: About

React Playbook is an interactive React app designed to help developers and learners visualize and understand React’s core concepts under the hood. The app includes demos for JSX compilation, Virtual DOM structure, diffing algorithms, and reconciliation flows — making complex React internals easy to grasp.

### \:file\_folder: File Structure

```
react-playbook/
├── public/                  # Static files like favicon, logo, robots.txt
├── src/
│   ├── assets/              # Images, fonts, icons
│   ├── components/          # Reusable React components for visualizations
│   │    ├── JSXConverter.jsx
│   │    ├── VirtualDOMVisualizer.jsx
│   │    ├── DiffingDemo.jsx
│   │    └── ReconciliationFlow.jsx
│   ├── pages/               # Routes/pages (optional)
│   ├── styles/              # CSS / Tailwind files
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # ReactDOM entry point
│   └── index.css            # Global styles
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

| No | File/Folder     | Description                                       |
| -- | --------------- | ------------------------------------------------- |
| 1  | public/         | Static assets like favicon, logo                  |
| 2  | src/components/ | Core React components visualizing React internals |
| 3  | src/styles/     | Styling files (CSS or Tailwind)                   |
| 4  | src/App.jsx     | Root React component                              |
| 5  | src/main.jsx    | React app entry point                             |

## \:zap: Usage

Use React Playbook to explore how React works behind the scenes, experiment with JSX conversion, and see live visualizations of React's rendering and update processes.

### \:electric\_plug: Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/react-playbook.git
   cd react-playbook
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

---

### \:package: Commands

| Command           | Description                     |
| ----------------- | ------------------------------- |
| `npm run dev`     | Run the app in development mode |
| `npm run build`   | Build the app for production    |
| `npm run preview` | Preview the production build    |

---

## \:wrench: Development

### \:notebook: Pre-Requisites

* Node.js v14 or higher
* npm or yarn package manager
* Basic understanding of React and JavaScript

### \:nut\_and\_bolt: Development Environment

* Clone the repository and install dependencies as described in the Installation section.
* Use your preferred code editor (VSCode recommended).
* Run the dev server with `npm run dev` or `yarn dev` to start coding.
* Tailwind CSS is configured for styling (optional to customize).



### \:hammer: Build

To build a production-ready version, run:

```bash
npm run build
# or
yarn build
```

The output will be in the `dist/` folder.

:fire: Contribution
This is currently a personal project, so contributions are not open at this time.


