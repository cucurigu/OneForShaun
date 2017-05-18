Coding Test - Fullstack JavaScript Developer
---

Story: As a user, I want to login and view my user profile.

### Overview
This task is to create a very simple web application that presents an unauthenticated landing page, with an option for the user to login via our OAuth2 Identity Service, retrieve their user profile and display it in a server-rendered view, enhanced with a custom jQuery plugin.

### Technologies
You will be expected to demonstrate a solution using all of the following technologies:

 * [ ] Node v6.5 (**ES6**)
 * [ ] NPM, Grunt
 * [ ] HTML5
 * [ ] **Native ES5** JavaScript
 * [ ] jQuery
 * [ ] Ajax
 * [ ] Express 4
 * [ ] PassportJS
 * [ ] Handlebars (or other Node templates library)

### Server-Side Tasks

To build a simple node application that serves a single web page, and handles authentication.

1. Create an express application that serves static files, and a single-page HTML file.
    
    a). Should run on ​ http://localhost:3000​ to work with the authentication service

1. Create an unauthenticated view for the dashboard

    a). Just a simple text message and login button will suffice

1. Integrate PassportJS OAuth 2 (Explicit Grant / Authentication Code flow) authentication

    a). Create a middleware that should be used to check whether the user is logged in or not,
redirecting to the Identity Service login page, if they are not.

1. Create a controller and view for the “User Profile” view

    a). The view should be completely rendered server-side
    
### Client-Side Tasks

To display a user interface to allow the user to login and view their profile. Please construct the profile view
in the most appropriate way.

1. Create a basic “standard” page layout using a responsive CSS framework of your choice

a. Include header and footer components

1. Create a jQuery plugin to enhance the profile view

a. Define “enhance” yourself - try to choose an enhancement that adds to the user experience in the most useful way.

### Identity Service

Documentation [here](oauth/).

### Deliverables

1. Codebase that installs and runs from just running ​ npm install​ and ​ node server.js
1. Project README file(s)
1. A custom jQuery plugin
1. ZIP file or git repo containing the codebase
1. A covering note - explaining choices for approaches and anything else you think might assist the
review

### Bonus Points

Any sort of unit or integration tests!