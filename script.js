let toggleMode = () => {
  const html = document.documentElement;
  html.classList.toggle("light");

  const img = document.querySelector("#profile img");

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.jpg");
    img.setAttribute("alt", "Github Avatar of Victoria");
  } else {
    img.setAttribute("src", "https://github.com/victoriamnx.png");
    img.setAttribute("alt", "Github Avatar of Victoria");
  }
};
