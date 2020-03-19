###  Why would you use class component over function components (removing hooks from the question)?
Class components are often useful when dealing with state because they have helpful lifecycle methods that allow us to respond to changes in the application, and they also give us access to the instance of the component in memory.

Unlike function components, class components persist in memory between renderings, so we can assign attributes and values to the object representing the component using the `this` keyword, which will not cause the component to re-render, as it would when using `setState`.

### Name three lifecycle methods and their purposes.
1. `componentDidMount` fires after the component initially mounts to the DOM. During this phase, the DOM is accessible and can be modified. It is also a good time to perform network requests and other asynchronous tasks, so that the application's state will be updated after the request resolves.
 
2. `componentDidUpdate` fires immediately after the DOM is updated, but not on the initial render. This method allows us to compare the previous and current state or props between updates. It's a good time to perform asynchronous tasks if they are necessary, and also to perform any DOM operations.

3. `componentWillUnmount` fires before a component is unmounted. It's useful for performing any cleanup operations, like canceling network requests, timers, and subscriptions.

### What is the purpose of a custom hook?
Custom hooks are useful for abstracting logic from components, so that a reusable function can be included inside of a component instead of repeating the same logic throughout the application. When a custom hook invokes the `useState` function, it can implement stateful logic in a function component without having to call `useState` directly, so that the component can easily respond to events.

### Why is it important to test our apps?
Testing is important because it allows us to be confident that our application is operating as expected. When automated tests are properly implemented they will surface bugs faster than manual testing, and writing tests makes us think more about edge cases that might affect the user's experience. As an application grows, writing automated tests becomes increasingly necessary.