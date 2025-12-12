# Birthday Reminder App (TypeScript Refactor)

This is a small, focused React application is a practical exercise derived from the material provided by **[John Smilga's course](https://www.youtube.com/watch?v=a_7Z7C_JCyo&t=438s)**. This project was developed as part of a course curriculum and subsequently refactored to use TypeScript for improved type safety and maintainability.

## Features

* Shows a list of people with their names, ages, and profile pictures (`data.json`).
* Displays the exact number of birthdays listed for the day.
* A button to clear the entire list (setting the state to an empty array).
* The entire project structure, including state management and component props, is fully typed using **TypeScript (TSX)**.



### Key Concepts Covered

* `useState()` Hook for managing the list data.
* Module system: `import` / `export` for handling data and components.
* **JSX** syntax for describing UI structure.
* `map()` function for rendering lists of components.
* **Type Safety:** Implementing interfaces (`Person`) to ensure data consistency across components (App, List, and data).

## 🛠️ Technology Stack

* **React** (v18+)
* **TypeScript** (TSX)
* **CSS** (for styling)

## Getting Started

Follow these instructions to get the project up and running locally.

### Prerequisites

You need to have `Node.js` and `npm` installed on your machine.

### Installation

1.  **Clone the repository:**
    
    `git clone` [`https://github.com/kolonatalie/frontend-practice-projects.git`](https://github.com/kolonatalie/frontend-practice-projects.git)
    
2.  **Navigate to the project folder:**
    ```bash
    cd frontend-practice-projects/Projects/birthday-reminder-react-app
    ```

3.  **Install dependencies:**
    ```bash
    npm install
    ```

4.  **Run the application:**
    ```bash
    npm start
    ```

The application will open in your browser, usually at `http://localhost:3000`.

---

*Created by [kolonatalie](https://github.com/kolonatalie) • Connect: [LinkedIn](https://www.linkedin.com/in/kolonatalie/) | [Portfolio](https://kolonatalie.github.io/portfolio/)*