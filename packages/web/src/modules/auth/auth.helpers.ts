export const validateField = (type: string, value: string) => {
  let errors = [];
  switch (type) {
    case 'name':
      const namePattern = /^\w{2,15}$/g;
      if (value.length > 15) {
        errors.push('Name length is too long');
      }
      if (value.length < 2) {
        errors.push('Name length is too short');
      }
      if (!value.match(namePattern)) {
        errors.push('Name is invalid. Check it again');
      }
      break;
    case 'email':
      const emailPattern = /^\w{2,15}$/g;
      if (value.length > 15) {
        errors.push('Email length is too long');
      }
      if (value.length < 2) {
        errors.push('Email length is too short');
      }
      if (!value.match(emailPattern)) {
        errors.push('Email is invalid. Check it again');
      }
      break;
  }

  return errors;
};
