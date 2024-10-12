const validate = () => {
  const calcItem = document.querySelectorAll('input[type="text"].calc-item');
  const nameInput = document.querySelectorAll('input[name="user_name"]');
  const emailInput = document.querySelectorAll('input[name="user_email"]');
  const phoneInput = document.querySelectorAll('input[name="user_phone"]');
  const messageInput = document.querySelector('input[name="user_message"]');

  const nameValidate = () => {
    nameInput.forEach((input) => {
      input.addEventListener('input', () => {
        input.value = input.value.replace(/[^а-яА-Я- ]/, '');
      });
    });
  };

  const emailValidate = () => {
    emailInput.forEach((input) => {
      input.addEventListener('input', () => {
        input.value = input.value.replace(/[^@\-_.!~*'\w]+/, '');
      });
    });
  };

  const phoneValidate = () => {
    phoneInput.forEach((input) => {
      input.addEventListener('input', () => {
        input.value = input.value.replace(/[^()\-\d]+/, '');
      });
    });
  };

  const messageValidate = () => {
    messageInput.addEventListener('input', () => {
      messageInput.value = messageInput.value.replace(/[^а-яА-Я- ]/, '');
    });
  };

  const calcValidate = () => {
    calcItem.forEach((input) => {
      input.addEventListener('input', (event) => {
        event.target.value = event.target.value.replace(/\D+/, '');
      });
    });
  };

  calcValidate();
  nameValidate();
  emailValidate();
  phoneValidate();
  messageValidate();
};

export default validate;
