import React, { useEffect } from 'react'
import ReactPortal from '../Portal/ReactPortal'
import styles from './Modal.module.css'

interface ModalProps {
  children: React.ReactNode
  isOpen: boolean
  handleClose: () => void
}

const Modal = ({ children, isOpen, handleClose }: ModalProps) => {
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

  if (!isOpen) {
    return null
  }

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
      <div className={styles.modal}>
        <button onClick={handleClose} className={styles.closeBtn}>
          Close
        </button>

        <div className={styles.modalContent}>{children}</div>
      </div>
    </ReactPortal>
  )
}

export default Modal
