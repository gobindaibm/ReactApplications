
import React from 'react'

const ContactUs = () => {
  return (
    <div className='contact'>
        <form className='form'>
            <h2>Contact Form</h2>
            <div className='input-box'>
                <label>Full Name</label>
                <input type="text" className="field" placeholder='Enter your name' required />
            </div>
            <div className='input-box'>
                <label>Email</label>
                <input type="email" className='field' placeholder='Enter your email' required />
            </div>
            <div className='input-box'>
                <label>Your message</label>
                <textarea type="text" className='field message' placeholder='Enter your message' required />
            </div>
            <div className='btn-container'>
                <button className= "button" type='submit'>Send message</button>
            </div>
            
        </form>
    </div>
  )
}

export default ContactUs;