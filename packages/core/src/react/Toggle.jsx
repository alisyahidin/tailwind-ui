import { ClassNames } from '@emotion/react'
import style from '../styles/components/toggle'

const Toggle = ({ className, ...props }) => <ClassNames>
  {({ cx, css }) => <input {...props} type="checkbox" className={className, cx(css`${style['.toggle']}`)} />}
</ClassNames>

export default Toggle
