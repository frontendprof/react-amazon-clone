## react-amazon-clone

- npx create-react-app ./
- npm install -g firebase-tools
- npm install react-router-dom
- npm install @material-ui/core
- npm install @material-ui/icons

### Initial setup

1. Removing unnecessary files
2. Cleanup
3. Wiring up to github account

### Routing

1. Configuring routing with react-router-dom

### Components

1. Header component
2. Home component
3. Product component
4. Checkout component

### contextAPI

1. reducer.js
2. StateProvider.js

### reducer.js

1. Creating initialState with basket array value and exporting it
2. Creating reducer function with state and action arguments and checking cases
3. Creating action type "ADD_TO_BASKET" and its logic

### StateProvider.js

1. Creating context with createContext()
2. Creating context provider and passing value with reducer and initialState arguments
3. Exporting context provider and wrapping App componnent up with it

### Header component

1. Getting amazon logo icon
2. Importing Link from 'react-router-dom' and encompassing logo icon with it
3. Creating search input element
4. Importing search icon from 'material-ui' and placing it after input element
5. Creating links and basket icon and count after each other
6. Implementing style from ./header.css
7. Using useContext and getting basket props and passing it to checkout basket count

### Home component

1. Importing main/banner image and rendering it
2. Applying some style
3. Rendering Product component and passing props

### Product Component

1. Building product layout
2. Rendering each and every props of component
3. Applying style
4. Triggering onClick with addToBasket function which uses contextAPI

### Checkout Component

1.
