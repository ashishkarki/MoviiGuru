import { ReactNode, useLayoutEffect, useState } from 'react'
import { createPortal } from 'react-dom'

interface PortalProps {
  /**
   * A react node object representing what should be rendered inside the portal.
   */
  children: ReactNode

  /**
   * the id of the container/wrapper that contains the portal
   * which in itself embeds the children above
   */
  wrapperElemId: string
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

const ReactPortal = ({
  children,
  wrapperElemId = 'react-portal-wrapper',
}: PortalProps) => {
  const [wrapperElem, setWrapperElem] = useState<HTMLElement | null>(null)

  /**
   * if useLayoutEffect is not used, the portal will not handle any
   * changes to the wrapperId property.
   * Unlike useEffect, useLayoutEffect is synchronous and is generally
   * preferred if there are direct changes on the DOM.
   */
  useLayoutEffect(() => {
    // check if wrapperId is provided and the wrapper container exists
    let localWrapperElem = document.getElementById(wrapperElemId)

    // flag to determine if we had to create a new wrapper and append it to DOM ourselves
    let isNewWrapper = false

    // if it doesn't exist, create it using the helper function
    if (!localWrapperElem) {
      localWrapperElem = createContainerAndAppendToBody(wrapperElemId)

      // since, we had to create wrapper manually, we need to set the flag
      isNewWrapper = true
    }

    setWrapperElem(localWrapperElem)

    // cleanup - specifically if we had to create a new wrapper
    return () => {
      if (isNewWrapper && localWrapperElem && localWrapperElem.parentNode) {
        localWrapperElem.parentNode.removeChild(localWrapperElem)
      }
    }
  }, [wrapperElemId])

  // wrapper element will be null on very first render
  if (wrapperElem == null) {
    return null
  }

  return createPortal(children, wrapperElem!)
}

export default ReactPortal
