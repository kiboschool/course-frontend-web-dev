# Project: Pokédex

## Project set-up
GH classroom link [here](https://classroom.github.com/a/y-LV-9rD)

## Project Description

In this project, you are tasked to build a web-based Pokédex application using React.

![Untitled](./project/untitled.png)

The application will interface with an external Pokemon API ([pokeapi.co](http://pokeapi.co/)) to retrieve and display Pokemon data.

### Project Learning Objectives

- Understand and practice API calls in React.
- Practice using state and props in React.
- Learn to build a more complex application using React.
- Understand and practice handling events in React.
- Component Desig

## Project Structure

This time the whole project set up will be up to you, you will need to use vite to create a React app, and design your own components.

## Project Milestones

### Milestone 1: Project Setup

Set up your project using create-react-app or Vite and install all necessary dependencies. Create the necessary files and directories according to the project structure. Ensure your application runs without errors.

### Milestone 2: Fetching Pokémon Data

In this milestone, focus on fetching the list of Pokémon from the API. This involves creating a function in your App component that fetches the data from the API and stores it in your component state. You should fetch the first 150 Pokémon as per the project requirement. It should be displayed only using `console.logs`

### Milestone 3: Display Pokémon List

Once you have the Pokémon data, your next task is to display it. Create a `PokémonList` component that takes the list of Pokémon as a prop and displays it.

### Milestone 4: Fetch and Display Pokémon Details

Create a function in your App component that fetches more details for a selected Pokémon. This function should be triggered when a Pokémon from the list is clicked. Create a `PokémonDetails` component that takes the detailed Pokémon data as a prop and displays it. Individual pokemon data should be displayed on the same page.

### Milestone 5: Styling your Application

Add styling to your application. Create a CSS file and add styles to make your application visually appealing and easy to use.

## Bonus Milestones

If you complete the main objectives early or want an extra challenge, here are some bonus milestones you could work on:

### Bonus Milestone 1: Play Pokémon Sound Track

In this milestone, find a Pokémon soundtrack .mp3 file and play it when the page loads.

### Bonus Milestone 2: Display Geolocation

Use the Geolocation API to display the user's current coordinates on the home page.

### Bonus Milestone 3: Add Search Feature

Add a search feature to your Pokémon list. Users should be able to search for a specific Pokémon by name or ID.

### Bonus Milestone 4: Pagination

Add pagination or infinite scrolling to your Pokémon list. When a user reaches the end of the list, more Pokémon should be loaded and displayed.

### Bonus Milestone 5: Favorite Pokémon

Add a feature that allows users to favorite Pokémon. The list of favorite Pokémon should be saved in local storage so it persists across page reloads.