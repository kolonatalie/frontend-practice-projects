# 🎵 Happy Birthday Piano Player (DOM Interaction)
An interactive mini-game to help beginner piano students learn and practice.

This project is a piano player built with HTML, CSS, and JavaScript, using DOM events to play notes.
It’s part of my learning journey on the Front-End path with [Codecademy](https://www.codecademy.com). 
![Piano Player Demo](assets/piano-player-demo.gif)

---

## Technical Highlights (DOM Manipulation & UI State)

This project is a strong demonstration of foundational Frontend JavaScript techniques:

* **DOM Event Handling:** Utilizes **`onmousedown`** and **`onmouseup`** event listeners on piano keys to visually simulate playing a note (changing the background color).
* **Element Selection & Iteration:** Efficient use of `document.getElementById` and `forEach` loop to select all keys and programmatically attach event handlers.
* **UI State Management:** **Progressive Disclosure:** The code manages the state of the sheet music (lyrics and notes) and the visibility of **"Next Line" buttons** (`nextTwo.hidden = true;`) to guide the user through the song step-by-step.
* **Dynamic Content Update:** The logic updates multiple text elements (lyrics and notes) simultaneously using **`innerHTML`** upon clicking the progress buttons, changing the sheet music for the next line of the song.
* **Functional Decomposition:** Helper functions (`keyPlay`, `keyReturn`, `keyEvents`) keep the code clean and focused on single responsibilities.

## Features
* Interactive piano keyboard that visually highlights keys when pressed.
* Guides the user through the **"Happy Birthday" melody** line-by-line.
* Buttons dynamically control the progression of the sheet music (Line 2, Line 3, Reset).
* Built using clean, fundamental HTML, CSS, and JavaScript.

## Getting Started (Local Setup)
This project runs entirely in the browser.

1.  Navigate into the project directory:
    ```bash
    cd Happy-Birthday-Piano-Player
    ```
2.  **Open `index.html`** in your web browser.

## Potential Extensions
* **Audio Integration:** Add actual audio sounds (e.g., using the **Web Audio API** or simple `<audio>` elements) for each key press to provide auditory feedback.

---

*Created by [kolonatalie](https://github.com/kolonatalie) • Connect: [LinkedIn](https://www.linkedin.com/in/kolonatalie/) | [Portfolio](https://kolonatalie.github.io/portfolio/)*
