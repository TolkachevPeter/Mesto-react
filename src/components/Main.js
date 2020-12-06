import React from 'react';
import PopupWithForm from './PopupWithForm';
import api from '../utils/api';
import Card from './Card';


function Main(props) {

  const {
    isOpen,
    onEditProfile,
    onAddPlace,
    onEditAvatar,
    onClose
  } = props;

  const [state, setState] = React.useState({ userName: '', userDesciption: '' });
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api
    .getProfileOwner()
    .then((data) => {
      setState({
        userName: data.name,
        userDesciption: data.about,
      })
    })
    .catch((err) => {
      console.log(err);
    })
  }, [])

  React.useEffect(() => {
    api
    .getInitialCards()
    .then((cardData) => {
      setCards(cardData)
    })
    .catch((err) => {
      console.log(err);
    })
  }, [])
console.log(cards)
  return (
      <div>
    <div className="profile root__section">
      <div className="user-info">
        <div className="user-info__photo"></div>
        <div className="user-info__data">
  <h1 className="user-info__name">{state.userName}</h1>
  <p className="user-info__job">{state.userDesciption}</p>
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
    {cards.map((card) =>(
    <Card
    key={card._id}
    card={card}
    />
      ))}

    </div>
  );
}

export default Main;
