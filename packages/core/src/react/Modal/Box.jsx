import { ClassNames } from '@emotion/react'
import style from './../../styles/components/modal'

const ModalBox = ({ children }) => <ClassNames>
  {({ css }) => <div className={css`${style['.modal-box']}`}>{children}</div>}
</ClassNames>

export default ModalBox;
