# React query

When building applications, we often need to fetch, cache, synchronize, and update server state in our React applications. Although you can manage all of these processes manually (with `react context` and `fetch`), It's very time consuming and complicated to set up. This is where libraries like React Query come in handy.

## What is React Query?

![Untitled](/front-end-course/asynchronous-javascript/intro-to-asyncronous-programing/untitled.png)

React Query is a data fetching and state management library for React. It provides a set of hooks that enable you to fetch, cache, and update data in your React components without needing to handle all of the complex state management logic manually.

React Query offers several advantages:

1. **Out of the box global state:** If you need your API data in multiple components (children or parents), you don't have to do anything extra (like set up React-context)
2. **Auto Caching**: React Query automatically caches data in memory. This means that if you request the same data again, it will be retrieved from the cache instead of making another network request.
3. **Pagination and Infinite Queries**: React Query has built-in support for complex use cases like pagination and infinite scrolling.

## React Query Example

Let's look at a simple example where we fetch a list of posts from an API.

Firstly, install React Query:

```powershell
npm install react-query
```

Now, let's fetch the data using the `useQuery` hook from React Query.

```jsx
import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

function Posts() {
  const fetchPosts = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return res.data;
  };

  // useQuery('posts') in every component where you need posts (global state)
  const { data, status } = useQuery('posts', fetchPosts);

  if (status === 'loading') return <p>Loading...</p>;

  if (status === 'error') return <p>Error :(</p>;

  return (
    <div>
      <h1>Posts</h1>
      {data.map(post => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
  );
}

export default Posts;

```

In the `Posts` component, we use the `useQuery` hook to fetch posts from the server. The `useQuery` hook accepts two parameters: a unique key for the query and an asynchronous function that returns the data. In our case, the asynchronous function is `fetchPosts`, which uses axios to fetch the posts from the API.

The `useQuery` hook returns an object with several properties that you can use to manage the state of your component:

- `status`: The status of the query. It can be 'idle', 'loading', 'error', or 'success'.
- `data`: The data returned from the query. It's undefined until the query succeeds.
- `error`: Any error that occurred during the query.

We then use the `status` to display a loading message, an error message, or the data when it's available.