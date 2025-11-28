# 💬 Reviews Carousel (Interactive Web Component)
A simple, responsive, and interactive Reviews/Testimonials carousel built with HTML, CSS, and JavaScript.
Users can browse through reviews, navigate with next/previous buttons, or display a random review with a single click.
![Reviews Carousel](assets/reviews-carousel-demo.gif)

## ✨ Features
- Dynamic Review Loading (name, job, image, description)
- Next/Previous Navigation with looping behavior
- Random Review Button for variety
- Responsive Design – works on desktop & mobile
- Built with Vanilla JavaScript

---

## Technical Highlights (DOM & State Management)

This project is an excellent demonstration of core Frontend skills:

* **Data Structure:** All review content is stored in a structured **JavaScript Array of Objects**, acting as the application's single source of truth.
* **DOM Selection:** Utilizes `document.getElementById` and `document.querySelector` to effectively select and manipulate specific UI elements.
* **State Management:** The global variable `currentItem` acts as the component's state, tracking the currently displayed review index.
* **Functional Update Logic:** The reusable **`showPerson(person)`** function handles the entire process of updating all DOM elements (image, author, job, info) based on the current index.
* **Event Listeners:** Implements event listeners on `prevBtn`, `nextBtn`, and `randomBtn` to trigger state changes and DOM updates.
* **Boundary Handling:** Logic is implemented within the navigation buttons to ensure smooth looping (`currentItem = 0` or `currentItem = reviews.length - 1`).

## Getting Started (Local Setup)

This project runs entirely in the browser.

1.  Navigate into the project directory:
    ```bash
    cd Reviews
    ```
2.  **Open `index.html`** in your web browser (using Live Server is recommended for best results).

## Potential Extensions
Here are some planned upgrades:

* Add **smooth slide transition animations** (using CSS transitions/transforms).
* Integrate star ratings and social links for each review object.
* Implement a **Dark mode toggle** feature.

---

*Created by [kolonatalie](https://github.com/kolonatalie) • Connect: [LinkedIn](https://www.linkedin.com/in/kolonatalie/) | [Portfolio](https://kolonatalie.github.io/portfolio/)*