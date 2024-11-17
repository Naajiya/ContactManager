import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addContact } from '../services/allApi';


function Add() {

  const [contactDetail,setContactDetail]=useState({name:'',phone:''})
  console.log(contactDetail)
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAdd=async()=>{
    const {name,phone}=contactDetail;
    if(name && phone){
      console.log('good') 

      try{
        const result=await addContact(contactDetail)
        console.log(result);
        console.log(`result.data = ${result.data}`)
        handleClose()
      }catch(err){
        console.log(err)
      }

    }else{
      alert('enter all input fields')
    }
  }

  return (
    <>
      <div className='container bg-success p-3 text-light mt-5 d-flex align-items-center justify-content-center'>
        <div className='d-flex'>
          <h2 className='m-1'>Add New Contact</h2>
          <div className='m-2'><i onClick={handleShow} class="fa-solid fa-address-card  fa-2x"></i></div>
        </div>

        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Add Contact</Modal.Title>
          </Modal.Header>
          <Modal.Body>

            <FloatingLabel controlId="floatingInput" label="Name" className="mb-3">
              <Form.Control onChange={(e)=>setContactDetail({...contactDetail,name:e.target.value})} type="text" placeholder="Name" />
            </FloatingLabel>

            <FloatingLabel controlId="floatingInput" label="Phone Number" className="mb-3">
              <Form.Control onChange={(e)=>setContactDetail({...contactDetail,phone:e.target.value})} type="number" placeholder="Phone Number" />
            </FloatingLabel>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleAdd}>Save</Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  )
}

export default Add