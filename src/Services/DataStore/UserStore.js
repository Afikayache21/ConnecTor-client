import axios from 'axios';
import { makeAutoObservable } from 'mobx';
// import imageType from 'image-type';
const updateUserUrl = 'http://localhost:5000/api/users/'

class UserStore {
  id;
  mail;
  type;
  fName;
  lName;
  pNumber;
  lCode;
  professions;
  wArea;
  // ProfilePicture;

  constructor() {
    makeAutoObservable(this);
  }

  
  async UpdateUser() {
    try {
      await axios.put(`${updateUserUrl}${this.id}`, {
        Mail: this.mail,
        FirstName: this.fName,
        LastName: this.lName,
        PhoneNumber: this.pNumber,
        Professions: this.professions,
        WorkingArea: this.wArea,
        // ProfilePicture: this.ProfilePicture
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
          
      console.log("updated succsesfuly");
    }
    catch (error) {
      console.error('Error updateing data:', error);
    }
  }

  //#region Setters
  setData(data) {
    try {
      if (data && data.user) {
        this.setId(data.user._id);
        this.setMail(data.user.Mail);
        this.setType(data.user.UserType.TypeName);
        this.setfName(data.user.FirstName);
        this.setlName(data.user.LastName);
        this.setpNumber(data.user.PhoneNumber);
        // this.setProfilePicture(data.user.ProfilePicture);

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

  // setProfilePicture(base64Img) {
  //   if (base64Img) {
  //     try {
  //       // Decode Base64 string to binary data
  //       const binaryString = atob(base64Img);
  //       const len = binaryString.length;
  //       const buffer = new Uint8Array(len);

  //       for (let i = 0; i < len; i++) {
  //         buffer[i] = binaryString.charCodeAt(i);
  //       }

  //       // Detect the image type from buffer
  //       const imageTypeObj = imageType(buffer);
  //       if (imageTypeObj) {
  //         const imageType = imageTypeObj.mime.split('/')[1];
  //         const imageData = `data:image/${imageType};base64,${base64Img}`;
  //         this.ProfilePicture = imageData;
  //       } else {
  //         console.error('Unsupported image type');
  //         this.ProfilePicture = null;
  //       }
  //     } catch (error) {
  //       console.error('Error processing the image:', error);
  //       this.ProfilePicture = null;
  //     }
  //   } else {
  //     this.ProfilePicture = null; // Handle cases where no image is available
  //   }
  // }
  setId(id) {
    this.id = id;
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
  //#endregion
}

const userStore = new UserStore();
export default userStore;
