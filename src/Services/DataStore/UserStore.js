import { makeAutoObservable } from 'mobx';

class UserStore {
  mail;
 

  constructor() {
    makeAutoObservable(this);
  }

  setMail(mail) {
    this.mail = mail;
  } 

  reset() {
    this.mail = '';  
  }
}

const userStore = new UserStore();
export default userStore;
