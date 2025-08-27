1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans. getElementById: gets the first matched element which matches the id name.
getElementsByClassName: gets all the matched element which matches the class name.
querySelector: gets the first element that matches a CSS selector

2.How do you create and insert a new element into the DOM?
Ans. first create the element using document.createElement("tagname") , then adding it to another element using .append("tagname").

3.What is Event Bubbling and how does it work?
Ans. Event bubbling means when you click on a child element, the event first happens on that element and then moves up to its parents.

4.What is Event Delegation in JavaScript? Why is it useful?
Ans. Event delegation means putting one event listener on a parent and letting it handle events from its child elements.
It’s useful because we don’t need to add separate listeners to every child, which makes the code simpler and faster.

5.What is the difference between preventDefault() and stopPropagation() methods? 
Ans.preventDefault(): Stops the browser’s default action (like preventing form button to refresh the website).
stopPropagation(): Stops the event from bubbling up the DOM tree.
