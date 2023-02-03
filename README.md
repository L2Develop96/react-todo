# General Info

> ## Real DOM & Virtual DOM - What's the difference?

- ### Real DOM

DOM stands for Document Object Model it is the structural representation of all nodes in an HTML document DOM represents the Ul of your applications.

When we make changes, the application will have to re-render everything (updated element + children). This is so expensive because re-rendering will happen for every dom update.

- ### Virtual DOM

Virtual DOM aka VDOM is the virtual representation of Real DOM. Think of it as a copy of the real DOM. It will be saved in the memory and synced with the Real DOM, this is what react uses (Observables). We call this process : Reconciliation which is using the diffing algorithm.

Advantages of VDOM :

- DOM manipulation is very easy
- No memory wastage
- Fast updates
- It is only virtual and not a real representation of the DOM.

Example:

let languages = ['JS', 'Java', 'Python']

Real DOM : let languages = ['JS', 'c#', 'Python']; -- Re-create (Re-render)

Virtual DOM : languages[1] = 'c#'; -- Update

---

> ## Context vs Redux - What's the difference?

- ## Context

Context is a fairly new concept in the world of React, it provides a way to pass data through the component tree without having to pass props down manually at every level.

Keywords to remember when we talk about context : Actions, Reducers & Dispatch.

- ## Redux

Redux is a JavaScript library that helps to manage data flow in a centralized manner. It stores the entire state of the application. This state can be accessed by any component without having to pass down props from one component to another.

Keywords to remember when we talk about redux : Actions, Reducers, Dispatch & Store.

- Actions: An event (Format JavaScript object) that sends data to the redux store, it contains a unique type & the data(payload).

- Reducer: A function that accepts the action type & action payload. It is responsible for updating the state (State is immutable, It will take the current state & return a completely new one).

- Dispatch: Dispatching an action will trigger the reducer to run.

- Store: Everything must be saved somewhere. And that is why we have the store. It is responsible for holding the application state. It is highly recommended to always use one store in any application that uses redux.

# Useful links

Avatars : https://avatars.dicebear.com
