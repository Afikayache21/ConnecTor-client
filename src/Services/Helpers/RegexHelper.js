//Regex Pattern
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const paswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;


//Helper functions
const validateEmail = (email) => emailRegex.test(email);
const validatePassword = (password) => passwordRegex.test(password);


//Exports
export {validateEmail, validatePassword}