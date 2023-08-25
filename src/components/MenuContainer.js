// import { useState } from 'react'
import React from 'react'
// import Modal from './Modal'

function MenuContainer({icon}) {

  // const [openModal, setOpenModal] = useState(false);

  return (
    <div className='iconContainer'
      // onClick={()=> {setOpenModal(true)}}
      >
      {icon}
      {/* {openModal && <Modal closeModal={setOpenModal}/>}  */}
    </div>
  )
}

export default MenuContainer
