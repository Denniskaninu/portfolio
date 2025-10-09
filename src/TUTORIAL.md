
# Build Your Own Developer Portfolio: A From-Scratch Tutorial

Welcome! This document is your all-in-one guide to building a modern, professional developer portfolio from the ground up. By following this tutorial, you will not just end up with a stunning portfolio website, but you will also gain a deep, practical understanding of the technologies used to build it.

We will start with an empty folder and code every part of this application together. Think of this as a hands-on masterclass where you learn by doing. By the end, you'll understand this project like you designed it yourself and be ready to showcase it to the world.

Let's begin.

---

## 1. The Blueprint: Our Tech Stack

Every great project starts with a plan. We'll be using a modern, industry-standard set of tools designed for performance, developer experience, and beautiful user interfaces.

- **Next.js (v14+ with App Router):** The core React framework. It gives us a powerful structure with server-side rendering, file-based routing, and top-tier performance.
- **React & TypeScript:** The foundation for our UI components, enhanced with TypeScript for code safety and quality.
- **Tailwind CSS:** A utility-first CSS framework that lets us build custom designs directly in our markup without writing traditional CSS files.
- **ShadCN UI:** A collection of beautifully designed and accessible UI components (like `Button`, `Card`, `Dialog`) that are built on top of Tailwind CSS. They are unstyled by default, giving us full control.
- **Framer Motion:** A production-ready animation library for React that makes adding smooth, interactive animations incredibly simple.
- **Lucide React:** A library of clean, beautiful, and highly consistent icons.

---

## 2. Phase 1: Local Project Setup

Let's prepare your development environment on your Windows machine.

### Prerequisites

