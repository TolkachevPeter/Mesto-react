import React from 'react';
import Header from './Header'
import Main from './Main'
import Footer from './Footer'

class App extends React.Component {
      //handleEditAvatarClick() {
    //     document.querySelector('#popup-edit').classList.toggle('popup_is-opened');
    // }
  handleEditProfileClick = () => {
      this.setState({
        isEditProfilePopupOpen: true,
      })
  };
  handleAddPlaceClick = () => {
    this.setState({
      isAddPalcePopupOpen: true,
    })
  };

  render() {
  return (
  <div className="root">
      <Header />
      <Main />
      <Footer />
  </div>
  );
};
}

export default App;
