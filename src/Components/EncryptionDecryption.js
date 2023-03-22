// To implement a secure solution for storing and transmitting client information using encryption and decryption in React:

// 1. Install a cryptography library (npm install crypto-js)
// 2. Define a secret key
// 3. Encrypt the data
// 4: Transmit the data  like this  =>    axios.post('/api/route', { data: encryptedData });
// 5: Decrypt the data




import React, { useState } from "react";
import crypto from "crypto-js";


const SECRET_KEY = 'my-secret-key';


// // Encryption function
// const encryptData = (data) => {
//   const cipherText = crypto.AES.encrypt( data, SECRET_KEY).toString();
//   return cipherText;
// };

// // Decryption function
// const decryptData = (cipherText) => {
//   const bytes = crypto.AES.decrypt(cipherText, SECRET_KEY);
//   const originalText = bytes.toString(crypto.enc.Utf8);
//   return originalText;
// };

const SecureForm = () => {
  const [formData, setFormData] = useState({});
  const [encryptedData, setEncryptedData] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const key = crypto.enc.Utf8.parse(SECRET_KEY);
    const encrypted = crypto.AES.encrypt(JSON.stringify(formData), key, {
      mode: crypto.mode.ECB,
    });
    setEncryptedData(encrypted.toString());
    // Send encryptedData to server
  };

  const handleDecrypt = () => {
    const decrypted = crypto.AES.decrypt(encryptedData, SECRET_KEY, {
      mode: crypto.mode.ECB,
    });
    setFormData(JSON.parse(decrypted.toString(crypto.enc.Utf8)));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" onChange={handleInputChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" onChange={handleInputChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
      <p>Encrypted Data: {encryptedData}</p>
      <button onClick={handleDecrypt}>Decrypt Data</button>
      <p>Decrypted Data:</p>
      <ul>
        <li>Name: {formData.name}</li>
        <li>Email: {formData.email}</li>
      </ul>
    </div>
  );
};

export default SecureForm;
