# 🚀 DevStack

Build your ideal development stack by exploring frontend, backend, database, language, styling, and DevOps technologies in one place.

## 🌐 Live Demo

https://splendorous-capybara-caddff.netlify.app/

## 📖 About The Project

DevStack is a modern web application that helps developers discover and compare popular technologies used in software development. Users can browse technologies across different categories and create their own custom tech stack for future projects.

## 🛠️ Technologies Used

- JSX
- react.toastify
- Daisyiu
- React.js
- Tailwind CSS


## ✨ Features

### 🧩 Build Your Own Stack
Select technologies from different categories and create a personalized development stack.

### 📚 Explore Popular Technologies
Browse frontend, backend, database, programming language, styling, and DevOps tools with detailed descriptions.

### Modern User Interface
Clean and visually appealing design with intuitive navigation.


### FAQ

1. What is JSX, and why is it used in React?

JSX is a library of React. It is used to keep the code organised and manageable by creating different components for different sections of a project .

2. What is the difference between props and state?

Props is like variable.  It has some value or data which get passed from parent component to child component. 
State is a condition, a way to store a component's data .

3. What does the useState hook do, and where did you use it in this project?

useState hook is used to store data. It returns a value and a function with which we can update the initial value. 
In this project, useState is used in TechStackCards component to store and update the selected TechStackCards in the "Your Stack" section.

4. What does the useEffect hook do, and why did you need it to load the JSON data?
useEffect hook is used to prevent side effects while fetching data.

5. Why does every item in a .map() list need a unique key prop?

So that React can know exactly where  the changes happened. Without a unique key, React can get confused with non-primitive data type.

6. What is conditional rendering? Show one place you used it (example: the empty stack message).

Conditional rendering means it will render depending on the condition.  For example, in Your Stack section: when it's empty, it renders "no technology selected ". But when we click on "add" button , it renders something different (icons, name,etc.). This is called conditional rendering.

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent? 

From parent to a child component: using props.
From a child to parent component:  We can't do that directly.  So, we use uplifting method.  We declare the state in the parent component and then send it as props.

⭐ If you like this project, feel free to give it a star!