# design-video-store
## _Course based on Youtube video with jotredev_
[Diseño UI tienda de videojuegos con React JS y Tailwind CSS totalmente responsivo](https://www.youtube.com/watch?v=Q69vJCCCsp8)

## 0a. Preconditions
1. Install the NPM and NODEJS in your system [Nodejs Download](https://nodejs.org/en/download/current/)
2. Check in $path or %path% the nodeJS and npm are on it
  ```Mathematica
  C:/Program Files/nodejs
  ```
3. Install also `pnpm` [pnpm installation](https://pnpm.io/installation), it is more fast than `npm`
4. Install Visual Studio Code
  [Visual Studio Download](https://code.visualstudio.com/insiders/)

## 0b. Starting the proyect
1. I used [Vite](https://vitejs.dev/guide/), the best way to start any front-end project, with Typescrypt and a lot of templates:
```Mathematica
npm init vite@latest design-video-store --template react-ts
```
2. Following the instructions, install the applications based on the `package.json` file.
```Mathematica
pnpm install
```
3. To activate tha Alias, check this page [Setup path aliases w/ React + Vite + TS](https://dev.to/avxkim/setup-path-aliases-w-react-vite-ts-poa), the run this command:
```Mathematica
pnpm i -D @types/node
```
![Steps to configure the "@" alias](images/2023-06-22_090013.png)

## 0c. Install Tailwind CSS and check
1. Go the [Tailwind CSS](https://tailwindcss.com/docs/installation), and select "Framework Guides" option.
2. Becasue I used the "Vite", select "Vite". 
3. Run this command of the 2 step "Install Tailwind CSS" option, in a terminal:
```Mathematica
pnpm install -D tailwindcss postcss autoprefixer
```
4. Run this process to Initialize the tailwind css or create the config Tailwind file:
```Mathematica
npx tailwindcss init -p
```
5. Add the paths into the `content: [],` to all of your template files in your "tailwind.config.js" file.
```javascript
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
``` 
6. Delete all code into "scr/index.css" file, to let only the `@tailwind` directives:
```javascript
@tailwind base;
@tailwind components;
@tailwind utilities;
```
7. Delete App.css" file.
8. Inside the "App.tsx" delete all into the first `<>` element, below the `return`, and also delete all unused code, this is only code to let it:
```javascript
function App() {
  return (
    <>
    </>
  )
}
export default App
```
9. Become the `<>` element to `<div>` with a `className`:
```javascript
      <div className="bg-red-400">
```
10. And run the application.
```Mathematica
pnpm dev
```
