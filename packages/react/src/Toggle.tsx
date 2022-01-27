import { FC, HTMLAttributes } from 'react'
import { ClassNames } from '@emotion/react'
// @ts-ignore
import style from '@alisyahidin/core/styles/components/toggle'

type Props = HTMLAttributes<HTMLInputElement>

const Toggle: FC<Props> = ({ className, ...props }) => <ClassNames>
  {({ cx, css }) => <input {...props} type="checkbox" className={cx(className, css`${style['.toggle']}`)} />}
</ClassNames>

export default Toggle
