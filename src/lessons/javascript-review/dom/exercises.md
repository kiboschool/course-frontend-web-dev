# Exercises

The following exercises are not mandatory but they are highly recommended to help you internalize your learnings. (No need to be submitted on Gradescope).

1. What is the DOM?

    - Create an HTML page with various elements (e.g., headings, paragraphs, lists, images) and then open the Developer Tools in the browser to explore the DOM structure.

    - Use the following HTML skeleton, we've added some HTML elements so you can play with them.

    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My exercises</title>
    </head>
    <body>

        <button id="my_button">Change this background color</button>
        

        <h3>Groceries</h3>
        <ul id="list_container">
            <li class="list_element">One</li>
            <li class="list_element">Two</li>
            <li class="list_element">Three</li>
            <li class="list_element">Four</li>
        </ul>
        <input type="text"  id="new_element_text" />
        <button>Add element</button>

        <img src="http://imagedummy.com" />
        <button>Click me to change image</button>

    </body>

    <script>
        // your scripts go here
    </script>

    </html>
    ```

2. Node Types

    - Write a JavaScript function that accepts a DOM element as an argument and logs its node type and node name.
    - Create a function that prints all the node types present in a given DOM tree.

3. Selecting Elements

    - Select an element by its ID and change its background color.
    - Select all elements with a particular class name and change their font style.
    - Use **`querySelector`** and **`querySelectorAll`** as well.

4. Updating Elements

    - Create a function that changes the content of a specific element on the page.
    - Write a script that updates the **`src`** attribute of an image element when a button is clicked.
    - Create a script that toggles the visibility of an element when a button is clicked.

5. Inserting Elements

    - Write a script that adds a new list item to an unordered list when a button is clicked.
    - Implement a script that adds a new row with input fields to a table.

6. Deleting Elements

    - Create a script that deletes a table row when a "Delete" button inside the row is clicked.
    - Implement a script that clears all the contents of a specific container element.