import React from 'react'   
import { Button, Form } from 'react-bootstrap';       


function CategoryDropdown() {
  const url= 'https://v2.jokeapi.dev/joke/Programming'

  const fetchDataFunc= ()=>{
    
  }

  return (
    <div>
      <Form.Select aria-label="Default select example" className=''>
        <option>Select joke category</option>
        <option value="1">Programming</option>
        <option value="2">Misc</option>
        <option value="3">Dark</option>
        <option value="3">Pun</option>
        <option value="3">Spooky</option>
      </Form.Select>
      <br/>
      <Button onClick={fetchDataFunc}>Get a joke!</Button>
    </div>
  )
}

export default CategoryDropdown