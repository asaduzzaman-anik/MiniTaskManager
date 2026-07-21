# Mini Task Manager

A small React app that demonstrates core React concepts: `useState`, immutability, `useRef`, `useEffect` with an API call, React Router, and Theme Context (light/dark mode).

## Features

- Fetch 5 sample todos from [JSONPlaceholder](https://jsonplaceholder.typicode.com/todos?_limit=5) on load
- Add new tasks (immutable updates with the spread operator)
- Toggle a task’s completed status by clicking it
- Auto-focus the input on page load (`useRef`)
- Task count updated via a ref (`innerText`)
- Routes: `/` (tasks) and `/about`
- Light / dark theme via Context API

## Requirements

- Node.js 18+ recommended
- npm

## How to run

```bash
# install dependencies
npm install

# start the development server
npm run dev
```

Then open the URL shown in the terminal (usually `http://localhost:5173`).

## Scripts

| Command         | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Start Vite dev server    |
| `npm run build` | Create production build  |
| `npm run preview` | Preview production build |

## Project structure

```
src/
  components/Navbar.jsx
  context/ThemeContext.jsx
  pages/Tasks.jsx
  pages/About.jsx
  App.jsx
  main.jsx
```
