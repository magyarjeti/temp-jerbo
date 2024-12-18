# Jerbo UI for SvelteKit apps

## Setup

1. Add `/static/themeSwitcher` to `.gitignore`
2. Add the following `package.json` scripts to your app:
   ```json
   {
   	"themeSwitcher:copy": "rm -rf static/themeSwitcher && mkdir -p static/themeSwitcher && cp node_modules/@packages/ui/dist/* static/themeSwitcher/",
   	"themeSwitcher:link": "rm -rf static/themeSwitcher && ln -sf ../node_modules/@packages/ui/dist static/themeSwitcher"
   }
   ```
3. Extend `build` and `dev` scripts in `package.json`:
   ```json
   {
   	"dev": "pnpm themeSwitcher:link && ...",
   	"build": "pnpm themeSwitcher:copy && ..."
   }
   ```
4. Add the following snippet directly below the body tag in `app.html`, cange `theme-name` to your preferred name:
   ```html
   <script src="/themeSwitcher/index.js"></script>
   <script>
   	window.jerbo.init('theme-name');
   </script>
   ```
5. Add the following the `+layout.svelte`, change `initialTheme` to the value loaded from the cookie, `jerbo-theme-name-theme`:
   ```ts
   import { setThemeContext } from '@packages/ui/contexts';
   const themeStore = setThemeContext(initialTheme);
   ```
