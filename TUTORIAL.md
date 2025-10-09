
# Your Portfolio: A Developer's Guide & Tutorial

Welcome! This document is your all-in-one guide to understanding, running, and customizing your personal portfolio. Think of this as a hands-on tutorial where you'll learn not just *what* this portfolio does, but *how* it does it, giving you the knowledge to build on it as if you created it from scratch.

---

## 1. Getting Started: Running Your Portfolio Locally

First things first, let's get the project running on your own machine. This is the essential first step for any developer.

### Prerequisites

- **Node.js:** You'll need Node.js installed. This project uses version 18 or higher.
- **npm:** This is the package manager for Node.js and usually comes with it.

### Step-by-Step Setup

1.  **Clone the Repository:**
    If you haven't already, get a copy of the code on your computer.
    ```sh
    git clone https://github.com/your-username/your-repo-name.git
    ```

2.  **Navigate to the Project Directory:**
    ```sh
    cd your-repo-name
    ```

3.  **Install Dependencies:**
    This command reads the `package.json` file and downloads all the necessary libraries (like React, Next.js, Tailwind CSS) that the project depends on.
    ```sh
    npm install
    ```

4.  **Run the Development Server:**
    This is the magic command. It starts up a local server where you can see your portfolio live and watch your changes update in real-time.
    ```sh
    npm run dev
    ```

