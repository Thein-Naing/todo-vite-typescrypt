# todo-vite-typescrypt then   cd vite-project
1- npm create vite
- ✔ Project name: … vite-project
✔ Select a framework: › React
✔ Select a variant: › TypeScript
then   
  - cd vite-project
  - npm install
  - npm run dev

UI running on   Local:   http://localhost:517 {
return (  .... in App.tsx.3.


2- import React, { FC } from 'react'; then change function type to arrow function type with FC,
-  const App: FC = () => {
return (  .... in App.tsx.
-   btw , FC = function component.

3- We will use ChangeEvent functon in handleChange event argument for multiple onChange events. 
Also in our useState hooks, we will add <string> <number> objects, also we will use <HTMLInputElement> in  handleChange event argument as belows:
  import React, { FC, useState, ChangeEvent } from 'react';
  const App: FC = () => {
  const [task, setTask] = useState<string>('');
  const [days, setDays] = useState<number>(0);
  const [todo, setTodoList] = useState<string>([]);

const handleChange = (event: ChangeEvent<HTMLInputElement>
