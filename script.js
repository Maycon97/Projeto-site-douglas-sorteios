function generateNumber() {
  const min = Math.ceil(document.querySelector(".input-min").value);

  const max = Math.floor(document.querySelector(".input-max").value);

  const result = Math.floor(Math.random() * (max - min + 1)) + min;

  Toastify({
    text: result,
    newWindow: true,
    duration: 8000,
    stopOnFocus: true,
    destination: "https://github.com/apvarun/toastify-js",
    gravity: "bottom", // `top` or `bottom`
    position: "center", // `left`, `center` or `right`
    style: {
      background: "green",
    },
    onClick: function () {}, // Callback after click
  }).showToast();
}
