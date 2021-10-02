(() => {
  const bgImg = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];
  const body = document.querySelector("body");

  function getRandum() {
    const radomNum = Math.floor(Math.random() * bgImg.length);
    return bgImg[radomNum];
  }

  function paintBgImg() {
    //   const img = document.createElement("img");
    //   img.src = `img/${getRandum()}`;
    //   img.classList.add("bgImg");
    //   document.body.appendChild(img);
    body.style.background = `url("img/${getRandum()}")`;
  }

  paintBgImg();
})();
