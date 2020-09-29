document.addEventListener("DOMContentLoaded", function () {
  let email = document.querySelector(".form__user");
  let pass = document.querySelector(".form__pass");
  let button = document.querySelector(".form__button");

//

  button.addEventListener("click", function () {
    if (email.value !== "") {
      document.querySelector(".form__user--error").style.opacity = "0";
      fetch("https://svende-api-tolga.herokuapp.com/auth/token", {
        "method": "POST",
        "headers": {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        "body": `username=${email.value}&password=${pass.value}`
      })

        .then((response) => response.json())
        .then((data) => {
          if (data.token !== undefined) {
            sessionStorage.setItem("token", data.token);
          }
        })
        .catch((err) => console.log(err));
    } else {
        document.querySelector(".form__user--error").innerHTML = "Username cannot be blank"
        document.querySelector(".form__user--error").style.opacity = "1";
    };
    if (pass.value !== "") {
        document.querySelector(".form__pass--error").style.opacity = "0";
    } else {
        document.querySelector(".form__pass--error").innerHTML = "Password cannot be blank"
        document.querySelector(".form__pass--error").style.opacity = "1";
    };
  });
});
