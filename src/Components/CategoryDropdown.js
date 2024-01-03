import React from 'react'   
import { Button } from 'react-bootstrap';                       

function CategoryDropdown() {
  const url= 'https://v2.jokeapi.dev/joke/Programming'

  const fetchDataFunc= ()=>{
    
  }

  return (
    <div>
      <Button onClick={fetchDataFunc}>Get a joke!</Button>
    </div>
  )
}

export default CategoryDropdown