


### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

1 No Answer: 

getElementById(id): Returns the single element with the specified id fast can be called only on document.
getElementsByClassName(cls): Returns a live HTMLCollection of all elements with that class callable on document or any Element.
querySelector(sel): Returns the first element matching a full CSS selector callable on document or any Element.
querySelectorAll(sel): Returns a static NodeList of all elements matching the CSS selector supports forEach.


2. How do you **create and insert a new element into the DOM**?

2 No Answer: 

Create a node with document.createElement ('tag') then set properties with textContent,className,setAttribute.
Select the container and insert with append or prepend use before,after for siblings, and insertBefore for a specific position.


3. What is **Event Bubbling** and how does it work?

3 No Answer: 

Event bubbling is when an event occurs on the target node and then propagates upward from the target to its parents then to the document and finally to window. By default listeners run in this bubbling phase event.Target is where the event began while event.currentTarget is the node whose listener is executing. Use event.stopPropagation() to halt this propagation.


4. What is **Event Delegation** in JavaScript? Why is it useful?

4 No Answer:

Event delegation is placing a single listener on the parent instead of separate listeners on many children then during bubbling using e.target/closest() to detect which child triggered the event and handle it.


5. What is the difference between **preventDefault() and stopPropagation()** methods?

5 No Answer:

preventDefault() stops the browser’s default behavior such as link navigation or form submission but it does not stop event capturing/bubbling.
stopPropagation() stops the event from propagating (capturing/bubbling) but it does not block the default behavior.




