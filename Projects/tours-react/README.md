![Tours React App (Refactored to TypeScript)](./public/demo.gif)
# Tours React App (Refactored to TypeScript)
This project is a functional app for viewing and managing a list of travel tours. It was initially developed as a learning exercise in JavaScript provided by **[John Smilga's course](https://www.youtube.com/watch?v=a_7Z7C_JCyo&t=438s)** and has been **fully refactored to TypeScript (TSX)** to enhance code reliability, type safety, and maintainability.

##  Features

* **Data Fetching:** Loads tour data from an external API using `fetch`.
* **Loading State:** Displays a "Loading..." screen while data is being fetched.
* **Data Filtration:** Allows users to remove tours they are "Not Interested" in, dynamically updating the state.
* **Conditional Rendering:** Shows a "Refresh" button when the entire list of tours has been cleared.
* **Read More Toggle:** Displays full tour information upon clicking "read more" and truncates it otherwise.

## Core React Concepts

* **Hooks:** Extensive use of `useState()` for component state (e.g., `tours`, `loading`, `readMore`).
* **Data Lifecycle:** Using `useEffect()` to handle data fetching immediately after the component mounts.
* **Conditional Rendering:** Displaying the appropriate component (`Loading`, `Tours`, or "No Tours Left") based on the state.
* **Prop Drilling & Functions as Props:** Passing the `removeTour` function down from `App` through `Tours` to the `Tour` component.
* **Data Mapping:** Iterating through lists using the `.map()` method to dynamically render components.

## Getting Started

Follow these instructions to get the project up and running locally.

### Prerequisites

You need to have `Node.js` and `npm` installed on your machine.

### Installation

1.  **Clone the repository:**
    
    `git clone` [`https://github.com/kolonatalie/frontend-practice-projects.git`](https://github.com/kolonatalie/frontend-practice-projects.git)
    
2.  **Navigate to the project folder:**
    ```bash
    cd frontend-practice-projects/Projects/tours-react
    ```

3.  **Install dependencies:**
    ```bash
    npm install
    ```

4.  **Run the application:**
    ```bash
    npm start
    ```

---

*Created by [kolonatalie](https://github.com/kolonatalie) • Connect: [LinkedIn](https://www.linkedin.com/in/kolonatalie/) | [Portfolio](https://kolonatalie.github.io/portfolio/)*