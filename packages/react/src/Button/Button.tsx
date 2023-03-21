import { styled } from '@slicknode/stylemapper';

const Button = styled('button', 'btn', {
    variants: {
        variant: {
            primary: 'btn-primary',
            secondary: 'btn-secondary',
            ghost: 'btn-ghost',
            success: 'btn-success',
        },
        outline: {
            true: 'btn-outline',
        }
    }
});

export default Button;