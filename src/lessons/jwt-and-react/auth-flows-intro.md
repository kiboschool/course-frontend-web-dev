# Introduction to Authentication Flows

## What is an Authentication Flow?

Authentication is a critical component of almost any web application. It's the process that confirms if a user is who they say they are. From a user logging into their email to a bank customer accessing their account, authentication is key to ensuring the right people have access to the right information.

In previous courses, you already covered how a traditional app flow works.

[https://web-app-development.vercel.app/lessons/auth.html](https://web-app-development.vercel.app/lessons/auth.html)

In this flow, we have the front end and the back end on the same server--they are part of the same app.

However, when we work with SPAs we have a very clear separation between the front end and the back end. They live in two different code bases and servers.

It looks like this:

![Untitled](./auth-flows-intro/untitled.png)

Because of this, normally a different approach is chosen, we use something called JWT to handle our auth efforts.

In the next lesson, we will explore what JWT is.
