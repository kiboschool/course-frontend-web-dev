# State in url

While using an application, users might want to share a certain view of the app or bookmark it to return later. In such cases, the application's state should be encoded in the URL. With `react-router-dom`, we can easily manage and manipulate the state in the URL, allowing our React application to be navigable.

## What Does State in URL Look Like?

State in the URL usually represents a particular view or condition of the application. It could be as simple as a specific page or as complex as various parameters determining a unique view. This is what makes applications "bookmarkable".

Let's take an example of a shopping site. A URL with state might look something like this:

```
https://www.shop.com/products?category=electronics&sort=price_low_to_high&page=2
```

In this example, the state of the application includes:

- `category`: electronics
- `sort`: price_low_to_high
- `page`: 2

This URL points to the second page of electronics products sorted from lowest to highest price.

## How to Handle State in URL with React Router

React Router is a powerful library for handling routing in React applications. It provides various ways to handle state in the URL.

To handle state in URL with React Router, we typically use query parameters and URL parameters.

### Query Parameters

Query parameters appear after the `?` in the URL and are usually used for optional, unordered values. We can read query parameters using the `useLocation` hook from `react-router-dom`.

```jsx
import { useLocation } from 'react-router-dom';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Products() {
  let query = useQuery();

  let category = query.get("category");
  let sort = query.get("sort");
  let page = query.get("page");

  // rest of your component
}
```

### URL Parameters

URL parameters appear as variable sections within your path (i.e  `http://shop.com/articles/32`) They are used for required, ordered values and are defined in your routes. We can read URL parameters using the `useParams` hook.

```jsx
import { useParams } from 'react-router-dom';

function ProductDetail() {
  let { productId } = useParams();

  // use productId to fetch or select product from state
}
```

### Navigating with State

In addition to reading state from the URL, we often need to navigate while preserving or changing this state. We can do this with the `useHistory` hook.

```jsx
import { useHistory } from 'react-router-dom';

function Product({ product }) {
  let history = useHistory();

  function handleClick() {
    history.push(`/products/${product.id}`);
  }

  // in your JSX
  // <button onClick={handleClick}>View Details</button>
}
```