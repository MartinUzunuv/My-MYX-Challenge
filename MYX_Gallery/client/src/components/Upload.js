import React from 'react'
import { useState } from 'react'
import './Upload.css'

const Upload = () => {
  const [image, setImage] = useState(null);
  return (
    <div className='Upload'>
      <div className='ButtonSpace'>
       <input id='file-upload' type="file" accept="image/*" onChange={e => setImage(e.target.files[0])} />
       <br/>
        {image && <button onClick={() => uploadImage(image)}>Upload</button>}
      </div>

      {image && (
          <img className='UploadedImage' src={URL.createObjectURL(image)} alt="Selected" />
      )}
    </div>
  );

  function uploadImage(image) {
    const data = new FormData();
    data.append('file', image);
  
    // fetch('/uploadimage', {
    //   method: 'POST',
    //   body: data
    // });
  }

}

export default Upload