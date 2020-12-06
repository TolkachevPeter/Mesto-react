import apiOptions from './utils.js'

class Api {
    constructor({ baseUrl, headers }) {
      this.baseUrl = baseUrl;
      this.headers = headers;
  
      this.profileUrl = '/users/me';
      this.cardsUrl = '/cards';
    }
    
    getProfileOwner() {
      return fetch(this.baseUrl + this.profileUrl, {
        method: 'GET',
        headers: this.headers
      })
      /*
        Можно лучше: проверка ответа сервера и преобразование из json
        дублируется во всех методах класса Api, лучше вынести в отдельный метод:
          _getResponseData(res) {
          if (!res.ok) {
            return Promise.reject(`Ошибка: ${res.status}`); 
          }
          return res.json();
          }
        Подчеркивание в начале имени метода говорит о том, что метод является приватным, т.е.
        не используется вне класса Api   
      */
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
    }

    getInitialCards() {
        return fetch(this.baseUrl + this.cardsUrl, {
          method: 'GET',
          headers: this.headers
        })
        .then(res => {
          if (res.ok) {
            return res.json();
          }
          return Promise.reject(`Ошибка: ${res.status}`);
        })
      }

    patchProfileOwner(name, about) {
      return fetch(this.baseUrl + this.profileUrl, {
        method: 'PATCH',
        headers: this.headers,
        body: JSON.stringify({
          name: name,
          about: about,
        })
      })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
    }

    addNewCard(newCard) {
      return fetch(this.baseUrl + this.cardsUrl), {
        method: 'PATCH',
        headers: this.headers,
        body: JSON.stringify({
          name: newCard.name,
          link: newCard.link,
        })
      }  
    }

    changeLikeStatus(id, isLiked) {
      return fetch(this.baseUrl + `cards/likes/${id}`), {
        method: `${isLiked ? 'PUT' : 'DELETE'}`,
        headers: this.headers
      }
    }

    deleteCard(id) {
      return fetch(this.baseUrl + `cards/${id}`), {
        method: 'DELETE',
        headers: this.headers
      }
    }

    updateAvatar(avatar) {
      return fetch(this.baseUrl + this.profileUrl + `/avatar`), {
        method: 'PATCH',
        headers: this.headers,
        body: JSON.stringify({
          avatar: avatar.url,
        })
      }
    }
}

const api = new Api(apiOptions);