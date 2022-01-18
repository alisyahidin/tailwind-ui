import { ClassNames } from '@emotion/react'
import style from '../styles/components/button'

const getVariant = value => ({
  secondary: '.btn-secondary',
})[value] ?? null

const Button = ({ children, className = '', variant = 'primary', ...props }) => (
  <ClassNames>
    {({ cx, css }) => <button
      className={cx(
        css`${style['.btn']}`,
        getVariant(variant) ? css`${style[getVariant(variant)]}` : null,
        className)
      }
      {...props}
    >
      {children}
    </button>}
  </ClassNames>
)

export default Button