# AlphaGeometry GitHub Pages Runner

This repo allows geometry problem input via GitHub Pages and automatically runs AlphaGeometry using GitHub Actions.

## 📝 Input

Go to [index.html](https://yourusername.github.io/alpha-geometry-site/) and submit your problem.

## 🧠 Output

After a short delay (1-2 minutes), the solution will appear at:

📄 https://yourusername.github.io/alpha-geometry-site/output.html

## ⚙️ Behind the Scenes

- GitHub Actions is triggered when `problem.txt` is updated.
- It runs AlphaGeometry and commits the result to `docs/output.html`.