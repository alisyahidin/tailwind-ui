import { FC } from 'react'
import { ClassNames } from '@emotion/react'
// @ts-ignore
import style from '@alisyahidin/core/components/modal'

const ModalBox: FC = ({ children }) => <ClassNames>
  {({ css }) => <div className={css`${style['.modal-box']}`}>{children}</div>}
</ClassNames>

export default ModalBox