5.  **View Your Portfolio:**
    Open your web browser and go to **[http://localhost:9002](http://localhost:9002)**. You should now see your portfolio running!

---

## 2. Understanding the Tech Stack

This portfolio is built with a modern, industry-standard set of tools. Here’s a quick look at the key players:

- **Next.js:** The core framework. It's a powerful layer on top of React that gives us server-side rendering, file-based routing, and a fantastic developer experience. We're using the **App Router**, which is the latest and most powerful way to build Next.js apps.
- **React:** The library for building user interfaces. Everything you see is a React component.
- **Tailwind CSS:** A utility-first CSS framework for styling. Instead of writing custom CSS files, we build designs directly in our HTML/JSX using classes like `p-4`, `flex`, and `text-primary`.
- **ShadCN UI:** A collection of beautifully designed and accessible UI components (like `Button`, `Card`, `Dialog`) that are built on top of Tailwind CSS.
- **Framer Motion:** A production-ready animation library for React. It makes adding smooth, interactive animations incredibly simple.
- **Lucide React:** A library of clean and beautiful icons.

---

## 3. Project Structure: Where to Find Everything

A well-organized project is easy to maintain. Here's a map of your portfolio's structure:

```
.
├── public/                # Static assets (images, documents like your resume)
│   └── assets/
│       ├── denniskaninuresume.pdf
│       └── ...
├── src/
│   ├── app/               # The heart of your Next.js app (App Router)
│   │   ├── globals.css    # Global styles and theme variables
│   │   ├── layout.tsx     # The main layout for your entire app
│   │   └── page.tsx       # The main page component (your homepage)
│   ├── components/
│   │   ├── sections/      # Major sections of your portfolio (Hero, About, etc.)
│   │   ├── shared/        # Reusable components (Header, Footer, ProjectCard)
│   │   └── ui/            # ShadCN UI components
│   ├── hooks/             # Custom React hooks (e.g., use-toast)
│   └── lib/               # Helper files, data, and utilities
│       ├── developer-data.ts  # Your personal data (name, socials, etc.)
│       ├── projects.ts    # Data for your project showcase
│       └── utils.ts       # Utility functions (like `cn` for class names)
├── tailwind.config.ts     # Configuration for Tailwind CSS
└── TUTORIAL.md            # This file!
```

---

## 4. Deep Dive: How the Components Work

Let's break down the key parts of your portfolio.

### The Main Page: `src/app/page.tsx`

This is the entry point for your homepage. It's a simple **Server Component** (the default in the App Router) that assembles all the different sections of your portfolio.

```tsx
import AboutSection from '@/components/sections/AboutSection';
import ContactSection from '@/components/sections/ContactSection';
// ... other imports

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <div className="relative z-10 bg-background">
          <AboutSection />
          <ProjectsSection />
          <DownloadsSection />
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}
```

-   **Server Component:** Notice there's no `'use client'` at the top. This means the component renders on the server, which is great for performance and SEO.
-   **Composition:** It imports and arranges other components like `<Header />`, `<HeroSection />`, etc. This is a core principle of React: building complex UIs by combining smaller, independent pieces.

### Section Components: Example `ProjectsSection.tsx`

Each major part of your portfolio is a "section" component. Let's look at `src/components/sections/ProjectsSection.tsx`.

```tsx
'use client'; // This component uses client-side interactivity (Framer Motion)
import { motion } from 'framer-motion';
import { projects } from '@/lib/projects';
import ProjectCard from '@/components/shared/ProjectCard';

// A wrapper to handle the section's animation
const SectionWrapper = ({ children, id }: { children: React.ReactNode, id: string }) => {
    return (
        <motion.section
            id={id}
            className="py-16 sm:py-24"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
        >
            <div className="container mx-auto px-4">
                {children}
            </div>
        </motion.section>
    );
};

export default function ProjectsSection() {
  return (
    <SectionWrapper id="projects">
      {/* ... Title and subtitle ... */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </SectionWrapper>
  );
}
```

-   **`'use client'`:** This directive is crucial. It tells Next.js that this component needs to run in the browser because it uses client-side features like `useState`, `useEffect`, or in this case, `framer-motion` for animations.
-   **`motion.section`:** This is from Framer Motion. Instead of a regular `<section>`, we use `<motion.section>` to add animations. The `initial`, `whileInView`, and `transition` props define how the section animates as you scroll it into view.
-   **Data Mapping:** The component imports the `projects` array from `src/lib/projects.ts` and uses the `.map()` method to create a `<ProjectCard />` for each project. This is a standard and efficient way to render lists of data in React.

### Reusable UI: The `ProjectCard.tsx` Component

This is where the magic for your project showcase happens. It's a great example of a component that combines styling, data, and interactivity.

```tsx
'use client';
// ... imports
import { Card, CardTitle } from '@/components/ui/card'; // ShadCN component

export default function ProjectCard({ project, index }: ProjectCardProps) {
  // ... animation variants ...

  return (
    <motion.div variants={cardVariants} ...>
      <Card className="aspect-square ... relative">
        <Image src={project.image.imageUrl} ... />

        {/* Static Title visible by default */}
        <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
          <motion.div variants={titleVariants} whileHover="visible">
            <CardTitle className="font-headline text-lg text-primary">{project.title}</CardTitle>
          </motion.div>
        </div>

        {/* Hover Content */}
        <motion.div
          className="absolute inset-0 z-20 ..."
          variants={overlayVariants}
          initial="hidden"
          whileHover="visible"
        >
          {/* ... Gradient overlay and description content ... */}
        </motion.div>
      </Card>
    </motion.div>
  );
}
```

-   **Props:** The component receives a `project` object as a prop, which contains all the information it needs to display (title, image, etc.). This makes the component reusable for any project.
-   **`motion.div` and `whileHover`:** This is the core of the "super cool" interaction. Framer Motion's `whileHover` prop allows us to define a different animation state for when the user's mouse is over the component. This is how the overlay and description appear.
-   **Styling with Tailwind CSS:** Classes like `absolute`, `bottom-0`, `p-4`, and `z-10` are used to precisely position elements. `aspect-square` ensures the card maintains a 1:1 ratio.

---

## 5. Styling and Theming

Your portfolio has a consistent and beautiful design thanks to a well-structured styling system.

### Global Styles and CSS Variables: `src/app/globals.css`

This is the foundation of your portfolio's look.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222 84% 5%;
    --primary: 190 95% 45%;
    /* ... other light mode colors ... */
  }

  .dark {
    --background: 240 10% 2%; /* Sharp Pitch Black */
    --foreground: 210 40% 98%;
    --primary: 190 95% 55%; /* Bright cyan */
    /* ... other dark mode colors ... */
  }
}
```

-   **CSS Variables:** We define colors using HSL (Hue, Saturation, Lightness) values in CSS variables (e.g., `--background`). This makes the theme highly customizable.
-   **Dark Mode:** The `.dark { ... }` block redefines these same variables for dark mode. When the `dark` class is applied to the `<html>` element (which `next-themes` does for us), these new values take effect.

### Tailwind Configuration: `tailwind.config.ts`

This file tells Tailwind CSS how to use our custom theme.

```ts
// ...
theme: {
  extend: {
    colors: {
      background: 'hsl(var(--background))',
      foreground: 'hsl(var(--foreground))',
      primary: {
        DEFAULT: 'hsl(var(--primary))',
        foreground: 'hsl(var(--primary-foreground))',
      },
      // ...
    },
  },
},
// ...
```

Here, we're mapping Tailwind's color names (like `background`, `primary`) to our CSS variables. Now, when you use a class like `bg-primary` in your JSX, Tailwind knows to apply `background-color: hsl(var(--primary))`. This powerful system makes your styling consistent and theme-aware.

---

## 6. How to Customize Your Portfolio

This portfolio is designed to be **your** portfolio. Here’s how you can easily make it your own:

### Update Your Personal Information

-   **File:** `src/lib/developer-data.ts`
-   **Action:** Open this file and change the `name`, `title`, `socials`, `contact`, and `education` details to match your own. The website will update automatically.

### Add or Change Your Projects

-   **File:** `src/lib/projects.ts`
-   **Action:** This file contains an array of project objects. You can edit the existing ones or add new ones by following the same structure. Make sure your image URLs are correct. For new project images, you can add them to `src/lib/placeholder-images.json`.

### Change the Theme Colors

-   **File:** `src/app/globals.css`
-   **Action:** Want a different primary color? Just change the HSL value for `--primary`. For example, to make it a vibrant purple:
    -   `--primary: 280 80% 55%;`
-   You can do this for both light (`:root`) and dark (`.dark`) themes.

---

You now have a complete overview of how this portfolio is built. By understanding these core concepts, you are fully equipped to modify, extend, and truly make it your own. Happy coding!
