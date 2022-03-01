import { ReactNode } from 'react'
import { createPortal } from 'react-dom'

interface PortalProps {
  children: ReactNode
  wrapperId: string
}

/**
 * Reference:  https://blog.logrocket.com/build-modal-with-react-portals/
 */
// helper function to create a container div
const createContainerAndAppendToBody = (wrapperId: string) => {
  const container = document.createElement('div')
  container.setAttribute('id', wrapperId)

  document.body.appendChild(container)

  return container
}

const ReactPortal = ({ children, wrapperId }: PortalProps) => {
  // check if the wrapper container exists
  let container = document.getElementById(wrapperId)

  // if it doesn't exist, create it using the helper function
  if (!container) {
    container = createContainerAndAppendToBody(wrapperId)
  }

  return createPortal(children, container)
}

export default ReactPortal
