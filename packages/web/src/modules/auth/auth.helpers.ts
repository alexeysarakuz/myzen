export const validateField = (type: string, value: string) => {
  let errors = [];
  switch (type) {
    case 'name':
      const namePattern = /^\w{2,15}$/g;
      if (value.length > 15) {
        errors.push('Name is too long. Max 15 characters');
      }
      if (value.length < 2) {
        errors.push('Name is too short. Min 2 characters');
      }
      if (!value.match(namePattern)) {
        errors.push('Name is invalid');
      }
      break;
    case 'email':
      const emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/g;
      if (value.length > 30) {
        errors.push('Email is invalid');
      }
      if (value.length < 5) {
        errors.push('Email is invalid');
      }
      if (!value.match(emailPattern)) {
        errors.push('Email is invalid');
      }
      break;
    case 'password':
      const passwordPattern = /^\w{2,20}$/g;
      if (value.length > 20) {
        errors.push('Password is too long. Max 20 characters');
      }
      if (value.length < 6) {
        errors.push('Password is too short. Min 6 characters');
      }
      if (!value.match(passwordPattern)) {
        errors.push('Password is invalid');
      }
      break;
  }

  return errors;
};
