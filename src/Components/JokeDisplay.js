import React from 'react'

function JokeDisplay({joke, setup, delivery}) {
  let content;

  if (joke) {
    // If 'joke' is present, display it directly
    content = (
      <div className='w-full'>
        <h1 className="display-4">Joke of the Day</h1>
        <br/>
        <p id='joke' className='text-4xl font-medium text-white'>{joke}</p>
      </div>
    );
  } else if (setup && delivery) {
    // If 'setup' and 'delivery' are present, combine and display them
    const combinedJoke = `${setup} ${delivery}`;
    content = (
      <div className='w-full'>
        <h1 className="display-4">Joke of the Day</h1>
        <br/>
        <p id='joke' className='text-4xl font-medium text-white'>{combinedJoke}</p>
      </div>
    );
  } else {
    // Handle the case where none of the expected props are present
    content = (
      <div className='w-full'>
        <p>Select options to view available jokes</p>
      </div>
    );
  }

  return content;
}

export default JokeDisplay