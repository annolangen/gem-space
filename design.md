# Design and Technology Choices

This document outlines the design and technology choices for the Space Tourism website project. We justify the selected stack and provide context for future development.

## Meeting the Challenge

Our primary goal was to accurately implement the Frontend Mentor "Space Tourism Website" challenge. The implementation meets the core requirements in the following ways:

- **Visual Fidelity**: We implemented the layout, typography, colors, and spacing to closely match the provided design files for desktop, tablet, and mobile viewports.
- **Responsiveness**: The application is fully responsive. We used TailwindCSS to handle the layout shifts between different screen sizes.
- **Interactivity**: We implemented all interactive elements from the design, including:
  - Hover states for navigation links, buttons, and other interactive elements.
  - Active states for the current page in the navigation and for the selected items on the destination, crew, and technology pages.
  - Tabbed content for the destination page.
  - A slider/dot navigation for the crew page.
  - Numbered buttons for the technology page.

## Technology Stack

We chose the following technologies for this project:

- **TypeScript**: We used TypeScript for all JavaScript code to provide type safety and improve code quality. This helps catch errors early and makes the code more self-documenting.
- **lit-html**: A lightweight and efficient templating library. We chose it as a modern, standards-based alternative to heavier frameworks like React or Vue. For a project of this scale, `lit-html` provides the benefits of component-based templates without the overhead of a full framework.
- **TailwindCSS**: A utility-first CSS framework that we used for all styling. It is highly effective for translating a design system into code, allowing for rapid implementation of custom styles directly in the markup.
- **Parcel**: A zero-configuration web application bundler. We chose it for its simplicity, which allowed for a quick project setup and a smooth development experience.

## Architecture and Design

We designed the application with simplicity and maintainability in mind, choosing straightforward patterns that match the project's scale.

### Routing

We kept routing simple. In `index.ts`, we determine the page to display based on the URL hash (`#`). This approach avoids a complex routing library and is sufficient for a small, static website. The router then dynamically imports the correct page module (`home.ts`, `destination.ts`, etc.) and renders it into the main content area.

### Reusable Shell

We created a reusable application shell in `shell.ts` that contains the main layout, header, and navigation. We render this shell once and inject page-specific content into it. This approach provides several benefits:

- **Code Reusability**: The header and navigation are defined in one place and reused across all pages.
- **Consistency**: It ensures a consistent layout and user experience throughout the website.
- **Performance**: The shell is only rendered once, which can improve performance by reducing the amount of DOM manipulation required when navigating between pages.

### Data Handling

We store all website data (destinations, crew members, technologies) in a single `data.json` file. When a user navigates to a content page, we fetch this file, extract the relevant data, and render it. We chose this approach for its simplicity, as the data is static. A larger application with dynamic data would require a more robust data-fetching solution.

### State Handling

We kept state management intentionally minimalistic to align with the project's scale and technology stack. We handle state in two primary ways:

- **URL-based State**: We store the main application state—the current page and selected content (destination, crew member, or technology)—in the URL hash. The router in `index.ts` reads from `window.location.hash` to render the correct content, which makes the application's state bookmarkable and shareable.

- **DOM-based State**: We store UI-specific state, like the mobile menu's visibility, directly in the DOM. For example, the `toggleMenu` function in `shell.ts` toggles a CSS class on the menu element to show or hide it. This approach avoids keeping state in JavaScript variables.

#### Justification

We chose this approach for its simplicity and efficiency. For a website with limited interactivity and no complex shared state, a dedicated state management library (like Redux or Zustand) would be unnecessary overhead. Our current method is performant, dependency-free, and easy to maintain for this project's scope.

### Layout Strategy

We implemented the website layout using a combination of Flexbox and CSS Grid, choosing the best tool for the specific requirements of each component:

- **CSS Grid**: Used for the main page layouts (e.g., the two-column layout on the destination and technology pages). Grid is well-suited for creating complex, two-dimensional layouts and for aligning items into a grid.
- **Flexbox**: Used for smaller components and for one-dimensional layouts (e.g., the header navigation, the tabs on the destination page). Flexbox is ideal for distributing space and aligning items in a single row or column.

This hybrid approach allows us to create complex, responsive layouts while keeping the CSS clean and maintainable.

### Asset Handling and Build Process

While Parcel offers powerful automatic asset bundling, its static analysis has limitations. It cannot always detect asset paths that are dynamically constructed in our `lit-html` templates or loaded from `data.json`. This would normally result in missing images (like the logo and the page-specific crew/destination/technology images) in the final build.

To solve this pragmatically, we have chosen to manually copy the entire `assets` directory into the `dist` folder as part of our `dev` and `build` scripts in `package.json`.

```json
"build": "mkdir -p dist && cp -r assets dist && parcel build --public-url ./ index.html",
"dev": "mkdir -p dist && cp -r assets dist && parcel index.html"
```

This approach ensures that all assets are available at predictable paths during both development and production. For a project of this scale, the simplicity and reliability of this workaround outweigh the benefits of Parcel's more complex content-hashing and bundling features for these specific assets.

### Utility-First Strategy

We fully leverage Tailwind's utility-first approach. All design tokens—including colors, font families, and even complex responsive background images—are defined in `index.css` using the `@theme` at-rule, which is the idiomatic approach for Tailwind CSS v4. This allows Tailwind to generate a comprehensive set of utility classes that are applied directly in the markup.

The project deliberately avoids creating more abstract component classes (e.g., `.primary-button`, `.page-title`) to fully leverage the benefits of the utility-first approach, where styling is co-located with the HTML markup.

## Future Development and Re-evaluation

The current technology stack and architecture are well-suited for this project's requirements. However, we would re-evaluate our design and technology choices under the following circumstances:

- **Increased Application Complexity**: If the website grew into a larger application with significant shared state, we would consider migrating to a full-featured framework like Next.js (React), SvelteKit, or Nuxt.js (Vue). This would address the limitations of our current minimalistic state management strategy by providing more robust solutions like React's Context/hooks or Svelte's stores.

- **Dynamic Content from a CMS**: If the content were managed in a headless CMS, we would use a framework with stronger data-fetching capabilities and support for static site generation (SSG) or server-side rendering (SSR), like Next.js or SvelteKit.

- **Complex Animations**: For more advanced animations and page transitions, we could integrate a dedicated animation library like GSAP or Framer Motion.

- **Team Growth**: For a larger team, a more opinionated framework with a stricter structure and a wider ecosystem of tools might be preferable to improve consistency and speed up onboarding.
