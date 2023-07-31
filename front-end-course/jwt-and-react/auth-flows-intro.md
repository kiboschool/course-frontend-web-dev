# Auth flows intro

## What is an Authentication Flow?

Authentication is a critical component of almost any web application. It's the process that confirms if a user is who they say they are. From a user logging in to their email, to a bank customer accessing their account, authentication is key to ensuring the right people have access to the right information.

In previous courses you already covered how an traditional app flow works.

[https://web-app-development.vercel.app/lessons/auth.html](https://web-app-development.vercel.app/lessons/auth.html)

In this flow, we have in the same server the front end and the back end. Actually they are part of the same app.

How ever, when we work with SPAs we have a very clear separation between the front end the backend. They live in two different codebases and servers.

It looks like this:

![Untitled](/front-end-course/asynchronous-javascript/intro-to-asyncronous-programing/untitled.png)

Because of this, normally a different approach is chosen, we use something called JWT to handle our auth efforts.

In the next lesson we will explore what JWT is.