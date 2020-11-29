import React from 'react';

function ImagePopup() {

  return (
      <div>
    <div className="popup" id='popup-image'>
      <div className="popup__container">
        <img src="<%=require(./images/close.svg)%>" alt='' className="popup__close popup__close_img" />
        <img src="" alt="" className="popup__image" />
      </div>
    </div>
    </div>
  );
}

export default ImagePopup;