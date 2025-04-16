
  emailjs.init("T86xag_kYbxFLjtVf"); // Вставь сюда свой PUBLIC KEY

  document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm("service_x46n0rm", "template_gg7hi6y", this)
      .then(function () {
        alert("Сообщение успешно отправлено!");
        document.getElementById("sms").value = ""; // Очистить поле
      }, function (error) {
        alert("Ошибка при отправке: " + JSON.stringify(error));
      });
  });
