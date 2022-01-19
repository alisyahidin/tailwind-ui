import { ClassNames } from '@emotion/react'
import style from '../styles/components/toggle'

const Toggle = ({ className, ...props }) => <ClassNames>
  {({ cx, css }) => <input {...props} type="checkbox" className={cx(css`${style['.toggle']}`, className)} />}
</ClassNames>

export default Toggle
