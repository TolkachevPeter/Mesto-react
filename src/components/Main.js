import React from 'react';
import PopupWithForm from './PopupWithForm';
import PopupWithForm from './PopupWithForm';

function Main() {
    // function handleEditAvatarClick() {
    //     document.querySelector('#popup-edit').classList.toggle('popup_is-opened');
    // }
    function handleEditProfileClick() {
        document.querySelector('#popup-edit').classList.toggle('popup_is-opened');
    }
    function handleAddPlaceClick() {
        document.querySelector('#popup-new').classList.toggle('popup_is-opened');
    }

  return (
      <div>
    <div className="profile root__section">
      <div className="user-info">
        <div className="user-info__photo"></div>
        <div className="user-info__data">
          <h1 className="user-info__name">Jaques Causteau</h1>
          <p className="user-info__job">Sailor, Researcher</p>
          <button className="button user-info__button-edit" onClick={handleEditProfileClick}>Edit</button>
        </div>
        <button className="button user-info__button" onClick={handleAddPlaceClick}>+</button>
      </div>
    </div>
    <div className="places-list root__section">
    </div>
    
    </div>
  );
}

export default Main;
