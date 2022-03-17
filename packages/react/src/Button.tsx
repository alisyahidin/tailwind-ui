import { FC, HTMLAttributes } from 'react'
import { ClassNames } from '@emotion/react'
// @ts-ignore
import style from '@alisyahidin/core/components/button'
// @ts-ignore
import { ICCancel } from '@alisyahidin/icon'

type Variant = 'secondary' | 'primary' | 'alt'
type Size = 'sm' | 'md' | 'lg'

type Props = {
  variant: Variant
  size: Size
} & HTMLAttributes<HTMLButtonElement>

const getVariant = (value: Variant) => ({
  primary: '.btn-primary',
  secondary: '.btn-secondary',
  alt: '.btn-alt',
})[value as Variant] ?? null

const getSize = (value: Size) => ({
  sm: '.btn-sm',
  md: '.btn-md',
  lg: '.btn-lg'
})[value as Size] ?? null

const Button: FC<Props> = ({ children, className, variant = 'primary', size = 'md', ...props }) => (
  <ClassNames>
    {({ cx, css }) => <button
      className={cx(
        className,
        css`${style['.btn']}`,
        getVariant(variant) ? css`${style[getVariant(variant)]}` : null,
        getSize(size) ? css`${style[getSize(size)]}` : null
      )}
      {...props}
    >
      {children} <ICCancel />
    </button>}
  </ClassNames>
)

export default Button