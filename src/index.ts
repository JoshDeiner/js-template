import './env.ts'
import './styles.css'

function addToRoot() {
  document.addEventListener('DOMContentLoaded', function () {
    const root: HTMLElement | null = document.getElementById('root')

    // Create a new element
    const newElement = document.createElement('div')
    newElement.className = 'dynamic-content'
    newElement.textContent =
      'This content was added dynamically with JavaScript!'

    if (!root) {
      console.error('root of the dom tree does not exist')
    } else {
      root.appendChild(newElement)
    }
  })
}

addToRoot()
