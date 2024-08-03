# Svelte + TailwindCSS Starter Kit

You can view a demo of this starter kit [here](https://svelte-tailwind-starter-kit.vercel.app/).

This repository provides a starting point for projects using Svelte and TailwindCSS. You can either use this repository directly or follow the steps to create your own setup.

## Using the Repository Directly

To use the repository directly, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/mdenesfe/svelte-tailwind-starter-kit.git
   ```

2. Navigate to the project directory:
   ```bash
   cd svelte-tailwind-starter-kit
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and go to [http://localhost:5173/](http://localhost:5173/).

## Creating Your Own Setup

If you prefer to set up your project step by step, follow these instructions:

1. Create a new Svelte project:
   ```bash
   npm create svelte@latest svelte-tailwind-starter-kit
   ```

2. Navigate to the project directory:
   ```bash
   cd svelte-tailwind-starter-kit
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Add TailwindCSS to your project:
   ```bash
   npx svelte-add@latest tailwindcss
   ```

5. When prompted, respond to the question:
   ```
   Do you want to use typography plugin? 
   ```
   Select `Yes`.

6. Modify your `svelte.config.js` file in the root directory as follows:
   ```javascript
   import adapter from '@sveltejs/adapter-auto';

   /** @type {import('@sveltejs/kit').Config} */
   const config = {
     kit: {
       adapter: adapter(),
       alias: {
         "@/*": "./path/to/lib/*",
       },
     }
   };

   export default config;
   ```

7. Install any additional dependencies:
   ```bash
   npm install
   ```

8. Start the development server:
   ```bash
   npm run dev
   ```

9. Open your browser and go to [http://localhost:5173/](http://localhost:5173/).
