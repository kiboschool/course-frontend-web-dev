# Node types

When working with the Document Object Model (DOM), you will encounter various types of nodes that make up the structure of a webpage. Each type of node plays a unique role within the DOM and offers different functionality.

## Node Types

The DOM consists of several types of nodes. The most commonly used ones are:

1. **Document Node**: The root node of the HTML document. It represents the entire document and it's typically interacted with using the `document` object.
2. **Element Nodes**: These are the most commonly used nodes and represent each HTML element on the page, such as `<body>`, `<div>`, `<p>`, and so on. Element nodes can have attributes and can contain other element nodes, text nodes, and comments. They can be selected and manipulated using various DOM methods.
3. **Text Nodes**: These nodes contain the actual text content within an element node. Any text you see on a webpage, even the whitespace and line breaks, are stored in text nodes.
4. **Attribute Nodes**: These nodes contain the values of HTML attributes. Attribute nodes are accessed and manipulated via their parent element nodes.
5. **Comment Nodes**: These nodes represent HTML comments (`<!-- comment -->`) in the document.

It's important to note that in the DOM, everything is a node and these nodes are organized in a tree-like structure. This structure enables JavaScript to access and update the content of a webpage.