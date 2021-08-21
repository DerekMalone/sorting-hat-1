const errorMessage = (student) => {
  if (student) {
    document.querySelector('#error-message').innerHTML = '';
  } else {
    document.querySelector('#error-message').innerHTML = `
        <div style="color: red;margin-bottom: 10px;">
          <b>Please type a name</b>
        </div>`;
  }
};

export default errorMessage;
