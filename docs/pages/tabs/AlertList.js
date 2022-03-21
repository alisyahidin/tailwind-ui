import React from 'react'
import Alert from '@alisyahidin/react/Alert'

const AlertList = () => {
    return (
        <>
            <h1 className='text-d1 mb-8'> Variant </h1>
            <div className='mb-32'>
                <div className='flex mb-4'>
                    <Alert variant='success'>Placeholder for message</Alert>
                </div>
                <div className='flex mb-4'>
                    <Alert variant='warning'>Placeholder for message</Alert>
                </div>
                <div className='flex mb-4'>
                    <Alert variant='error'>Placeholder for message</Alert>
                </div>
            </div>

            <h1 className='text-d1 mb-8'> Dismisable / Undismisable </h1>
            <div className='mb-32'>
                <div className='flex mb-4'>
                    <Alert>Placeholder for message</Alert>
                </div>
                <div className='flex mb-4'>
                    <Alert close='hide'>Placeholder for message</Alert>
                </div>
            </div>
        </>
    )
}

export default AlertList