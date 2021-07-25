# Esparta - React Developer Role

Hey Esparta! Here is my delivery. I did the to-do list, the logic array, and the logic distinct.

## My Todo List

The folder in this repo is: /my-todo-list

Check the release accessing the link: https://esparta-test.vercel.app/

### Overview

This to-do list app was built to be simple, stylish, and user-friendly.

This project, named My Todo List, has one goal: helping to organize your tasks like including updating, marking the task as done, or excluding. Making it easier to see the tasks to be done and those that have already been completed.

I hope you enjoy the experience.

### Details

I created this project with ReactJS.

I always start my projects by creating the HTML framework and CSS before writing any logic in JavaScript.

In this project, I planned to use the State Hook because it allows you to track changes that occur in our component. And a to-do list can change a lot.

For example:
* Adding new todos
* Changing the wording of existing todos
* Deleting todos
* Completing todos
* Un-completing todos

When using the useState we need to set two important values: getter and setter.

I used the map function to traverse the entire array and render each task item that is inside the array.

Then I proceeded to create and remove tasks, detecting if the "enter" or "backspace" key was pressed. If true, call a function for that action.
When deleting a task, a confirmation box for this action appears. 
Input field has the onChange event handler which allows you to find the value of that field changes, an event object is given, which allows you to find the value through event.target.value.

In order to mark the task as completed, I used the onClick handler in the todo__checkbox class, created the to-do completed class, and the onClick handler calls the toggle function.

I applied BEM when defining your CSS Design Patterns;

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Data Structure and SQL

Since I have no prior experience with databases I haven't done this test. Also, my current role is Front-end React developer.

## Logic Test

The folder in this repo is: /logic

### Running

#### `npm run build-run`

### Array

We need to return the unique (non-repeating) values in an array.

Let's think about this example: `const array = [1, 2, 2, 2]`;

The solution starts isolating the array's unique values into a variable. In the example, the only values are 1 and 2.

Then we need to know what is the each unique value's length. In the example, 1 is length 1 and 2 is length 3.

Then comes the catch: the description of the exercise asks for the return of an integer. But if all values are duplicated, the return is null. What if there is over one single value? The return must contain all these values in an array. In other words, we have three types of return: null, number and array.

So we save all these values in an array and return them according to the "gotcha" above. In the example, the function's return is `1`.

That's it!

### Distinct

This function must return all unique values in an array.

Since I already had this function `getUnique()` from the Logic Test Array, I just copied and pasted that on Distinct Challenge. So the solution filters the array according to this conditional and it must return its length.

Most of the heavy lifting here is done by the `Array.prototype.filter()` function. It creates a new array with all elements that pass the test implemented by the provided function.

So in an example like `const array = [1, 2, 2, 2]` the `solution()` will return `1` because there is only one value, the number 1, that is unique.

I added tests from -1000000 to 1000000.

### Euclidean

I tried to solve this challenge but I couldn't go so far.

## Need something else?

If you have questions or suggestions please let me know!

I hope this was easy to understand and I'd like start working with you!

Best,
Juliana
