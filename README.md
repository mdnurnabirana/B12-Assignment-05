# JavaScript DOM and Event Basics

## 1. Difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll

- **getElementById**: Selects a single element by its unique ID attribute. Returns one element or null if not found.

- **getElementsByClassName**: Selects all elements with a specific class name. Returns a live HTMLCollection that updates automatically.

- **querySelector**: Returns the first element that matches a CSS selector. More flexible as it can use any CSS selector.

- **querySelectorAll**: Returns all elements that match a CSS selector. Returns a static NodeList that doesn't update automatically.

## 2. How to create and insert a new element

To create and insert a new element:
1. Use **document.createElement()** to create the element
2. Set any needed properties like textContent or attributes
3. Use **appendChild()** or **append()** to add it to the DOM

Example:
```
const newElement = document.createElement('div');
newElement.textContent = 'New content';
document.body.appendChild(newElement);
```

## 3. Event Bubbling

**Event bubbling** is the process where an event starts from the target element and propagates upward through its ancestor elements in the DOM hierarchy. This allows parent elements to handle events triggered on their children.

## 4. Event Delegation

**Event delegation** is a technique that uses event bubbling to handle events at a higher level in the DOM rather than directly on the target element. By attaching a single event listener to a parent element, you can handle events from multiple child elements, including dynamically added ones.

Example: Attaching a click handler to a list to handle clicks on any list item.

## 5. Difference between preventDefault() and stopPropagation()

- **preventDefault()**: Prevents the browser's default behavior associated with an event (like following a link or submitting a form).

- **stopPropagation()**: Stops the event from bubbling up the DOM tree, preventing parent elements from receiving the event.

- **Key difference**: preventDefault() stops the default action but allows event propagation, while stopPropagation() stops the event from moving through the DOM but doesn't prevent default behavior.
