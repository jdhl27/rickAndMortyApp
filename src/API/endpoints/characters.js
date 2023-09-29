import API from '../api.js';

class Character {
  GetCharacters = (params = {}) => {
    return new API('character/').get(params);
  };

  GetCharacter = (id, params = {}) => {
    return new API(`character/${id}`).get(params);
  };
}

export default new Character();
