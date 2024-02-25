# Learning Outcomes
## Types by Infrence
- Typescript knows the js language and will generate for you in many cases the types
## Defining Types
Typescript allows you to tell javascript what the type should be using an object with an inferred type:

`const user = {
  name: "Hayes",
  id: 0,
};`

Using an object we can do this:

`interface User {
  name: string;
  id: number;
}`

You then can declare a JS object that conforms to the shape of your new interface: 

` const user: User = {
  name: "Hayes",
  id: 0,
};` 

Noticed how I called the interface obeject of user above, any object that doesn't match the interface you have provided, Typescript will now warn you.

You may uses the interface declaration with clases as well: 

```
interface User{
name: string;
id: number;
}

class UserAccount {
  name: string;
  id: number;

constructor(name: string, id: number){

this.name = name;
    this.id = id;
  }

}
 
const user: User = new UserAccount("Murphy", 1);
```

You can use interfaces to annotate parameters and return values to functions:

`function deleteUser(user: User) {
  // ...
}`
 
`function getAdminUser(): User {
  //...
}`

## Composing Types
Examples of a Union Type:

- type MyBool = true | false;

- type WindowStates = "open" | "closed" | "minimized;

- type positiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9 |;

Unions provide a way to handle different types too:
```
function getLength (obj: string | string[]){

    return obj.length;
} 
```
## Table of Type of Variable:
| Type | Predicate |
| ----------- | ----------- |
| string | typeof s === "string" |
| number | typeof n === "number" |
| boolean | typeof b === "boolean" |
| undefined | typeof undefined === "undefined" |
| function | typeof f === "function" |
| array | Array.isArray(a) |

example of using typeof:
```
function wrapInArray (obj: string | string[]){
    if(typeof obj === "string"){
        return [obj];
    }
}
```
## Generics
```
type StringArray = Array<string>;
type NumberArray = Array<number>;
type ObjectWithNameArray = Array<{ name: string }>;
```

# Overview

During this week i decided to dive into typescript and learn just what it is. I have found out that type script in a way is an extension for javascript inorder to add variable types and used to deter logical errors from the system.
The software that i wrote was a drawing app that hasn't been successful yet but is on its way. The best thing about type script is you write it and then outut code that will translate it to javascript.


[Software Demo Video](https://www.youtube.com/channel/UCKX2m6R7VQp6uIxoGsThxJA)

# Development Environment

{Describe the tools that you used to develop the software}

{Describe the programming language that you used and any libraries.}

# Useful Websites

{Make a list of websites that you found helpful in this project}

- [Typescript.org](https://www.typescriptlang.org/)


# Future Work

{Make a list of things that you need to fix, improve, and add in the future.}

- make a functional drawing app
- spend more time on typescript and assesing it to the project as a whole.