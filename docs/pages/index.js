import { useRef } from 'react'
import Head from 'next/head'
import Button from '@alisyahidin/react/Button'
import Toggle from '@alisyahidin/react/Toggle'
// import Modal from '@alisyahidin/react/Modal'

export default function Home() {
  const modalRef = useRef(null)
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Button>Primary</Button>
      <Button className="bg-pink-500">Override</Button>
      <Button variant="secondary">Secondary</Button>
      <Button data-theme="newtheme" variant="secondary">Secondary</Button>
      <Toggle />
      <button className="btn">Overide CSS</button>
      <button className="btn bg-opacity-30">Opacity CSS</button>
      <input className="toggle" type="checkbox" />
      {/* <Button onClick={() => modalRef.current.open()}>Open Modal</Button> */}
      {/* <Modal ref={modalRef}>
        <Modal.Box>
          <h1 className="text-2xl">Holla</h1>
          <p className="my-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum necessitatibus quidem maxime tempore impedit vitae natus, praesentium earum soluta unde ea illo accusantium. Voluptate necessitatibus voluptates, saepe et vel sunt.</p>
          <div className='flex justify-end mt-4'>
            <Button onClick={() => modalRef.current.close()}>Close</Button>
          </div>
        </Modal.Box>
      </Modal> */}
    </div>
  )
}