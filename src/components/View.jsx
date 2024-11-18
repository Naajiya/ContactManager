import React, { useEffect, useState } from 'react'
import Contactcard from './Contactcard'
import { Col, Row } from 'react-bootstrap'
import { getContact } from '../services/allApi';


function View({ addContactResp }) {

  const [allContacts, setAllContact] = useState([])

  useEffect(() => {
    getAllContacts()
  }, [addContactResp])


  const getAllContacts = async () => {
    try {
      const result = await getContact()
      console.log(result.data)
      setAllContact(result.data)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <Row className='container border border-dark p-3 align-items-center justify-content-center text-center mt-4 d-flex'>

        {
          allContacts.length > 0 ?
          allContacts?.map(contact=>(
        <Col lg={4} md={4} sm={12}>
          <Contactcard contact={contact}/>
        </Col>
        ))
        :
        <div className='text-warning'>No Contacts</div>
        }

      </Row>
    </>
  )
}

export default View