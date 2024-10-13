const validate = () => {
  const calcItem = document.querySelectorAll('input[type="text"].calc-item');
  const nameInput = document.querySelectorAll('input[name="user_name"]');
  const emailInput = document.querySelectorAll('input[name="user_email"]');
  const phoneInput = document.querySelectorAll('input[name="user_phone"]');
  const messageInput = document.querySelector('input[name="user_message"]');

  const nameValidate = () => {
    nameInput.forEach((input) => {
      input.addEventListener('blur', () => {
        input.value = input.value.replace(/[^а-яА-Я- ]+/g, '');
        input.value = input.value.replace(/ +/g, ' ');
        input.value = input.value.replace(/-+/g, '-');
        input.value = input.value.replace(/^[ -]+|[ -]+$/g, '');
        input.value = input.value.replace(
          /([а-яА-Я]{1})([а-яА-Я]*)/g,
          (match, $1, $2) => {
            return $1.toUpperCase() + $2.toLowerCase();
          }
        );
      });
    });
  };

  const emailValidate = () => {
    emailInput.forEach((input) => {
      input.addEventListener('blur', () => {
        input.value = input.value.replace(/[^@\-_.!~*'\w]+/, '');
        input.value = input.value.replace(/-+/g, '-');
        input.value = input.value.replace(/^[ -]+|[ -]+$/g, '');
      });
    });
  };

  const phoneValidate = () => {
    phoneInput.forEach((input) => {
      input.addEventListener('blur', () => {
        input.value = input.value.replace(/[^()\-\d]+/, '');
        input.value = input.value.replace(/-+/g, '-');
        input.value = input.value.replace(/^[ -]+|[ -]+$/g, '');
      });
    });
  };

  const messageValidate = () => {
    messageInput.addEventListener('blur', () => {
      messageInput.value = messageInput.value.replace(/[^а-яА-Я- ]+/g, '');
      messageInput.value = messageInput.value.replace(/ +/g, ' ');
      messageInput.value = messageInput.value.replace(/-+/g, '-');
      messageInput.value = messageInput.value.replace(/^[ -]+|[ -]+$/g, '');
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
