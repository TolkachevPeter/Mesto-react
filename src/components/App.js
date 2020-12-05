import React from 'react';
import Header from './Header'
import Main from './Main'
import Footer from './Footer'

class App extends React.Component {
  constructor(props) {
    super(props);
      this.state ={
        isEditAvatarPopupOpen : false,
        isEditProfilePopupOpen: false,
        isAddPalcePopupOpen: false,
      }
  }

    handleEditAvatarClick() {
    this.setState({
      isEditAvatarPopupOpen : true,
    })
    }
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
      <Main 
      onEditProfile={this.handleEditProfileClick}
      onAddPalce={this.handleAddPlaceClick}
      />
      <Footer />
  </div>
  );
};
}

export default App;
