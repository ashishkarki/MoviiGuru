import React, { useEffect } from 'react'
import { CSSTransition } from 'react-transition-group'

import ReactPortal from '../Portal/ReactPortal'
import styles from './Modal.module.css'

interface ModalProps {
  children: React.ReactNode
  isOpen: boolean
  handleClose: () => void
  id?: string
  className?: string
  ariaHidden?: boolean
}

const Modal = ({
  children,
  isOpen,
  handleClose,
  id = 'defaultModal',
  className = '',
  ariaHidden = true,
}: ModalProps) => {
  // ref of CSSTransition to the node that needs transitioned // which in this case is the root div of this Modal component
  const nodeRef = React.useRef<HTMLDivElement | null>(null)

  /**
   * allow modal to be close when Escape key is pressed
   */
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClose()
      }
    }

    // listen to keydown event
    document.body.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.removeEventListener('keydown', handleKeyDown)
    }
  })

  /**
   * this creates a non-snappy transition, so we will use CSSTransition
   */
  //   if (!isOpen) {
  //     return null
  //   }

  /**
   * wrap the modal's return with ReactPortal so that the modal
   * is rendered outside the DOM hierarchy of the parent component
   * and within our specified provided container element
   *
   * The newly created container is appended as the last child of the body within the DOM
   *
   * Doing so will only modify the resulting HTML (stuff inside modal div below) and the DOm to append this as container. The parent-child relationship between this modal's parent and the modal itself is maintained.
   */
  return (
    <ReactPortal wrapperElemId="portal-modal-container">
      <CSSTransition
        in={isOpen}
        timeout={{ enter: 0, exit: 300 }}
        unmountOnExit
        classNames="modal"
        nodeRef={nodeRef}
      >
        <div
          id={id}
          className={`modal ${styles.modal} ${className}`}
          aria-hidden={ariaHidden}
          ref={nodeRef}
        >
          <button onClick={handleClose} className={styles.closeBtn}>
            Close
          </button>

          <div className={styles.modalContent}>{children}</div>
        </div>
      </CSSTransition>
    </ReactPortal>
  )
}
/**
 * More about the CSSTransition component:
 * https://reactcommunity.org/react-transition-group/css-transition
 * CSSTransition properties:
    => in: Boolean flag that triggers the entry or exit states
    => timeout: duration of the transition at each state (entry, exit, etc.)
    => unmountOnExit: unmounts the component after exiting
    => classNames: class name will be suffixed for each state (entry, exit, etc.) to give control over CSS customization
    => nodeRef: a React reference to the DOM element that needs to transition (in this case, the root div element of the Modal component)
 */

export default Modal
