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
## 0d. Install React icons
1. From the [React Icons](https://react-icons.github.io/react-icons/) site, install the react icons:
```Mathematica
pnpm install react-icons --save
```
### Note: this is the goal to do in this process:
![vide-store](images/2023-06-22_095303.png)

## 1. Adding the "Header" or Top Navegation.
1. Put a basic color in the "index.html" 
file using the `<body>`and adding a class:
```html
<body class="bg-[#181A20]">
```
2. Change the Title in "index,html" file:
```html
<title>Video Games Store Online</title>
```
3. Create a directory called "pages".
4. Create a file "Home.tsx" and run `rfce` snippet. Remember to delete the first line, _not require the import of react_.
3. Create a directory called "components", inside the "pages" directory. 
4. Create a file "Header.tsx" and run `rfce` snippet. Remember to delete the first line, _not require the import of react_.
5. Create a "index.ts" file into "components", an put this info:
```javascript
export { default as Header } from './Header';
```
6. Add the `import` of `Header`into "Home.tsx" file:
```javascript
import {Header} from './components';
```
7. Add a "index.ts" file into "pages" directory, whit this info:
```javascript
export { default as Home } from './Home';
export * from './components';
```
8. Finally add the `import` of `Home` into "App.tsx" file:
```javascript
```
9. Call into the `<div>` element below `return`, the `<Home/>` element, this is the current "App.tsx" file:
```javascript
import { Home } from "@/pages"
function App() {
  return ( <div><Home/></div> )
}
export default App
```
10. Instead of "Home" in "Home.tsx" file add the `<Header/>` element.
11. To the `<div>` element in "Home.tsx" add a `className` with some attributes:
```javascript
    <div className="min-h-screen">
      <Header />
    </div>
```
12. Change the `<div>` element of "Header.tsx" file by `<Header>` and add a `className`:
```javascript
return <header className="text-gray-300">
```
13. Instead of `Header` text change for `<ul>` and `<li>` elements.
14. The element into `<li>` could be `<a href ="#">` or `<Link>`, We use `react-router-dom`, then install it:
```Mathematica
pnpm install react-router-dom
```
15. Add an `import` into "App.tsx" file:
```javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom';
```
16. In "App.tsx" file Add the `BrowserRouter`, and `Routes` components are arround the `<Header />`, and use the `Route path=` point to `Home`:
```javascript
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
```
17. for each `<li>` use a `Link` to point to _root_.
```javascript
    <header className="text-gray-400">
      <ul>
        <li> <Link to="/">Home</Link> </li>
        <li> <Link to="/">Streams</Link> </li>
        <li> <Link to="/">Games Store</Link> </li>
        <li> <Link to="/">News</Link> </li>
      </ul>
    </header>
```
18. `import`the [Remix Icon](https://react-icons.github.io/react-icons/icons?name=ri) into "Header.tsx" file, to use in the second `<ul>` element:
```javascript
import { RiShoppingCartLine, RiHeart2Line } from "react-icons/ri";
```

20. Copy this picture into "/src/assets" directory:
![avatar194938.png](/src/assets/avatar194938.png)

21. Add Other `<ul>` element to show the Icons at right:
```javascript
      <ul>
        <li> <button><RiShoppingCartLine/></button> </li>
        <li> <button><RiHeart2Line/></button> </li>
        <li> <button><img src="/src/assets/avatar194938.png" className="w-8 h-8 object-cover rounded-full"/></button> </li>
      </ul>
```
22. Add to `<header` a padding _y_ of 4, padding _x_ of 10, item center, flex , y justify between:
```javascript
<header className="text-gray-400 py-4 px-10 flex items-center justify-between">
```
23. Add a `className` to first `<ul>` element:
```javascript
<ul className="flex items-center gap-6">
```
24. Add a `Hover`to each `<li>` element, using two variables:
```javascript
const orangeColor = 'text-[#E58D27] transition-colors';
  const hoverColor = "hover:"+orangeColor;
```
26. Add a `className` to the second `<ul>`:
```javascript
<ul className="flex items-center gap-6 text-xl">
```
27. Add the same `className` to the each `<button>`.
