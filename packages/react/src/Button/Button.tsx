import { FC, HTMLAttributes } from 'react'
import tw from 'twin.macro'

type Variant = 'secondary' | 'primary' | 'ghost' | 'success'

type Props = {
    variant: Variant
    outlined: boolean
} & HTMLAttributes<HTMLButtonElement>

const Button: FC<Props> = ({ children, variant = 'primary', outlined, ...props }) => (
    <button
        css={[
            tw`btn btn-primary`,
            variant === 'secondary' && tw`btn-secondary`,
            variant === 'success' && tw`btn-success`,
            variant === 'ghost' && tw`btn-ghost`,
            outlined && tw`btn-outline`,
            outlined && variant === 'primary' && tw`text-primary`,
            outlined && variant === 'secondary' && tw`text-secondary`,
            outlined && variant === 'success' && tw`text-green-500`,
        ]}
        {...props}
    >
        {console.log(tw`btn btn-primary`)}
        {children}
    </button>
)

export default Button