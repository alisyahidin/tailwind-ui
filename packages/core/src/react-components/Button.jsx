import { ClassNames } from '@emotion/react'
import style from '../styles/components/button'

const Button = ({ children, className = '', ...props }) => (
  <ClassNames>
    {({ cx, css }) => <button className={cx(css`${style['.btn']}`, className)} {...props}>
      {children}
    </button>}
  </ClassNames>
)

export default Button