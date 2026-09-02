# **Next.js Theme with @wrksz/themes**

A modern dark/light/system theme implementation using **Next.js 16**, **React 19**, **TypeScript**, **Tailwind CSS v4**, and **@wrksz/themes**.

This project demonstrates how to build a complete theme system in a Next.js application using a lightweight theme library instead of manually managing theme state, localStorage, system preferences, and hydration handling.

---

## **✨ Live Demo**

🌐 https://nextjs-theme-wrksz.vercel.app/

---

## **📦 Repository**

GitHub:

https://github.com/mohamadi-hamid/nextjs-theme-wrksz

---

# **🚀 Features**

- ✅ Next.js 16 App Router
- ✅ React 19
- ✅ TypeScript
- ✅ Tailwind CSS v4
- ✅ Dark mode
- ✅ Light mode
- ✅ System theme detection
- ✅ Theme persistence
- ✅ SSR hydration-safe implementation
- ✅ No `next-themes` dependency
- ✅ Powered by `@wrksz/themes`
- ✅ Simple reusable ThemeProvider
- ✅ Custom theme toggle component
- ✅ Lucide React icons integration

---

# **🎯 Purpose**

This repository is part of a theme implementation series for Next.js.

The series compares two different approaches:

## **Approach 1: Native implementation**

Building a theme system manually:

- React Context
- Theme state management
- localStorage handling
- System preference detection
- Hydration protection
- DOM class management

Repository:

`nextjs-theme-native`

---

## **Approach 2: Using @wrksz/themes**

Using a dedicated theme package to simplify theme management.

This repository represents the second approach.

The goal is to demonstrate how a theme library can reduce boilerplate while keeping the implementation clean and production-ready.

---

# **🧠 How It Works**

The theme flow:

```
ThemeProvider

      |

      ↓

@wrksz/themes

      |

      ↓

Theme State

      |

      ↓

document.documentElement

      |

      ↓

Tailwind dark: utilities
```

The selected theme is applied by changing the HTML class:

```html
<html class="light">
```

or:

```html
<html class="dark">
```

Tailwind CSS automatically applies the correct styles.

---

# **Available Themes**

The project supports:

```
light
dark
system
```

---

## **☀️ Light Mode**

Always uses the light theme.

---

## **🌙 Dark Mode**

Always uses the dark theme.

---

## **💻 System Mode**

Automatically follows the user's operating system preference:

```
prefers-color-scheme
```

---

# **📦 Installation**

Install dependencies:

```bash
bun install
```

or:

```bash
npm install
```

---

# **⚙️ Setup**

Install the theme package:

```bash
bun add @wrksz/themes
```

---

Wrap your application with `ThemeProvider`.

`app/layout.tsx`

```tsx
import { ThemeProvider } from "@wrksz/themes/next";

import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider defaultTheme="system">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
```

---

# **🌗 Theme Toggle Example**

Example:

```tsx
"use client";

import { useTheme } from "@wrksz/themes/client";

import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() =>
        setTheme(isDark ? "light" : "dark")
      }
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Moon />
      ) : (
        <Sun />
      )}
    </button>
  );
}
```

---

# **💾 Theme Persistence**

The selected theme is automatically saved.

The user preference is restored when returning to the website.

Example:

```
localStorage
```

The library handles:

- Saving the selected theme
- Restoring previous preference
- Syncing system changes

---

# **📂 Project Structure**

```
nextjs-theme-wrksz

│
├── app
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
│
├── components
│   └── theme-toggle.tsx
│
├── public
│
├── package.json
│
└── README.md
```

---

# **▶️ Run Development Server**

Start the development server:

```bash
bun run dev
```

Open:

```
http://localhost:3000
```

---

# **🏗️ Build For Production**

Create production build:

```bash
bun run build
```

Run production server:

```bash
bun run start
```

---

# **🔍 Why Use @wrksz/themes?**

A native theme implementation is useful for learning how themes work internally.

However, production applications usually need:

- Reliable SSR support
- Hydration handling
- Theme persistence
- System preference detection
- Less boilerplate code

`@wrksz/themes` provides these features while keeping the API simple.

---

# **⚠️ Important Next.js Considerations**

Theme handling in Next.js requires special attention because:

- Server rendering happens before browser APIs exist
- `window` and `localStorage` are client-only
- Theme changes modify the HTML element
- Incorrect setup can cause hydration mismatches

This project handles these problems using:

```tsx
@wrksz/themes/next
```

---

# **📚 Related Article**

This repository accompanies the article:

## **Dark & Light Theme in Next.js 16**

Comparing:

1. Native dependency-free implementation

2. `@wrksz/themes` implementation

---

# **🌐 Deployment**

This project is deployed using Vercel.

Every push to the main branch automatically triggers a new deployment.

Deployment platform:

https://vercel.com

---

# **🤝 Contributing**

Suggestions and improvements are welcome.

Feel free to open an issue or submit a pull request.

---

# **📄 License**

MIT License

Copyright (c) 2026 Hamid Mohamadi