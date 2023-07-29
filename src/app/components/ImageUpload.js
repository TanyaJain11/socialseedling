
import React, { useState } from 'react';

const ImageUploadForm = ({ onSubmit }) => {
  const [image, setImage] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = () => {
    onSubmit(image);
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleSubmit}>Upload</button>
    </div>
  );
};

export default ImageUploadForm;
