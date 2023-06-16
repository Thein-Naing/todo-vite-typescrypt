-  This is my first vite-typescrypt project. after learning tutorials from PedroTech youtube channel/George web dev youtube channel.
-  (- npm create vite
- ✔ Project name: … vite-project
✔ Select a framework: › React
✔ Select a variant: › TypeScript
then   
  - cd vite-project
  - npm install
  - npm run dev)
 
    You can check final site here : https://react-exercises-todo-vite-typescrypt.netlify.app/



When you use styled-components in react/vite you will definitely got error when installing styled-componnts. Use this command.

It's having an issue. I tried with upgrading and downgrading node and npm versions it always shows an error.

To Fix this use latest LTS v5.3.10 version of styled-components

For projects using JS/JSX(JavaScript)
npm i -D styled-components@5.3.10

For projects using TS/TSX(TypeScript)
npm i -D styled-components@5.3.10 @types/styled-components
