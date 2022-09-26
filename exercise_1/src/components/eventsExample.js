import React, { useState } from "react"

export const EventExample = () => {

  const [firstName, setFirstName] = useState('')
  const [message, setMessage] = useState('')
  const [key, setKey] = useState('')

  const handleClick = (e) => {
    // e gives an event object
    // check the value of e using console.log(e)
    setMessage('Welcome to the world of events');
  }
  // triggered whenever the mouse moves
  const handleMouseMove = (e) => {
    setMessage('mouse is moving')
  }
  // to get value when an input field changes a value
  const handleChange = (e) => {
    setFirstName(e.target.value);
    setMessage(e.target.value)
  }

  // to get keyboard key code when an input field is pressed
  // it works with input and textarea
  const handleKeyPress = (e) => {
    setMessage(`${e.target.value} has been pressed and the keycode is` + e.charCode)
  }
  // Blurring happens when a mouse leave an input field
  const handleBlur = (e) => {
    setMessage('Input field has been blurred')
  }
  // This event triggers during a text copy
  const handleCopy = (e) => {
    setMessage('Using copy')

  }

  const handleSubmit = (e) => {
    setMessage('Using copy')

  }

  return (
    <div>
      <h1>Welcome to the World of Events</h1>

      <button onClick={handleClick}>Click Me</button>
      <button onMouseMove={handleMouseMove}>Move mouse on me</button>
      <p onCopy={handleCopy}>
        Check copy right permission by copying this text
      </p>

      <p style={{backgroundColor: 'grey', padding: '10px'}}>{message}</p>
      <label htmlFor=''> Test for onKeyPress Event: </label>
      <input type='text' onKeyPress={handleKeyPress} />
      <br />

      <label htmlFor=''> Test for onBlur Event: </label>
      <input type='text' onBlur={() => setMessage('Input field has been blurred')} />

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='firstName'>First Name: </label>
          <input
            onChange={handleChange}
            name='firstName'
            value={firstName}
          />
        </div>

        <div>
          <input type='submit' value='Submit' />
        </div>
      </form>
    </div>
  )
}