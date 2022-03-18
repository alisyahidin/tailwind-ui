import { FC, HTMLAttributes } from 'react'
import { ClassNames } from '@emotion/react'
// @ts-ignore
import style from '@alisyahidin/core/components/alert'
// @ts-ignore
import ICCancel from '@alisyahidin/icon/ic_cancel'
// @ts-ignore
import ICCancel2 from '@alisyahidin/icon/ic_cancel2'

type Variant = 'success' | 'warning' | 'error'
type Close = 'show' | 'hide'

type Props = {
    variant: Variant,
    close: Close
} & HTMLAttributes<HTMLButtonElement>

const getVariant = (value: Variant) => ({
    success: '.alert-success',
    warning: '.alert-warning',
    error: '.alert-error'
})[value as Variant] ?? null

const Alert: FC<Props> = ({ children, className, variant = 'success', close = 'show', ...props }) => (
    <ClassNames>
        {({ cx, css }) => <div
            className={cx(
                className,
                css`${style['.alert']}`,
                getVariant(variant) ? css`${style[getVariant(variant)]}` : null
            )}
        >
            {children}
            {close === 'show' ? <div className='alert-icon'><ICCancel2 width={16} height={16} /></div> : null}
        </div>}
    </ClassNames>
)

export default Alert