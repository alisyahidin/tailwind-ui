import { FC, HTMLAttributes } from 'react'
import { ClassNames } from '@emotion/react'
// @ts-ignore
import style from '@alisyahidin/core/styles/components/button'

type Variant = 'secondary' | 'primary'

type Props = {
  variant: Variant
} & HTMLAttributes<HTMLButtonElement>

const getVariant = (value: Variant) => ({
  primary: '.btn-primary',
  secondary: '.btn-secondary',
})[value as Variant] ?? null

const Button: FC<Props> = ({ children, className, variant = 'primary', ...props }) => (
  <ClassNames>
    {({ cx, css }) => <button
      className={cx(
        className,
        css`${style['.btn']}`,
        getVariant(variant) ? css`${style[getVariant(variant)]}` : null,
      )}
      {...props}
    >
      {children}
    </button>}
  </ClassNames>
)

export default Button