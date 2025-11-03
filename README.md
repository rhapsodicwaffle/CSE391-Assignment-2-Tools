JavaScript Programming Assignment featuring three interactive web applications demonstrating DOM manipulation, event handling, and local storage.

## Assignment Overview

This project consists of three interactive web applications built with vanilla JavaScript, HTML5, and CSS3:

1. **Fortune Generator**
2. **Stopwatch**
3. **To-Do List**

## Features

### 1. Fortune Generator
A dynamic fortune generator that displays random fortunes with customizable styling.

**Features:**
- Random fortune selection from 12 unique messages
- 4 color themes (Green, Yellow, Blue, Orange)
- Dynamic styling changes:
  - Font color
  - Background color
  - Border color
  - Font family and size
- Responsive design
- Clean, minimalist UI

**Files:**
- `fortune.html`
- `fortune.css`
- `fortune.js`

### 2. Stopwatch
A specialized stopwatch that counts in multiples of 3 seconds.

**Features:**
- Increments by 3 seconds (3, 6, 9, 12...)
- Automatically stops at 30 seconds
- Start, Stop, and Reset controls
- Resumes from last position when stopped
- Time format: MM:SS
- Minimalist black and white design

**Files:**
- `stopwatch.html`
- `stopwatch.css`
- `stopwatch.js`

### 3. To-Do List
A fully functional task management application with persistent storage.

**Features:**
- Add tasks with Enter key or button
- Mark tasks as completed with checkbox
- Delete tasks with × button
- Persistent storage using localStorage
- Shows remaining tasks count
- Clean, minimal interface
- Data persists across browser sessions

**Files:**
- `todo.html`
- `todo.css`
- `todo.js`

##  Design Philosophy

All applications follow a consistent design system:

- **Clean white background**
- **Black text** for optimal readability
- **System fonts** for native feel
- **Minimal borders and shadows**
- **Subtle hover effects**
- **Responsive design**
- **No comments in code** (as per assignment requirements)

## Project Structure

```
neww/
├── index.html              # Landing page with links to all assignments
├── fortune.html            # Fortune generator page
├── fortune.css             # Fortune generator styles
├── fortune.js              # Fortune generator logic
├── stopwatch.html          # Stopwatch page
├── stopwatch.css           # Stopwatch styles
├── stopwatch.js            # Stopwatch logic
├── todo.html               # To-do list page
├── todo.css                # To-do list styles
├── todo.js                 # To-do list logic
└── README.md               # This file
```

## 🌐 How to Run

### Option 1: Open Directly
Simply open any HTML file in your web browser:
- Double-click `index.html` for the main menu
- Or open individual pages directly

### Option 2: Live Server (Recommended)
If using VS Code with Live Server extension:
```bash
Right-click on index.html → Open with Live Server
```

### Option 3: Python HTTP Server
```bash
cd neww
python -m http.server 8000
```
Then open: http://localhost:8000

## Browser Compatibility

All applications are compatible with:
- Chrome/Edge (Latest)
- Firefox (Latest)
- Safari (Latest)
- Opera (Latest)

## 🔧 Technologies Used

- **HTML5** - Structure and semantics
- **CSS3** - Styling and animations
- **JavaScript (ES6+)** - Logic and interactivity
- **localStorage API** - Data persistence (To-Do List)
- **DOM Manipulation** - Dynamic content updates
- **Event Listeners** - User interaction handling
