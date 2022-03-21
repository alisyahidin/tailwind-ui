import { FC, HTMLAttributes } from 'react'
import { ClassNames } from '@emotion/react'
// @ts-ignore
import style from '@alisyahidin/core/components/alert'
// @ts-ignore
import IcCancel from '@alisyahidin/icon/IcCancel'

type Variant = 'success' | 'warning' | 'error'
type Close = 'show' | 'hide'
type Icon = true | false

type Props = {
    variant: Variant,
    close: Close
    icon: Icon
} & HTMLAttributes<HTMLButtonElement>

const getVariant = (value: Variant) => ({
    success: '.alert-success',
    warning: '.alert-warning',
    error: '.alert-error'
})[value as Variant] ?? null

const Alert: FC<Props> = ({ children, className, variant = 'success', close = 'show', icon = true, ...props }) => (
    <ClassNames>
        {({ cx, css }) => <div
            className={cx(
                className,
                css`${style['.alert']}`,
                getVariant(variant) ? css`${style[getVariant(variant)]}` : null
            )}
        >
            {icon !== false ? <div className='alert-icon'></div> : null}
            <div className='alert-info'>
                {children}
            </div>
            {close === 'show' ? <div className='alert-close'></div> : null}
        </div>}
    </ClassNames>
)

export default Alert