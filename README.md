
 - What is JSX, and why is it used?
 - 
  ans: JSX (JavaScript XML) is a syntax used in React that allows you to write HTML-like code inside JavaScript.

Why JSX is used:
1.Makes UI code easier to read and write
2.Allows HTML and JavaScript together
3.Helps React create UI elements faster

 - What is the difference between State and Props?
- ans:
      Props	                                       State
1.Passed from parent component	         1.Managed inside the component itself
2.Read-only (cannot be changed)	         2.Can be changed
3.Used to send data between components	 3.Used to store dynamic data





 - What is the useState hook, and how does it work?
 - 
- ans: useState is a React Hook used to store and update data in functional components.

How it works:

1.count → current state value
2.setCount → function to update the state
3.useState(0) → initial value
4.When state changes, React re-renders the component.

 - How can you share state between components in React?
 - ans:

There are three common ways:

1. Lifting State Up (Most common)
Move the state to the parent component and pass it to children using props.

Parent Component
   ↓ props
Child Component

2. Context API
Used when many components need the same data.

Example: Theme, User login data.

3. State Management Libraries
For large apps:
Redux
Zustand
Recoil



 - How is event handling done in React?
 - 
ans: React handles events using camelCase syntax and functions.

Common React events:

1.onClick
2.onChange
3.onSubmit
4.onMouseOver
