import './env.ts'
import appComponent from '../components/appComponent/appComponent'

function addToRoot() {
  document.addEventListener('DOMContentLoaded', function () {
    const root: HTMLElement | null = document.getElementById('root')

    // Create a new element
    const newElement = document.createElement('div')
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
appComponent()
