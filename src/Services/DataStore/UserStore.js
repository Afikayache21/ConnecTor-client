import axios from 'axios';
import { makeAutoObservable } from 'mobx';
//Request urls
const getUserTypeUrl = 'http://localhost:5000/api/users';
class UserStore {
  mail;
  type;


  constructor() {
    makeAutoObservable(this);
  }

  setMail(mail) {
    this.mail = mail;
  }
  async SetType() {
    try {
      const res = await axios.get(`${getUserTypeUrl}/${this.mail}/type`, {        
        headers: {
          'Content-Type': 'application/json',
        }
      });
      console.log(res.data);
      
      this.type = res.data;
    }
    catch (error) {
      console.error('Error fetching user type:', error);
    }
  }

  reset() {
    this.mail = '';
    this.type = '';
  }
}

const userStore = new UserStore();
export default userStore;
