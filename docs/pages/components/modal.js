import { useRef } from 'react'
import { Button, Modal } from '@alisyahidin/react'

const ModalList = () => {
  const modalRef = useRef(null)
  return (
    <div>
      <h1 className='text-d1 mb-8'> Modal </h1>
      <Button onClick={() => modalRef.current.open()}>Open Modal</Button>
      <Modal ref={modalRef}>
        <Modal.Box>
          <h1 className="text-2xl">Holla</h1>
          <p className="my-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum necessitatibus quidem maxime tempore impedit vitae natus, praesentium earum soluta unde ea illo accusantium. Voluptate necessitatibus voluptates, saepe et vel sunt.</p>
          <div className='flex justify-end mt-4'>
            <Button onClick={() => modalRef.current.close()}>Close</Button>
          </div>
        </Modal.Box>
      </Modal>
    </div>
  )
}

export default ModalList