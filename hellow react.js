// Import statements 
import React from 'react';
import ReactDOM from 'react-dom/client';

// Defining Functional Component 
function Hello(props) {
  return <h1>Hello GeeksforGeeks</h1>;
}

// Creating Root Element
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

// Render the component
root.render(<Hello />);
