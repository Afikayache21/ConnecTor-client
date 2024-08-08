import axios from 'axios';
import { makeAutoObservable } from 'mobx';

class UserStore {
  mail;
  type;
  fName;
  lName;
  pNumber;
  lCode;
  professions;
  wArea;

  constructor() {
    makeAutoObservable(this);
  }

  setData(data) {
    try {
      if (data && data.user) {

        this.setMail(data.user.Mail);
        this.setType(data.user.UserType.TypeName);
        this.setfName(data.user.FirstName);
        this.setlName(data.user.LastName);
        this.setpNumber(data.user.PhoneNumber);
        console.log(this.fName, this.lName, this.pNumber);
        

        if (this.type === 'Constructor') {
          this.setlCode(data.user.UserType.licenceCode);
          this.setProfession(data.user.UserType.proffesions);
          this.setwArea(data.user.UserType.workingArea);
        }

      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  setlName(lName) {
    this.lName = lName;
  }

  setfName(fName) {
    this.fName = fName;
  }

  setpNumber(pNumber) {
    this.pNumber = pNumber;
  }

  setlCode(lCode) {
    this.lCode = lCode;
  }

  setProfession(profession) {
    this.professions = profession;
  }

  setwArea(wArea) {
    this.wArea = wArea;
  }

  setMail(mail) {
    this.mail = mail;
  }

  setType(type) {
    this.type = type;
  }

  reset() {
    this.mail = '';
    this.type = '';
    this.lName = '';
    this.fName = '';
    this.pNumber = '';
    this.lCode = '';
    this.professions = '';
    this.wArea = '';
  }
}

const userStore = new UserStore();
export default userStore;
