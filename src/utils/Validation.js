import { reactToast } from "./helper";

const validationName = (value, fieldName) => {
    if (!(value.length > 2)) {
      return `Must be minumun 3 characters`;
    }
    return "";
  };
  

const validationNotEmpty = (value, fieldName) => {
    if (!(value.length > 0)) {
      return `This input field is required`;
    }
    return "";
  };
  
  const validateEmail = (value) => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    if (!emailRegex.test(value)) {
      return "Please enter a valid email address.";
    }
    return "";
  };
  
  const validatePhone = (value) => {
    const numericPhone = value.replace(/[^0-9]/g, "");
    if (numericPhone.length !== 10) {
      return "Please enter a valid 10-digit numerical phone number.";
    }
    return "";
  };
  
  const validatePincode = (value) => {
    const numericPhone = value.replace(/[^0-9]/g, "");
    if (numericPhone.length !== 6) {
      return "Please enter a valid 6-digit numerical pincode.";
    }
    return "";
  };
  
  const validateNumber = (value) => {
    const numericPhone = value.replace(/[^0-9]/g, "");
    if (!numericPhone) {
      return "Please enter numric value.";
    }
    return "";
  };
  
  const validatePassword = (value) => {
    if (value.length < 8) {
      return "Password must be at least 8 characters long.";
    }
    const hasNumber = /[0-9]/.test(value);
    const hasSpecialCharacter = /[!@#$%^&*]/.test(value);
  
    if (!hasNumber || !hasSpecialCharacter) {
      return "Password must be contain at least one number and one special character";
    }
    return "";
  };

  
  const checkValidation = (item1 = [], item2 = [], item3 = [], item4 = [], item5 = [], item6 = [], dataDetail) => {
    const validationRules = [
      ...item1.map(item => validationNotEmpty(item.name)),
      ...item2.map(item => validationName(item.name)),
      ...item3.map(item => validateEmail(item.name)),
      ...item4.map(item => validatePhone(item.name)),
      ...item5.map(item => validatePincode(item.name)),
      ...item6.map(item => validatePassword(item.name)),
    ];
  
    const storeOrder = [
      ...item1.map(item => item.order),
      ...item2.map(item => item.order),
      ...item3.map(item => item.order),
      ...item4.map(item => item.order),
      ...item5.map(item => item.order),
      ...item6.map(item => item.order),
    ];
  
    const sortedItems = Array.from({ length: Math.max(...storeOrder) + 1 }, () => "");
  
    storeOrder.forEach((item, index) => {
      sortedItems[item] = validationRules[index];
    });
  
    const updateErrors = {};
    Object.keys(dataDetail).forEach((key, index) => {
      updateErrors[key] = sortedItems[index] || "";
    });
  
    return updateErrors;
  };

  const showValidationToastError = (messageType, errors) => {
   
    if (Array.isArray(errors) && errors.length > 0) {
      errors.forEach((messagesObj) => {
        const values = Object.values(messagesObj);
        values.forEach((message) => {
          reactToast(messageType, message)
        })
      })
    }
  }
  
  export {
    validationNotEmpty,
    validatePhone,
    validateEmail,
    validatePassword,
    validatePincode,
    validateNumber,
    // checkValidation,
    checkValidation,
    showValidationToastError,
  };
  