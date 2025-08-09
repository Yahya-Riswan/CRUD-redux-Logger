# Redux CRUD Heading App

A simple **CRUD-style app** built with **Redux** (via CDN imports) to manage a single `title` value.  
The app demonstrates how to use **Redux state management**, **middleware logging**, and **Redux DevTools** integration — all without a build step.

---

## 🚀 Features
- **Add** a title
- **Get** (view) the stored title in the input field
- **Update** the existing title
- **Delete** the title
- **Custom Logger Middleware** to log previous state, dispatched action, and next state
- **Redux DevTools** support for state debugging

---

## 📂 Project Structure
.
├── index.html # Main HTML file
├── style.css # Styling
├── redux.js # Redux store, reducer, actions, event bindings
└── LoggerMiddleware.js # Custom middleware for logging Redux actions


---

## 🛠️ Technologies Used
- **HTML5**
- **CSS3**
- **JavaScript (ES Modules)**
- **Redux 4.2.1** via CDN
- **Redux DevTools** (optional browser extension)

---

## 📖 How It Works
1. **State**  
   ```js
   const initialState = {
       title: "",
       show: false
   };
   ```

2. **Reducer handles:**
    ```cmd
      ADD → Adds a title
    
      GET → Toggles showing the title in the input
    
      UPDATE → Updates the title
    
      DELETE → Clears the title
    ```

3. **Middleware**
    LoggerMiddleware logs:
    
    ```cmd
      Prev State
      Action
      Next State
    ```


4. **Redux DevTools**
    Integrated using:
   ```js
   const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
   ```
---

## ▶️ Usage
1. Open index.html in a browser that supports ES Modules.

2. Install the Redux DevTools browser extension (optional but recommended).

3. Use the buttons:
```cmd
ADD → Stores the input value

GET → Displays the stored value in the input

UPDATE → Updates stored value with the new input

DELETE → Clears the stored value
```
## 📸 Preview

---

## 🔍 Learning Outcomes
Setting up Redux without npm or bundlers using CDN ESM imports

Using middleware for custom logging

Connecting to Redux DevTools

Implementing basic CRUD actions in Redux


