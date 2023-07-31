# Other global state libraries

Due to the inherent complexity of state management, especially in large applications, a number of libraries and patterns have emerged to help manage global state. 

In this course, we focused only 2 libraries, React Query and React Context. But there is more.

This is a non exhaustive list:

1. **Redux**: Perhaps the most well-known state management library for React, Redux offers a predictable state container that helps write applications that behave consistently, run in different environments, and are easy to test. Redux also has a great ecosystem and provides excellent devtools.
2. **MobX**: This library simplifies state management by making it more reactive. In MobX, you mutate state directly, and the library takes care of updating any components that are consuming that state.
3. **Zustand**: Zustand provides a minimalistic state management solution. It's lighter than some other solutions and includes features like middleware and devtools.
4. **Recoil**: Recoil is a state management library from Facebook. It provides several advanced features, such as derived state and asynchronous queries, which can be beneficial in larger applications.
5. **Jotai**: Jotai takes a unique approach by offering an atom-based state management solution. In Jotai, you manage individual pieces of state (atoms), and the library takes care of updating components when the atoms they depend on change.
6. **XState**: XState takes state management in a slightly different direction by allowing you to model your state as state machines. This can make your state logic more predictable and easier to understand.
7. **Easy Peasy**: Easy Peasy provides Redux with less boilerplate, using a simple, unobtrusive API. It's powered by Redux and Redux Toolkit underneath, but abstracts that away for a friendlier developer experience.

These are just a few of the libraries available for state management in React. Each has its own strengths, weaknesses, and use cases, so the best choice depends on the needs of your specific project.