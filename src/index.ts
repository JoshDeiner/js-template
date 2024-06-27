import './env.ts';
import './styles.css';

function addToRoot() {
  document.addEventListener('DOMContentLoaded', () => {
    const root:any = document.getElementById('root');
  
    // Create a new element
    const newElement = document.createElement('div');
    newElement.className = 'dynamic-content';
    newElement.textContent = 'This content was added dynamically with JavaScript!';
  
    // Append the new element to the root div
    root.appendChild(newElement);
  });
};

addToRoot();