- **Node.js:** Make sure you have Node.js (v18 or higher) installed. You can download it from [nodejs.org](https://nodejs.org/).
- **A Code Editor:** We recommend [Visual Studio Code](https://code.visualstudio.com/), which is perfect for TypeScript and Next.js development.
- **Your Terminal:** You'll use the Command Prompt, PowerShell, or the integrated terminal in VS Code to run commands.

### Step 1: Initialize Your Next.js Application

1.  Open your terminal and navigate to the directory where you want to create your project (e.g., `C:\Users\YourUser\Documents\Projects`).
2.  Run the following command. This is the official command to create a new Next.js app.

    ```sh
    npx create-next-app@latest
    ```

3.  The installer will ask you a series of questions. Use these exact answers to match the project structure:

    -   **What is your project named?** `my-portfolio` (or any name you prefer)
    -   **Would you like to use TypeScript?** `Yes`
    -   **Would you like to use ESLint?** `Yes`
    -   **Would you like to use Tailwind CSS?** `Yes`
    -   **Would you like to use `src/` directory?** `Yes`
    -   **Would you like to use App Router?** `Yes`
    -   **Would you like to customize the default import alias?** `Yes`
    -   **What import alias would you like configured?** `@/*`

### Step 2: Navigate and Run Your New Project

1.  Once the installation is complete, move into your project's directory:
    ```sh
    cd my-portfolio
    ```

2.  Start the development server:
    ```sh
    npm run dev
    ```

3.  Open your web browser and navigate to **[http://localhost:3000](http://localhost:3000)**. You should see the default Next.js starter page. Congratulations, your project is live!

### Step 3: Clean Up the Default Project

The starter project comes with some boilerplate code. Let's remove it to start with a clean slate.

1.  **`src/app/page.tsx`:** Replace the entire content of this file with a simple "Hello World" for now.

    ```tsx
    export default function Home() {
      return (
        <main>
          <h1>My Portfolio</h1>
        </main>
      );
    }
    ```

2.  **`src/app/globals.css`:** Delete everything inside this file *except* for the first three lines:
    ```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```

Your browser should now show a very plain page with the text "My Portfolio". This is our blank canvas.

---

## 3. Phase 2: Installing Dependencies & Structuring the Project

Now, we'll install the extra libraries we need and set up our folder structure.

### Step 1: Install ShadCN UI

ShadCN UI is a fantastic tool that helps us add beautiful components to our project.

1.  In your terminal (make sure you're in your project directory), run the ShadCN UI `init` command:
    ```sh
    npx shadcn-ui@latest init
    ```

2.  It will ask a few configuration questions. These settings are crucial for matching our project's style.

    -   **Which style would you like to use?** `Default`
    -   **Which color would you like to use as base color?** `Neutral`
    -   **Where is your global CSS file?** `src/app/globals.css`
    -   **Would you like to use CSS variables for colors?** `Yes`
    -   **Where is your tailwind.config.ts file?** `tailwind.config.ts`
    -   **Configure the import alias for components?** `@/components`
    -   **Configure the import alias for utils?** `@/lib/utils`
    -   **Are you using React Server Components?** `Yes`
    -   **Write configuration to `components.json`?** `Yes`

    This command does two things:
    -   It creates `components.json` to remember your settings.
    -   It creates `src/lib/utils.ts`, a helper file for combining Tailwind CSS classes.

### Step 2: Install Other Necessary Packages

Now, let's install the libraries for animations, forms, and themes.

Run the following command in your terminal:

```sh
npm install framer-motion lucide-react next-themes react-hook-form @hookform/resolvers zod
```

-   **`framer-motion`**: For all our cool animations.
-   **`lucide-react`**: For our icon library.
-   **`next-themes`**: To easily manage our light and dark modes.
-   **`react-hook-form`**, **`@hookform/resolvers`**, **`zod`**: For creating a powerful, validated contact form.

### Step 3: Add Components Using ShadCN UI

We'll add all the UI components we'll need for the portfolio. ShadCN's CLI makes this incredibly easy.

Run this single command to add `button`, `card`, `input`, `textarea`, and `toast`:

```sh
npx shadcn-ui@latest add button card input textarea toast form tabs
```

You'll see that ShadCN has added new files inside a `src/components/ui` directory. These are your components, and you have full ownership of the code.

### Step 4: Create Our Folder Structure

A well-organized project is a joy to work in. Let's create our folder structure inside the `src` directory.

-   **`src/app`**: Already exists. This is where our pages and layouts live.
-   **`src/components`**: Already exists. We'll create two sub-folders here:
    -   **`sections`**: For the major sections of our portfolio (Hero, About, Projects, etc.).
    -   **`shared`**: For components that are reused across different sections (Header, Footer, ProjectCard).
-   **`src/hooks`**: For our custom React hooks.
-   **`src/lib`**: For helper files, utilities, and—most importantly—our data.

Go ahead and create the `sections` and `shared` folders inside `src/components`, and the `hooks` folder inside `src`.

---

## 4. Phase 3: Theming and Core Layout

Let's set up our app's visual identity with colors, fonts, and the main layout.

### Step 1: Define Theme Colors and Fonts

1.  **`src/app/globals.css`**: This is the heart of our theme. We'll define our colors using CSS variables. This system makes switching between light and dark mode effortless. Replace the content of this file with the following:

    ```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

    @layer base {
      :root {
        --background: 0 0% 100%;
        --foreground: 222 84% 5%;
        --card: 0 0% 100%;
        --card-foreground: 222 84% 5%;
        --popover: 0 0% 100%;
        --popover-foreground: 222 84% 5%;
        --primary: 190 95% 45%;
        --primary-foreground: 210 40% 98%;
        --secondary: 210 40% 96.1%;
        --secondary-foreground: 222 47.4% 11.2%;
        --muted: 210 40% 96.1%;
        --muted-foreground: 215.4 16.3% 46.9%;
        --accent: 280 80% 55%;
        --accent-foreground: 210 40% 98%;
        --destructive: 0 84.2% 60.2%;
        --destructive-foreground: 210 40% 98%;
        --border: 214.3 31.8% 91.4%;
        --input: 214.3 31.8% 91.4%;
        --ring: 190 95% 45%;
        --radius: 0.5rem;
      }

      .dark {
        --background: 240 10% 2%; /* Sharp Pitch Black */
        --foreground: 210 40% 98%; /* White */
        --card: 240 10% 6%;
        --card-foreground: 210 40% 98%;
        --popover: 240 10% 2%;
        --popover-foreground: 210 40% 98%;
        --primary: 190 95% 55%; /* Bright cyan */
        --primary-foreground: 222 84% 5%;
        --secondary: 240 4% 10%;
        --secondary-foreground: 190 95% 55%;
        --muted: 240 4% 10%;
        --muted-foreground: 215 20.2% 65.1%;
        --accent: 280 90% 60%; /* Vibrant purple/magenta */
        --accent-foreground: 210 40% 98%;
        --destructive: 0 62.8% 30.6%;
        --destructive-foreground: 210 40% 98%;
        --border: 240 4% 12%;
        --input: 240 4% 8%;
        --ring: 190 95% 55%;
      }
    }

    @layer base {
      * {
        @apply border-border;
      }
      body {
        @apply bg-background text-foreground;
      }
    }

    html {
      scroll-behavior: smooth;
    }

    .text-gradient {
      @apply bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent;
    }

    .dark .text-glow {
      text-shadow: 0 0 12px hsl(var(--primary) / 0.5);
    }
    ```

2.  **`tailwind.config.ts`**: Now, we'll teach Tailwind about our new colors and add our custom fonts. Update your Tailwind config to look like this:

    ```ts
    import type {Config} from 'tailwindcss';

    export default {
      darkMode: ['class'],
      content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
      ],
      theme: {
        extend: {
          fontFamily: {
            body: ['Inter', 'sans-serif'],
            headline: ['Space Grotesk', 'sans-serif'],
            code: ['monospace'],
          },
          colors: {
            background: 'hsl(var(--background))',
            foreground: 'hsl(var(--foreground))',
            card: {
              DEFAULT: 'hsl(var(--card))',
              foreground: 'hsl(var(--card-foreground))',
            },
            popover: {
              DEFAULT: 'hsl(var(--popover))',
              foreground: 'hsl(var(--popover-foreground))',
            },
            primary: {
              DEFAULT: 'hsl(var(--primary))',
              foreground: 'hsl(var(--primary-foreground))',
            },
            secondary: {
              DEFAULT: 'hsl(var(--secondary))',
              foreground: 'hsl(var(--secondary-foreground))',
            },
            muted: {
              DEFAULT: 'hsl(var(--muted))',
              foreground: 'hsl(var(--muted-foreground))',
            },
            accent: {
              DEFAULT: 'hsl(var(--accent))',
              foreground: 'hsl(var(--accent-foreground))',
            },
            destructive: {
              DEFAULT: 'hsl(var(--destructive))',
              foreground: 'hsl(var(--destructive-foreground))',
            },
            border: 'hsl(var(--border))',
            input: 'hsl(var(--input))',
            ring: 'hsl(var(--ring))',
          },
          borderRadius: {
            lg: 'var(--radius)',
            md: 'calc(var(--radius) - 2px)',
            sm: 'calc(var(--radius) - 4px)',
          },
          keyframes: {
            'accordion-down': {
              from: { height: '0' },
              to: { height: 'var(--radix-accordion-content-height)' },
            },
            'accordion-up': {
              from: { height: 'var(--radix-accordion-content-height)' },
              to: { height: '0' },
            },
          },
          animation: {
            'accordion-down': 'accordion-down 0.2s ease-out',
            'accordion-up': 'accordion-up 0.2s ease-out',
          },
        },
      },
      plugins: [require('tailwindcss-animate')],
    } satisfies Config;
    ```

### Step 2: Create the Theme Provider

The Theme Provider is a component that wraps our entire application and manages the state of the theme (light or dark).

1.  Create a new file: `src/components/shared/ThemeProvider.tsx`.
2.  Add the following code. This is a **Client Component** (`'use client'`) because it needs to interact with the browser's state.

    ```tsx
    'use client';

    import * as React from 'react';
    import { ThemeProvider as NextThemesProvider } from 'next-themes';
    import { type ThemeProviderProps } from 'next-themes/dist/types';

    export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
      return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
    }
    ```

### Step 3: Set Up the Root Layout

The root layout (`src/app/layout.tsx`) is a special Next.js file that wraps every page in your app. It's the perfect place to put things that are shared everywhere, like fonts and your theme provider.

Replace the contents of `src/app/layout.tsx` with this:

```tsx
import type { Metadata } from 'next';
import { Toaster } from "@/components/ui/toaster"; // We'll use this later
import { cn } from "@/lib/utils";
import './globals.css';
import { ThemeProvider } from '@/components/shared/ThemeProvider';

export const metadata: Metadata = {
  title: "My Developer Portfolio",
  description: "Showcase of my skills and projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* We are adding Google Fonts here */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Space+Grotesk:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className={cn("font-body antialiased", "bg-background")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
```

**What we did here:**
-   Imported and applied our custom fonts from Google Fonts.
-   Wrapped the entire app in our `ThemeProvider` to enable light/dark mode. We've set `dark` as the default.
-   Added a `<Toaster />` component, which will handle notifications from our contact form later.

---

## 5. Phase 4: Building the Components

This is where the magic happens. We'll build the portfolio section by section, starting with the reusable shared components.

### Step 1: Storing Your Data

A good developer separates data from presentation. This makes your portfolio incredibly easy to update in the future—no need to dig through component code.

1.  Create a file at `src/lib/developer-data.ts`.
2.  Add your personal information here. This is your single source of truth.

    ```ts
    export const developerData = {
      name: "Your Name",
      title: "Software Developer & AI Enthusiast",
      socials: [
        { name: "GitHub", url: "https://github.com/your-username" },
        { name: "LinkedIn", url: "https://linkedin.com/in/your-profile" },
        { name: "Twitter", url: "https://twitter.com/your-handle" },
      ],
      contact: {
        email: "your.email@example.com",
      },
      education: {
        degree: "BSc in Computer Science",
        university: "Your University",
        years: "2022 - 2026 (Expected)",
        achievement: "A cool fact about your academic performance.",
      }
    };
    ```

3.  Create another file at `src/lib/projects.ts` for your project data.

    ```ts
    // We'll define the Project type and image handling later
    export type Project = {
      id: string;
      title: string;
      description: string;
      techStack: string[];
      githubUrl: string;
      liveDemoUrl?: string;
      image: { imageUrl: string; description: string; imageHint: string; };
    };

    export const projects: Project[] = [
      // We will add projects here later
    ];
    ```
    
4. For placeholder images create `src/lib/placeholder-images.json` and `src/lib/placeholder-images.ts` and paste the code from the project files.

### Step 2: The Header Component

The header contains your name, navigation links, and the theme toggle.

1.  Create `src/components/shared/ThemeToggle.tsx` and paste the code from the project files. This component uses the `useTheme` hook from `next-themes` to switch between 'light' and 'dark'.

2.  Create `src/components/shared/Header.tsx` and paste the code from the project files.

    **How it Works (`Header.tsx`):**
    -   **`'use client'`:** This is a Client Component because it uses hooks (`useState`, `useEffect`) to manage state, such as whether the menu is open or if the page has been scrolled.
    -   **State Management:** `scrolled` tracks if the user has scrolled down to apply a background to the header. `isMenuOpen` tracks the state of the mobile menu.
    -   **`framer-motion`:** The `motion.header` and `AnimatePresence` tags are used to create smooth animations for the header background, the mobile menu overlay, and the menu items themselves. `staggerChildren` is a powerful `framer-motion` feature that animates child elements one after another.

### Step 3: The Footer Component

1.  Create `src/components/shared/Footer.tsx` and paste the code from the project files. This component is straightforward: it pulls your name and social links from `developer-data.ts` and renders them.

### Step 4: Assemble the Main Page (`page.tsx`)

Now, let's update `src/app/page.tsx` to be the main assembler for all our sections. Paste the code from the project files.

You'll see errors because we haven't created the section components yet. Let's do that now.

### Step 5: The Hero Section

This is the first thing visitors see.

1.  Create `src/components/sections/HeroSection.tsx` and paste the code from the project files.

    **How it Works:**
    -   It's a Client Component to allow for the entry animation.
    -   It uses `framer-motion` with `variants` to create a staggered animation effect: the title, subtitle, and buttons fade in and slide up one by one, creating a dramatic entrance.

### Step 6: The Projects Section & Project Card

This is the most complex component, so let's break it down.

1.  **Create `src/components/shared/ProjectCard.tsx`**: Paste the code from the project files.

    **How it Works (`ProjectCard.tsx`):**
    -   **Props:** It receives a `project` object and an `index` as props. The `project` object contains all the data to display, and the `index` is used to stagger the animations.
    -   **`motion.div` and `whileHover`:** This is the "super cool" interaction. `whileHover="visible"` tells Framer Motion to apply the `visible` animation variant when the user's mouse is over the component. This is how the overlay and description appear.
    -   **`variants`:** The `overlayVariants` and `contentVariants` objects define the animations. For example, `contentVariants` moves the content from `y: '100%'` (hidden below the card) to `y: 0` (in view).
    -   **`Image` Component:** We use `next/image` for optimized image loading. `fill` and `object-cover` are used to make the image cover the entire card area while maintaining its aspect ratio.

2.  **Create `src/components/sections/ProjectsSection.tsx`**: Paste the code from the project files.

    **How it Works (`ProjectsSection.tsx`):**
    -   It imports the `projects` array from `src/lib/projects.ts`.
    -   It uses the `.map()` method to iterate over the `projects` array and render a `<ProjectCard />` for each one, passing the project data down as props.
    -   The entire section is wrapped in a `<SectionWrapper>` which is a simple component that uses `whileInView` to fade the section in as the user scrolls.

### Step 7: The About, Downloads, and Contact Sections

These sections follow similar patterns.

1.  **`src/components/sections/AboutSection.tsx`**: Create the file and paste the code from the project files. It uses ShadCN's `Card` and `Tabs` components to organize your skills neatly.
2.  **`src/components/sections/DownloadsSection.tsx`**: Create the file and paste the code. This is a simple component with buttons that link to your resume and other documents. Make sure to place your resume PDF in the `public/assets` directory.
3.  **`src/components/sections/ContactSection.tsx`**: Create the file and paste the code.
    
    **How the Contact Form Works:**
    -   It uses `react-hook-form` for efficient form state management and `zod` for robust validation.
    -   `contactFormSchema` defines the validation rules (e.g., name must be at least 2 characters).
    -   The `onSubmit` function is triggered only if the form is valid. It sends the form data to a Google Apps Script URL. You can replace this with any backend service you like.
    -   The `useToast` hook (which we'll create next) is used to show success or error messages.

4.  **Create the `useToast` Hook:** Create `src/hooks/use-toast.ts` and paste the code from the project files. This is an advanced hook that manages the state of toast notifications globally.

---

## 6. Phase 5: Final Polish and Going Live

Your portfolio is built! Now for the final steps.

### Step 1: Populate Your Data

1.  Go back to `src/lib/developer-data.ts` and `src/lib/projects.ts`.
2.  Fill them out with your **real** name, social links, education details, and projects.
3.  For project images, you can use a service like [Unsplash](https://unsplash.com) or add your own images to the `public` folder and reference them (e.g., `/my-project-image.png`).

### Step 2: Push to GitHub

Now that your project is complete locally, it's time to share it with the world.

1.  **Create a New Repository on GitHub:**
    -   Go to [GitHub](https://github.com) and click "New repository".
    -   Give it a name (e.g., `my-developer-portfolio`).
    -   Make it public.
    -   **Do not** initialize it with a README, .gitignore, or license. We already have everything.

2.  **Initialize Git and Push Your Code:**
    -   In your project's terminal in VS Code, run these commands one by one:
    ```sh
    git init
    git add .
    git commit -m "Initial commit: Build my developer portfolio"
    git branch -M main
    git remote add origin https://github.com/YourUsername/your-repo-name.git
    git push -u origin main
    ```
    -   Replace `YourUsername/your-repo-name.git` with the URL of the GitHub repository you just created.

Your code is now safely backed up on GitHub!

### Step 3: Deploy Your Portfolio

You can easily deploy your new portfolio for free using services like [Netlify](https://www.netlify.com/) or [Vercel](https://vercel.com/).

**Deploying with Netlify:**
1.  Sign up for a free Netlify account.
2.  Click "Add new site" -> "Import an existing project".
3.  Connect to GitHub and select the repository you just pushed.
4.  Netlify will automatically detect that it's a Next.js project and configure the build settings for you (`npm run build` and publish directory `.next`).
5.  Click "Deploy site".

In a minute or two, your portfolio will be live on the internet for the world to see!

---

Congratulations! You have successfully built a complete, modern, and professional developer portfolio from scratch. You now have a deep understanding of its architecture and can confidently customize and extend it. Happy coding!

  