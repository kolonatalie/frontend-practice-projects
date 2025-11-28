# 📸 Image Hover Effect (Pure CSS Animation)

A stylish and interactive image component built exclusively with **HTML and CSS**. The effect showcases a series of coordinated animations and styling techniques that trigger upon hovering over the image container.
## [Live Demo](https://codepen.io/kolonatalie/pen/RNWxMBw)
[![Image Hover Effect Demo](/Projects/Image-hover-effect-CSS/assets/image-hover-effect-demo.gif)](https://codepen.io/kolonatalie/pen/RNWxMBw)

## 📝 Features Overview

* **Pure CSS:** No JavaScript required for the animation logic.
* Smooth zoom and brightness/filter effect on hover.
* Animated gradient overlay with `mix-blend-mode`.
* Staggered text entrance animations (zoom-in and slide-up).

## Technical Highlights (CSS Focus)

This project is an excellent demonstration of advanced CSS styling techniques:

* **CSS Transitions:** Extensive use of the `transition` property for smooth timing control across all elements (image, overlay, text).
* **Transformations:** The image zoom effect is achieved using **`transform: scale(1.1)`** on hover, ensuring smooth scaling performance.
* **Pseudo-Elements (`::after`):** A **slide-in shimmer effect** is implemented using the `::after` pseudo-element with a linear gradient and `transform: skewX(-25deg)`. The animation uses the `left` property combined with `transition` to create the moving highlight.
* **Stacking & Blending:** The overlay uses **`position: absolute`** to cover the image and features **`mix-blend-mode: screen`** to create a unique color interaction with the background image.
* **State Control (`:hover`):** All animations and visual changes are controlled solely by the **`:hover`** pseudo-class applied to the main container (`.image-container`).
* **Initial State:** Text elements are hidden off-screen or scaled down using `transform: translateY()` and `opacity: 0` before the animation starts.

## Getting Started (Local Setup)

This project runs entirely in the browser.

1.  Navigate into the project directory:
    ```bash
    cd Image-hover-effect-CSS
    ```
2.  **Open `index.html`** in your web browser.

---

*Created by [kolonatalie](https://github.com/kolonatalie) • Connect: [LinkedIn](https://www.linkedin.com/in/kolonatalie/) | [Portfolio](https://kolonatalie.github.io/portfolio/)*
