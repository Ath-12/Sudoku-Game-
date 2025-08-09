# Sudoku Game

A fully functional **Sudoku game** built with **HTML, CSS, and JavaScript**. The app generates puzzles dynamically using numbers **1–9** (or the appropriate set for each board size) and enforces the core Sudoku rule: no repeated numbers in the same row, column, or block. Players can choose from three difficulty/size options — **5×5**, **7×7**, and **9×9** — and solve puzzles with real-time validation and helpful UI feedback.

---

## 🎮 Features

- Dynamic puzzle generation with randomized boards  
- Three board sizes / difficulty modes: **5×5**, **7×7**, **9×9**  
- Real-time validation: highlights correct and incorrect entries instantly  
- Clean, responsive UI that works on desktop and mobile  
- Keyboard and mouse input support for fast gameplay  
- Buttons for **New Puzzle**, **Reset**, and **Check Solution**

---

## 🚀 Quick Start

1. Clone or download the repository.  
2. Open `index.html` in your browser (double-click or right-click → Open with your browser).  
3. Choose a board size and start playing!

_No build tools or server required — just a modern web browser._

---

## 🧭 How to Play

1. Select the board size (5×5 / 7×7 / 9×9).  
2. A puzzle will load with some pre-filled numbers.  
3. Fill in the empty cells using the on-screen keypad or your keyboard.  
4. The game validates input in real time:  
   - Correct entries remain normal.  
   - Conflicting or invalid entries are highlighted.  
5. Use **Check Solution** to validate the whole board, **Reset** to clear your entries, or **New Puzzle** to load a fresh challenge.

---

## 🛠️ Controls & Shortcuts

- Click a cell to focus, then type a number (1–9) to enter.  
- Arrow keys to navigate between cells.  
- Backspace / Delete to clear a cell.  
- On-screen number pad for touch devices.

---

## 📁 Project Structure (typical)

/ (root)
├─ index.html
├─ styles.css
├─ script.js
└─ assets/ (images, icons)




---

## ♻️ Customization Tips

- **Change difficulty**: adjust the number of pre-filled cells in `script.js`.  
- **Styling**: tweak colors, fonts, and animations in `styles.css`.  
- **Add hints**: implement a hint function to reveal a safe move.  
- **Timer & leaderboard**: store times in `localStorage` for a local high-score board.

---

## 🔮 Future Enhancements

- Hint system and undo/redo functionality  
- Timed challenges and a global/local leaderboard  
- Multiple puzzle generators (guaranteed unique solutions)  
- Theme support (dark mode, cosmic theme, etc.)  
- Accessibility improvements (screen reader support)

---

## ✅ Contributing

Contributions, bug reports, and feature requests are welcome!  
1. Fork the repository  
2. Create a feature branch (`git checkout -b feature-name`)  
3. Commit your changes (`git commit -m "Add feature"`)  
4. Push and open a Pull Request

---

## 📜 License

This project is available under the **MIT License** — feel free to use, modify, and distribute.

---

## ✉️ Contact

Questions or suggestions? Open an issue or contact the maintainer.

Enjoy solving! 🎯🎲
