import React from 'react'
import Contactcard from './Contactcard'
import { Col, Row } from 'react-bootstrap'

function View() {
  return (
    <>
      <Row className='container border border-dark p-3 align-items-center justify-content-center text-center mt-4 d-flex'>
        <Col lg={4} md={4} sm={12}>
          <Contactcard />
        </Col>
      </Row>
    </>
  )
}

export default View