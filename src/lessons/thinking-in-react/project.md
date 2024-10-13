# Project: Covid Dashboard using React

## Project Set-up

Link to GH classroom [here](https://github.com/kiboschool/frontend-week-5-final-project)

## Project Description

For this project, you'll be taking your existing Covid Dashboard built with vanilla JavaScript and HTML/CSS and you'll be recreating it as a React application.

This exercise will help you apply your newfound knowledge of React to a familiar context. The goal is to build a dynamic web application that displays, and manipulates data.

You'll want to consider the structure of your components, where state should live, and how data will be passed down via props.

## **Learning Objectives**

1. Understand and apply the concepts of component-based architecture.
2. Learn to think in terms of React: breaking down UI into reusable components.
3. Understand and manage state and props in a React application.
4. Gain more experience interacting with APIs using React and understand the React lifecycle methods.
5. Learn to handle user events in React.

## **Project Summary**

Your project will need to replicate all the features of your original COVID Dashboard, including but not limited to:

- Fetching data from the provided JSON data.
- Displaying a table with statistics of COVID-19 for different countries and months.
- Allowing users to filter data based on country and date.
- Allowing users to sort data based on different fields like cases, deaths, and recoveries.

## **Milestones**

### **Milestone 1: Planning your Components**

Before you begin coding, take some time to plan out your components. What components will you need? How will they be organized? What data will they need to receive as props? Write this plan in the README.md

### **Milestone 2: Setup and Static Components**

Set up your React environment and begin building your static components. These components won't have any interactivity yet - you're just focusing on getting the structure and layout right.

### **Milestone 3: Fetching the Data**

Add state to the necessary components and fetch the data from the JSON. Store this data in your state.

### **Milestone 4: Displaying the Data**

Now that you have your data stored in state, pass it down to the components that need to display it.

### **Milestone 5: Adding Interactivity**

Now that your data is displaying correctly, start adding interactivity. Add a date filter per year and month.

### **Milestone 6: Styling**

Now that all your functionality is working, spend some time styling your application. You want it to look good, as well as work well!

### Bonus features:

these bonus features are completely optional and are meant to provide an additional challenge if you finish the main requirements early. They're also a great way to make your project stand out!

1. **Data Visualization**: Use a library like D3.js or Recharts to add data visualizations like line graphs, bar charts, or pie charts. This could be used to show trends over time or comparisons between countries.
2. **Search Functionality**: Instead of just providing filters, include a search box that allows users to search for a specific country.
3. **Dark Mode**: Add a feature for users to switch between light and dark mode themes.
4. **Responsive Design**: Make sure the application is responsive and looks good on all devices, including mobile phones and tablets.
5. **Detailed Country Information**: If a user clicks on a country, show more detailed information about that country's COVID-19 stats.