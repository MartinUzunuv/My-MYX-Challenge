import React from 'react'
import { useState } from 'react'

const Upload = () => {
  const [image, setImage] = useState(null);
  return (
    <div>
      <input type="file" accept="image/*" onChange={e => setImage(e.target.files[0])} />

      {image && (
        <>
          {/* Display the selected image on the page */}
          <img src={URL.createObjectURL(image)} alt="Selected" />

          {/* Or upload the selected image to a server */}
          <button onClick={() => uploadImage(image)}>Upload</button>
        </>
      )}
    </div>
  );

  function uploadImage(image) {
    // Create a FormData object to store the image data
    const data = new FormData();
    data.append('file', image);
  
    // Use fetch to send the image data to the server
    // fetch('/upload', {
    //   method: 'POST',
    //   body: data
    // });
  }

}

export default Upload