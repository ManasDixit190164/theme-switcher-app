# 🌗 React Theme Switcher & Dropdown Animation Modules

This Project includes two independent UI modules implemented in React with smooth animations and theme management based on Figma designs and interaction prototypes.

## 🧪 Assignment Overview

You will find two routes/modules in this React application:

1. **Theme Picker Module**
2. **Dropdown Animation Module**

Each module is implemented as a separate page with clean, responsive UI and smooth transitions. 

---

## 🔍 Project Features

### 1. 🎨 Theme Picker Module (`/`)
- Built using **React**, **TypeScript**, and **Tailwind CSS**
- Theme switching between:
  - Light / Dark Mode
  - Color Themes: `Crimson`, `Field`, and `Aura`
- Smooth animated transitions between themes
- Theme persisted using `localStorage`

### 2. ⬇️ Dropdown Animation Module (`/dropdown`)
- Custom dropdown with animated opening and closing behavior
- Matches the provided Figma interaction prototype
- Responsive design and smooth transitions

---

## 🧱 Tech Stack

- ⚛️ **React** (with functional components and hooks)
- 💅 **Tailwind CSS** for styling
- 💡 **Context API** for global theme state
- 💾 **localStorage** for theme persistence
- 🌐 **React Router** for route-based module separation
- 🧠 **CSS Variables** for theme and mode dynamic values

---

## 🌈 Theme & Color Details

Themes are controlled using CSS custom properties (`--color-*`) that dynamically adapt based on the selected theme and mode (light/dark). The following themes and variables are defined in `theme.css`:

### 🟥 Crimson Theme

| Mode  | Property                | Example Color |
|-------|-------------------------|---------------|
| Light | `--color-primary`       | `#E1003C`     |
| Light | `--color-background`    | `#F2E6FF`     |
| Dark  | `--color-primary`       | `#FF2D55`     |
| Dark  | `--color-background`    | `#0B1A36`     |

### 🌿 Field Theme

| Mode  | Property                | Example Color |
|-------|-------------------------|---------------|
| Light | `--color-primary`       | `#00C08D`     |
| Light | `--color-background`    | `#FFFFFF`     |
| Dark  | `--color-primary`       | `#00FFA8`     |
| Dark  | `--color-background`    | `#001A33`     |

### 🔮 Aura Theme

| Mode  | Property                | Example Color |
|-------|-------------------------|---------------|
| Light | `--color-primary`       | `#7C5FFF`     |
| Light | `--color-background`    | `#FFFFFF`     |
| Dark  | `--color-primary`       | `#B095FF`     |
| Dark  | `--color-background`    | `#100B2B`     |

These variables control the appearance of components (buttons, backgrounds, text, borders) based on theme and mode.

---

## 🚀 How to Run Locally

```bash
# Clone the repo
git clone https://github.com/ManasDixit190164/theme-switcher-app.git
cd project-theme-picker

# Install dependencies
npm install

# Start the development server
npm run dev

