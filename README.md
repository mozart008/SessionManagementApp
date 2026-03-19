TypeScript & State Management Refactor

Status: 🚧 Work In Progress

This is a practice project focused on migrating a JavaScript React boilerplate to a fully typed TypeScript application with advanced state management.

Origin: This project started from a baseline boilerplate. My goal is to implement the core logic, type systems, and component architecture described below.

🎯 The Goal
The objective is to transform a static starting project into a functional Session Booking app using "Library-Grade" React patterns.

Current Task List:
[ ] Polymorphic Button: Create a component that switches between <button> and <Link> based on props.

[ ] Type-Safe Input: Build a reusable wrapper for <label> and <input>.

[ ] Imperative Modal: Implement a Modal using React Portals and useImperativeHandle.

[ ] Global State: Architect a Context + useReducer system for managing bookings.

🛠️ Technical Approaches I'm Implementing
Polymorphic Components (The Button)
I am practicing the Polymorphic Pattern here. The challenge is ensuring that TypeScript correctly identifies which props are valid depending on whether the component renders an anchor tag or a button.

Imperative APIs (The Modal)
Instead of just using a boolean isOpen prop, I am implementing an open() method exposed via forwardRef. This mimics how professional UI libraries (like Material UI or Headless UI) handle overlays.

Centralized State
I am moving away from "prop drilling" by using the Context API combined with useReducer. This allows for predictable state transitions as the booking logic grows in complexity.
