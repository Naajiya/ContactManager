import React from 'react'
import Card from 'react-bootstrap/Card';


function Contactcard({contact}) {
  console.log(contact)
  return (
    <>
    <div className='m-2 d-flex border border-dark p-2 text-light bg-dark rounded'>
      <div className='p-3 pt-3 justif'>
      <i class="fa-solid fa-user-tie fa-2x"></i>
      
      </div>
       <Card className='bg-warning text-light' style={{width:'40vh'}}>
        
        <Card.Body>
        <Card.Title>{contact.name}</Card.Title>
        <Card.Text>
            {contact.phone}
          </Card.Text>
        </Card.Body>
      </Card>
      <div className='p-2 pt-4'>  
      <i class="fa-solid fa-trash fa-1x"></i>
      </div>
    </div>
    </>
  )
}

export default Contactcard