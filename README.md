<h1>:shopping_cart: de-Cart :shopping_cart:</h1>

```diff
# Is a Shopping Cart project.
```
:warning: :warning:                                                                
<h1>NB: Data is not stored in file or database so to successfully log in use  </h1>

```diff
# email: test@gmail.com
# password: TestAtGmailDotCom
```

```diff
# registration system doesnt store data
```

<hr />

<h2> De Cart Project Description: </h2>

 ```diff
 + This project is about creating API’s, API Authentication and verification when getting data
 + An API key system is used to generate API keys and these keys are used to perform cart system actions such as: Create cart, Get Cart, Update Cart and Delete Cart [CRUD operations]
 + The key is verified and validated on every request
 + A simple Full-Stack [MERN] is implemented
 +  => Mongodb was not used due to authentication issues
 +  => Express and Node as a server for API, API authentication and verification
 +  => React Front-End is used for client authentication, Creating, Reading, Updating and Deleting cart
```
:cherries: :fish: :iphone:



<h2>Pictures</h2>

<h4> Signin </h4>

![signin image](/screenshots/signin.png)

<hr />

<h4> Signup </h4>

![signup image](/screenshots/signup.png)

<hr />

<h4> Dashboard </h4>

![dashboard image](/screenshots/dashboard.png)

<hr />

<h4> Cart </h4>

![cart image](/screenshots/cart.png)

<hr />




<h2> Features :movie_camera: :camera: :floppy_disk: :video_camera:</h2>  

```diff
- API Key authentication when getting data
- Cart
```
<hr />

<h2> Stack || Languages :speech_balloon: :thought_balloon:</h2> 

```diff
- Main focus is the Node and Express Server but React is implemented to test the app
```

<h3> Front-End: </h3>

```diff
# JavaScript (ES6+)
# React JS
# Redux
# HTML
# CSS
```

<h3> Server: </h3>

```diff
# Node JS
# Express JS
```

<h3> Back-End: </h3>

```diff
 # No Back End is used. Data is stored on arrays
```


<h2>Front-End NPM Packages :package::package::package:</h2>
<em>for package versions: npm install package_name</em>

 <ul>
 
   <li>
      <em>
        <strong>
          react-redux:
        </strong>
       </em>
    </li>

```diff
# connecting redux to react app
```

   <li>
      <em>
        <strong>
          react-router-dom:
        </strong>
       </em>
    </li>
    
```diff
# front-end routing e.g "/dashboad"
```

   <li>
      <em>
        <strong>
          redux:
        </strong>
       </em>
    </li>
    
```diff
# global state of an application
```

  </ul>
  
<hr />

<h2>Back-End NPM Packages :package:</h2> 

   <li>
      <em>
        <strong>
          cors:
        </strong>
       </em>
    </li>
    
```diff
# Cross-origin resource sharing (CORS) is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served.
```
  <li>
      <em>
        <strong>
          dotenv:
        </strong>
       </em>
    </li>
    
```diff
# used with .gitignore to hide configurations and api keys from being shared on github
```

  <li>
      <em>
        <strong>
          express:
        </strong>
       </em>
    </li>
    
```diff
# for creating a server and back-end routing
```

  <li>
      <em>
        <strong>
          nodemon:
        </strong>
       </em>
    </li>
    
```diff
# listens to file changes and restarts server during development if they are any changes made to the file
```

<li>
      <em>
        <strong>
          randomstring:
        </strong>
       </em>
    </li>
    
```diff
# works as string shuffle mechanism e.g to generate ids
```

  </ul>

<hr />



<h2> Project Structure </h2>

<h3> Front-End: </h3>

```diff
# React: UI
```
- pages
  - dashboard
  - cart
  - signin
  - signup
- components
   - nav
   - cards
   - custom-modal
- store
  - action
  - reducerss
  - types
- index
- app


<h3> Back-End: </h3>

 - db
 - controllers
 - config
 - middleware
 - routes
 - app
 - index

```diff
+ only app, index, routes and middleware are used in this project
```

<h2> RUNNING THE PROJECT :running: :running: :running: :runner: :runner:</h2> 


<h3> Requirements :warning:</h3> 

<ul>
   <li>
      <em>
        <strong>
          Node js:
        </strong>
       </em>
    </li>
    
```diff
# for npm commands e.g npm start to start the app
```

  <li>
      <em>
        <strong>
          Git:
        </strong>
       </em>
    </li>
    
```diff
# if you prefer cloning the repo
```

</ul>

:arrow_down: :arrow_down: :arrow_down:

<em>Download nodejs here:</em> [node js!](https://nodejs.org/en/)<br />
<em>Download Git here:</em> [git!](https://git-scm.com/)

<hr />


<h3> Starting Project: </h3>

<h4> Navigate to root of the 'client' folder: </h4>

<ul>
   <li>
      <em>
        Create a 
        <strong>
          .env 
        </strong>
        file at root of the directory:
       </em>
    </li>

<h4> Save this file as .env :arrow_down_small::arrow_down_small::arrow_down_small: </h4>
    
```diff
# REACT_APP_BASE_URL=http://localhost:5000'
```

<h4> Now Navigate to root of the 'server' folder: </h4>

<ul>
   <li>
      <em>
        Create a 
        <strong>
          .env 
        </strong>
        file at root of the directory:
       </em>
    </li>

<h4> Save this file as .env :arrow_down_small::arrow_down_small::arrow_down_small: </h4>
    
```diff
# JWT_SECRET = 'type whatever you want here'
```
<ul>
   <li>
      <em>
        AT THE ROOT OF BOTH CLIENT THE AND SERVER YOU CAN START THE PROJECT BY RUNNING THESE COMMANDS:
       </em>
    </li>
    
```diff
# client:
# npm start
```
 
 ```diff
# server:
# npm run dev
```
</ul>

<h4> :grinning: :grinning: :grinning: :grinning: :grinning: HAPPY HACKING!!!!!!!! :grinning: :grinning: :grinning: :grinning: :grinning: </h4>

<hr />
<hr />












