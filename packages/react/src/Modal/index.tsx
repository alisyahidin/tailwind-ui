import { useState, useImperativeHandle, forwardRef, HTMLAttributes, FC } from 'react'
import { ClassNames } from '@emotion/react'
import ModalBox from './Box'
// @ts-ignore
import style from '@alisyahidin/core/styles/components/modal'

type Props = {
  isOpen: boolean
} & HTMLAttributes<HTMLDivElement>

type ModalRef = {
  open: () => void,
  close: () => void,
}

const Modal: FC<Props> = forwardRef<ModalRef, Props>(({ isOpen, children, className, ...props }, ref) => {
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

// @ts-ignore
Modal.Box = ModalBox

export default Modal