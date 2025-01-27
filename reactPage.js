// Define a simple React page component
const ReactPage = () => {
    return React.createElement(
      'div',
      null,
      React.createElement('h2', null, 'Welcome to the React Page!'),
      React.createElement('p', null, 'This page is dynamically rendered using React.')
    );
  };
  
  // Button click handler
  document.getElementById('go-to-react').addEventListener('click', () => {
    // Show the React container
    const reactContainer = document.getElementById('react-container');
    reactContainer.style.display = 'block';
  
    // Render the React component into the container
    ReactDOM.render(React.createElement(ReactPage), reactContainer);
  
    // Optionally hide the button after navigation
    document.getElementById('go-to-react').style.display = 'none';
  });
  