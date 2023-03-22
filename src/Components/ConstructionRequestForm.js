import React, { useState } from 'react';
import '../App.css'; // import CSS styles


function ConstructionRequestForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [projectDescription, setProjectDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Submit form data to server here
    console.log('Form submitted');
  };

  return (
    <div className="bacground_img">
      <h1 className='req_heading'>Request a Construction Service</h1>

      <div className="request-form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone:</label>
            <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="project-description">Project Description:</label>
            <textarea
              id="project-description"
              value={projectDescription}
              onChange={(e) => setProjectDescription(e.target.value)}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default ConstructionRequestForm;