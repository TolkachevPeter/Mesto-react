import React from 'react';
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import PopupWithForm from './PopupWithForm';


class App extends React.Component {
  constructor(props) {
    super(props);
      this.state ={
        isEditAvatarPopupOpen : false,
        isEditProfilePopupOpen: false,
        isAddPalcePopupOpen: false,
        isOpen: false,
      }
  }

    handleEditAvatarClick() {
    this.setState({
      isEditAvatarPopupOpen : true,
      isOpen: true,
    })
    }
  handleEditProfileClick = () => {
      this.setState({
        isEditProfilePopupOpen: true,
        isOpen: true,
      })
  };
  handleAddPlaceClick = () => {
    this.setState({
      isAddPalcePopupOpen: true,
      isOpen: true,
    })
  };

  closeAllPopups = () => {
    this.setState({
      isEditAvatarPopupOpen : false,
      isEditProfilePopupOpen: false,
      isAddPalcePopupOpen: false,
      isOpen: false
    })
  }

  render() {
  return (
  <div className="root">
      <Header />
      <Main 
      onEditProfile={this.handleEditProfileClick}
      onAddPlace={this.handleAddPlaceClick}
      isOpen={this.state.isOpen}
      onClose={this.closeAllPopups}
      />
      <Footer />
  </div>
  );
};
}

export default App;
