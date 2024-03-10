
# Major learning points in learning React
## ES6
### Map
.map() array method is the ost useful in react
```
const myArray = ['apple', 'banana', 'orange'];
// this will repeat p tags until list is done
const myList = myArray.map((item) => <p>{item}</p>)
```
### Destructuring
Extracts all needed items from a list, only if needed
```
const vehicles = ['mustang', 'f-150', 'expedition'];

//old way of doing things
const car = vehicles[0];
const truck = vehicles[1];
const suv = vehicles[2];
```
A new way to extract from the list
```
const vehicles = ['mustang', 'f-150', 'expedition'];

const [car, truck, suv] = vehicles;
```
if you wanted to skip a vehicle then you can leave it out and have the commas in place like down below.
```
const vehicles = ['mustang', 'f-150', 'expedition'];

const [car,,suv] = vehicles;
```
lets try a more advance example with a calculator
```
function calculate(a,b){
    const add = a+b;
    const subtract = a-b;
    const multiply = a*b;
    const division = a/b;

    return [add, subtract, multiply, division];
}

const [add,subtract,multiply, divide] = calculate(4,7);
// Answer are: 11, -3, 28, 0.57
```
The new way of destructuring object is this:
```
Const vehicleOne = {
    brand: 'ford',
    model: 'mustang',
    type: 'car',
    year: 2011,
    color: 'red'
}
myVehicle(vehicleOne);

function myVehicle({type, color, brand, model}){
    const message =
    'my ' + type +' is a '+ color +' '+ brand + ' '+ model + '.';
}
```
We can even destructure deeply nested objects by referencing the nested object then using a colon and curly braces to again destructure the items needed from the nested object:
```
const vehicleOne = {
  brand: 'Ford',
  model: 'Mustang',
  type: 'car',
  year: 2021, 
  color: 'red',
  registration: {
    city: 'Houston',
    state: 'Texas',
    country: 'USA'
  }
}

myVehicle(vehicleOne)

function myVehicle({ model, registration: { state } }) {
  const message = 'My ' + model + ' is registered in ' + state + '.';
}
```
I also learned about the value of spread operators in react and the blessings that they provide us ...
### Spread operator 
```
const myVehicle = {
  brand: 'Ford',
  model: 'Mustang',
  color: 'red'
}

const updateMyVehicle = {
  type: 'car',
  year: 2021, 
  color: 'yellow'
}

const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}
```
### Modules
- they are the import and export of javascript used to break uo the code into seperate files
#### Exporting
- there are two types of exporting Named and Default
#### Named exporting
- there are two ways you can create named exports In-line individually or all at once on the bottom
### Examples
In-Line individually:

person.js
```
export const name = "Devun"
export const age = 24
```

all at once at the bottom:

person.js
```
const name = "Devun"
const age = 24
export {name, age}
```
#### Default Exports
You can only have one default export in a file
### Example
```
const message = () => {
  const name = "Jesse";
  const age = 40;
  return name + ' is ' + age + 'years old.';
};

export default message;
```
#### Import
- You can import modules into a file in two ways, based on if they are named exports or default exports.

- Named exports must be destructured using curly braces. Default exports do not.
### example
an import named export
```
import { name, age } from "./person.js";
```
A default export
```
import message from "./message.js";
```
## Ternary Operator
what is the ternary operator?
- it is a simplified conditional operator like if / else
- syntax:
`` 
condition ? <expression if true> : <expression if false>
``
# Learning points from API and connecting the backend 
## step 1
- the first thing we do is set up the backend, to do this we need, node.js, and express framework
- we will use Mongoose to connect the database, which is a JS library used to connect the server with the database
- in order to create a new project we must do the following
```
// this starts a new node.js project
npm init -y
//-------------------------------------------------------------
// next we install the dependencies:

npm install express mongoose cors
//-------------------------------------------------------------
// now we create a file name anyname.js in the root directory of your project.

const express = required('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// now set up the database connection using Mongoose
mongoose.connect('mongodb://localhost/myapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB');
});
//-------------------------------------------------------------
// lastly, set up the middleware:

app.use(cors());
app.use(express.json());

``` 
## step 2
- Creating API endpoints
```
//To get started, import the necessary dependencies and create a new router:

const express = require('express');
const router = express.Router();
 
// now that we have our router, we can start defining end points for handling crud operations

router.post('/resources', (req, res) => {
  res.json({ success: true });
});

// Once we have defined the endpoints, we need to use the router in the main .js file of your node.js project. Add the following code to your node.js project

const apiRouter = require('./routes/api');
app.use('/api', apiRouter);

```

## step 3
- create a frontend-react applicaton use create-react-app or react + vite
- then navagate to that folder and start running that server. 
## step 4
- Start making Api Calls
```
const getResources = async () => {
  const response = await fetch('/api/resources');
  const data = await response.json();
  return data;
}
```
## step 5
we now can update tje UI of our front end application to display data for example we can use the useState() Hook to store list of resources and update the ui when the list changed
```
import { useState, useEffect } from 'react';

function App() {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    const fetchResources = async () => {
      const data = await getResources();
      setResources(data);
    };

    fetchResources();
  }, []);

  const handleCreateResource = async (resourceData) => {
    const newResource = await createResource(resourceData);
    setResources([...resources, newResource]);
  };

  const handleDeleteResource = async (id) => {
    await deleteResource(id);
    setResources(resources.filter(resource => resource._id !== id));
  };

  return (
    <div>
      <h1>Resources</h1>
      <ResourceList resources={resources} onDelete={handleDeleteResource} />
      <ResourceForm onCreate={handleCreateResource} />
    </div>
  );
}
```


# Overview

[Software Demo Video](https://www.youtube.com/channel/UCKX2m6R7VQp6uIxoGsThxJA)

# Development Environment

{Describe the tools that you used to develop the software}
- Vs Code
- JavaScript
- HTML
- Developer Tools
- React Library

# Useful Websites

- This course is what i used to relearn and learn something new about javascript and its functionalities [W3 Schools](https://www.w3schools.com/react/)
- In order to learn more about backend connection i found this site[Connecting Frontend with Backend (MERN)](https://mayankt.hashnode.dev/connecting-frontend-with-backend-mern)

# Future Work

- I want to improve the page by making smaller components able to actually reuse components rather then a big page
- I want to figure out the benefit to react and just how it imporves web development.
- I also want to get some really great connectivity here
