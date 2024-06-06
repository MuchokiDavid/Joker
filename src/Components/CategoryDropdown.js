import React from 'react'   
import { Button, Form } from 'react-bootstrap';       
import JokeDisplay from './JokeDisplay';
import { useState } from 'react';

function CategoryDropdown() {
  const [selected, setSelected]= useState(null)
  const url= `https://v2.jokeapi.dev/joke/${selected}`
  // const [loading, setLoading]= useState(true)
  // const [error, setError]= useState(null)
  const [data,setData]= useState([])


  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const response = await fetch(url);
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }

  //       const data = await response.json();
  //       setData(data)
  //       // console.log(data)
  //     } catch (error) {
  //       setError(error.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   }

  //   fetchData();
  // }, []);

  // if (loading) {
  //   return <p>Loading...</p>;
  // }

  // if (error) {
  //   return <p>Error: {error}</p>;
  // }

  const handleCategoryChange = (event) => {
    setSelected(event.target.value);
  }

  const handleSubmit= async()=> {
    const response = await fetch(`https://v2.jokeapi.dev/joke/${selected}`);
    const result = await response.json();
    setData(result);
  }


  return (
    <div>
      <Form.Select onChange={handleCategoryChange} value={selected} aria-label="Default select example" className=''>
        <option>Select joke category</option>
        <option value="Programming">Programming</option>
        <option value="Miscellaneous">Miscellaneous</option>
        <option value="Dark">Dark</option>
        <option value="Pun">Pun</option>
        <option value="Spooky">Spooky</option>
        <option value="Christmas"> Christmas</option>
      </Form.Select>
      <br/>
      <Button onClick={handleSubmit}>Get a joke!</Button>
      <br/>
      <br/>
      <JokeDisplay joke= {data.joke} setup= {data.setup} delivery= {data.delivery}/>
    </div>
  )
}

export default CategoryDropdown