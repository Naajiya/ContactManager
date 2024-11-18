import React from 'react'
import Card from 'react-bootstrap/Card';
import { deletContact } from '../services/allApi';



function Contactcard({contact,setDeleteCard}) {
  console.log(contact)


  const RemoveContact=async (videoId)=>{
    try{
      const result = await deletContact(videoId)
      console.log(result)
      setDeleteCard(result.data)
    }catch(err){
      console.log(err)
    }
  }
  return (
    <>
    <div className='m-2 d-flex border border-success p-2 text-light bg-success rounded'>
    
      <div className='p-3 pt-3 justif'>
      <i class="fa-solid fa-user-tie fa-2x"></i>
      
      </div>
       <Card className='bg-light text-success' style={{width:'40vh'}}>
        
        <Card.Body>
        <Card.Title>{contact.name}</Card.Title>
        <Card.Text>
            {contact.phone}
          </Card.Text>
        </Card.Body>
      </Card>
      <div className='p-2 pt-4'>  
      <i onClick={()=>RemoveContact(contact.id)} class="fa-solid fa-trash fa-1x"></i>
      </div>
    </div>
    </>
  )
}

export default Contactcard