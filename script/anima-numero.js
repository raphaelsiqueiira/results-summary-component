const numeros = document.querySelectorAll("[data-numero");

numeros.forEach((numero) => {
  const total = +numero.innerText;

  let start = 0;
  const timer = setInterval(() => {
    start++;
    numero.innerText = start;
    if (start > total) {
      clearInterval(timer);
    }
  }, 12);
});
