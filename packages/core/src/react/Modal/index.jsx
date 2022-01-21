import { useState, useImperativeHandle, forwardRef } from 'react'
import { ClassNames } from '@emotion/react'
import style from './../../styles/components/modal'
import ModalBox from './Box'

const Modal = forwardRef(({ isOpen, children, className, ...props }, ref) => {
  const [openModal, setOpenModal] = useState(isOpen)

  useImperativeHandle(ref, () => ({
    open: () => setOpenModal(true),
    close: () => setOpenModal(false),
  }))

  return <ClassNames>
    {({ cx, css }) =>
      <div
        className={cx(
          className,
          css`${style['.modal']}`,
          openModal ? css`${style['.modal-open']}` : css`${style['.modal-close']}`
        )}
        {...props}
      >
        {children}
      </div>}
  </ClassNames>
})

Modal.Box = ModalBox

export default Modal