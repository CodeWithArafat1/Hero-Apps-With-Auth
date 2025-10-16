# 🚀 HERO.IO - Modern App Marketplace

This is a modern and performance-focused web application that showcases various mobile applications. The project is built using modern React features and best practices.

---

## ✨ Features

- **Dynamic Routing:** Dynamic detail pages for each app using `react-router`.
- **Global State Management:** Centralized application state management using `Context API` and the `useReducer` Hook.
- **Data Visualization:** Beautiful bar charts for app ratings powered by `Recharts`.
- **Performance Optimized:**
  - Fast initial load times via code splitting with `React.lazy` and `Suspense`.
  - Prevention of unnecessary re-renders with `React.memo` and `useMemo`.
  - Responsive UI during heavy operations (like searching) using `useTransition`.
- **Data Persistence:** User's list of installed applications is saved and retrieved using `localStorage`.
- **Fully Responsive:** Responsive design for all device sizes, built with Tailwind CSS.
- **Interactive Notifications:** User feedback provided through `React Toastify`.

---

## 🛠️ Tech Stack

- **Core Framework:** [React](https://react.dev/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Routing:** [React Router DOM](https://reactrouter.com/) (v7+)
- **State Management:** React Context API with `useReducer` Hook
- **Icons:** [Lucide React](https://lucide.dev/guide/packages/lucide-react)
- **Data Visualization:** [Recharts](https://recharts.org/)
- **Notifications:** [React Toastify](https://fkhadra.github.io/react-toastify/)
- **Asynchronous Operations:** Native `fetch` API

---

## 🏃 Getting Started

Follow these steps to run the project on your local machine.

### Prerequisites

You must have [Node.js](https://nodejs.org/) (version 16 or later) and [npm](https://www.npmjs.com/) installed on your machine.

### Installation

1.  **Clone the repository:**
    ```sh
    git clone [https://github.com/CodeWithArafat1/hero-apps.git](https://github.com/CodeWithArafat1/hero-apps.git)
    ```
2.  **Navigate to the project directory:**
    ```sh
    cd hero-apps
    ```
3.  **Install dependencies:**
    ```sh
    npm install
    ```

### Running the Development Server

To run the project in development mode, execute the following command:
```sh
npm run dev
```
Then, open your browser and visit `http://localhost:5173` (or the port shown in your terminal).

---

## 📜 Available Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the app for production.
- `npm run lint`: Lints the code for errors.
- `npm run preview`: Previews the production build locally.

---

&copy; 2025 HERO.IO. All Rights Reserved.
