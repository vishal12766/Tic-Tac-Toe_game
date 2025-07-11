# 🎮 Tic Tac Toe Game

A simple yet fun web-based Tic Tac Toe game built using **HTML, CSS, and JavaScript**. Let two players compete head-to-head in a classic grid battle — "X" vs "O".

---

## ✨ Features

- 🔁 Alternating turns between Player X and Player O
- ✅ Automatic winner detection based on classic win patterns
- 🚫 Disables cells once played
- 🔄 Restart and Reset functionality with a fresh grid
- 🎉 Visual winner announcement

---

## 🧠 Core Logic (JavaScript Highlights)

- `player1="X"` and `player2="O"` are used to alternate moves.
- Predefined `winpattern` array checks for victory conditions.
- Event listeners handle:
  - Box clicks
  - Start (`#start`) and Restart (`#restart`) buttons
- `checkwinner()` identifies a match from the winning patterns.
- `showwinner()` displays the result and disables remaining moves.

---

## 🚀 Getting Started

Just open `index.html` in your browser and start playing!

No additional setup required.

---

## 📣 Credits

Made with ❤️ by [Vishal Singh]

Feel free to fork and enhance it further! Pull requests welcome.

---

## 📜 License

This project is open-source under the [MIT License](LICENSE).
