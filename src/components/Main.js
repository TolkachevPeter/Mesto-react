import React from 'react';
import PopupWithForm from './PopupWithForm';
import api from '../utils/api';

function Main(props) {

  const {
    isOpen,
    onEditProfile,
    onAddPlace,
    onEditAvatar,
    onClose
  } = props;


  return (
      <div>
    <div className="profile root__section">
      <div className="user-info">
        <div className="user-info__photo"></div>
        <div className="user-info__data">
  <h1 className="user-info__name">{userName}</h1>
  <p className="user-info__job">{userDesciption}</p>
          <button className="button user-info__button-edit" onClick={onEditProfile}>Edit</button>
        </div>
        <button className="button user-info__button" onClick={onAddPlace}>+</button>
      </div>
    </div>
    <div className="places-list root__section">
    </div>
    <PopupWithForm
    isOpen={isOpen}
    onClose={onClose} />
    </div>
  );
}

export default Main;
