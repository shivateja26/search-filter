
<!-- 
Search Filter with useEffect
Description:
You are building a search filter feature that dynamically filters a list of products as the user types in a search input. The list should be filtered in real-time based on the search term entered by the user, and the filtered results should be displayed below the search input.

Instructions:

Create a search input field and a list of products (with attributes like id, title, and description).
Use useEffect to filter the list of products whenever the user types something in the search input.
Show the filtered list below the search input, updating the displayed products in real-time as the user types.
Ensure the filtering logic doesn’t trigger on every keystroke but only after the user stops typing for a brief moment (e.g., debounce the input to trigger filtering after 500ms of inactivity).
Requirements:

Use useEffect to filter the list based on the search term.
Implement debouncing (using setTimeout and clearTimeout) to trigger the filtering only after the user stops typing for a brief moment.
Ensure that the list of products updates without any performance issues as the user types. -->