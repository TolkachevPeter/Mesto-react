import logo from './images/logo.svg';

function App() {
  return (
  <div className="root">
    <header className="header root__section">
      <img src={logo} alt="mesto logo" className="logo" />
    </header>
    <div className="profile root__section">
      <div className="user-info">
        <div className="user-info__photo"></div>
        <div className="user-info__data">
          <h1 className="user-info__name">Jaques Causteau</h1>
          <p className="user-info__job">Sailor, Researcher</p>
          <button className="button user-info__button-edit">Edit</button>
        </div>
        <button className="button user-info__button">+</button>
      </div>
    </div>
    <div className="places-list root__section">

    </div>
    <div className="popup" id='popup-new'>
      <div className="popup__content">
        <img src="<%=require(./images/close.svg)%>" alt="" className="popup__close" />
        <h3 className="popup__title">Новое место</h3>
        <form className="popup__form" name="new">
            <input id='new-name' type="text" name="name" className="popup__input popup__input_type_name" placeholder="Название" minlength="2" maxlength="30" required />
            <span id="error-new-name" className="error"></span>
            <input id='new-link' type="url" name="link" className="popup__input popup__input_type_link-url" placeholder="Ссылка на картинку" required />
            <span id="error-new-link" className="error"></span>
            <button type="submit"  className="button popup__button popup__button_plus popup__button_invalid" disabled='true'>+</button>
        </form>
        
      </div>
    </div>

    <div className="popup" id='popup-edit'>
      <div className="popup__content">
        <img src="<%=require(./images/close.svg)%>" alt="" className="popup__close" id='popup-edit__close' />
        <h3 className="popup__title">Редактировать профиль</h3>
        <form className="popup__form" name="edit">
            <input id='user-name' type="text" name="name" className="popup__input popup__input_type_name" placeholder="Имя" minlength="2" required />
            <span id="error-user-name" className="error"></span>
            <input id='about' type="text" name="about" className="popup__input" placeholder="О себе" minlength="2" required />
            <span id="error-about" className="error"></span>
            <button type="submit" className="button popup__button popup__button_save" disabled='false'>Сохранить</button>
        </form>
       
      </div>
    </div>

    <div className="popup" id='popup-image'>
      <div className="popup__container">
        <img src="<%=require(./images/close.svg)%>" alt='' className="popup__close popup__close_img" />
        <img src="" alt="" className="popup__image" />
      </div>
    </div>
    
  </div>
  );
}

export default App;
