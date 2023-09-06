# Creating a React Project

We already used Vite, to create our Vanilla JS applications. We can also use it to create React Applications.

## Creating a new Vite project

Full instructions are also described [here](https://vitejs.dev/guide/)

Run the following command in your terminal

```bash
npm create vite@latest my_project
```

Select in your terminal the type of Project you want (React) and then a Variable you need (JavaScript only)

This will create a new folder with all the required files to start coding with your React project.

## Running the Project

Once the project setup is complete, we can navigate into the project directory:

```bash
cd my_project
```

Next, we can install the dependencies:

```bash
npm install
```

Then, we can start the development server:

```bash
npm run dev
```

Now, our React application should be running at http://localhost:5173

## Structure of the Project

The project created includes the following directory structure:

```ascii
my_project
├── index.html
├── package.json
├── src
│   ├── App.css
│   ├── App.jsx
│   ├── favicon.svg
│   ├── index.css
│   ├── index.jsx
│   └── logo.svg
└── vite.config.js

```

Congratulations! You have successfully set up a new React project with Vite. Now you're ready to start building your React app.

Happy coding!
