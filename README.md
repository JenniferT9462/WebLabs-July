# WebLabs

This project is a practice lab for learning **HTML, CSS, and JavaScript**.  
It shows how to build a simple web page with a **grid layout**, a **contact form**, and some **JavaScript updates** to the page.

---

## What This Project Does
- Creates a page with a **header, sidebar, main content area, and footer** using **CSS Grid**.
- Builds a **contact form** where a user can enter their name, email, message, agree to terms, and select a date.
- Uses **JavaScript** to:
  - Change the text of the page title.
  - Change background colors.
  - Add text to the sidebar and footer.

---

## Technologies Used
- **HTML5** → page structure (the building blocks).
- **CSS3 (Grid + Flexbox)** → layout and design (how the page looks).
- **JavaScript** → interactivity (changing text and colors dynamically).

---

## Project Files
```bash
WebLabs-July/
│── index.html # The structure of the page (HTML elements)
|
│── style.css # The styles (colors, layout, spacing)
|
│── script.js # The behavior (JS changes the page dynamically)
|
│── README.md
```

---

### index.html
- Creates a **header** with the title.
- Adds a **sidebar** (empty at first).
- Adds a **main content area** with the **form**:
  - Full name
  - Email
  - Message
  - Terms & Conditions checkbox
  - Date selector
  - Submit and Reset buttons
- Adds a **footer** (empty at first).

---

### style.css
- Uses **CSS Grid** to divide the page into 5 columns and 5 rows.  
- Positions header at the top, footer at the bottom, sidebar on the left, and main content in the middle.
- Uses **Flexbox** inside the form to align and space out inputs.
- Adds background colors and shadows.

---

### script.js
- Connects to the HTML with `document.getElementById()` and `document.querySelector()`.
- Updates:
  - Page title text and color.
  - Main content background color.
  - Sidebar text and color.
  - Form title color.
  - Footer text and color.
- Logs messages in the browser console (open DevTools to see them).

---

## How to Run

1. Clone or download this repo:
```bash
   git clone https://github.com/JenniferT9462/WebLabs-July.git
```
2. Open index.html in your browser.

3. Open DevTools (right-click → Inspect → Console tab) to see the JavaScript logs.


