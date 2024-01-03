import React from 'react'   
import { Button, Form } from 'react-bootstrap';       
import JokeDisplay from './JokeDisplay';
import { useState, useEffect } from 'react';

function CategoryDropdown() {
  const [selected, setSelected]= useState(null)
  const url= `https://v2.jokeapi.dev/joke/Programming`
  const [loading, setLoading]= useState(true)
  const [error, setError]= useState(null)
  const [data,setData]= useState([])


  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setData(data)
        console.log(data)
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
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
      <Button>Get a joke!</Button>
      <br/>
      <br/>
      <JokeDisplay/>
    </div>
  )
}

export default CategoryDropdown