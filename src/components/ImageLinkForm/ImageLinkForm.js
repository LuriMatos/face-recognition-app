import React from 'react';  
import './ImageLinkForm.css';

const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
  return (
    <div>
        <p className='f3 center'>
            {'Please, upload a photo and try! :)'}
        </p>
        <div className='center'>
            <div className='input-container pa4 br3 shadow-5 center bg-light-blue'>
                <input 
                  type='text' 
                  className='f4 pa2 w-70 center' 
                  onChange={onInputChange}/>
                <button 
                  className='w-30 grow f4 ph3 pv2 dib white bg-blue'
                  onClick={onButtonSubmit}>Detect</button>
            </div>
        </div>
    </div>
  );
}

export default ImageLinkForm;
