const element = document.querySelectorAll(
    ".container .con-kado .elements .element"
  ),
  pk = document.querySelectorAll(".container .con-kado .elements .kotak"),
  psg = document.querySelectorAll(".container .con-kado .elements .segitiga"),
  container = document.querySelector(".container"),
  conKado = document.querySelector(".container .con-kado"),
  kado = document.querySelector(".container .con-kado .kado"),
  text = document.querySelector(".text h1"),
  tutup = document.querySelector(".container .con-kado .tutup");

//map
textDiv = [...text.textContent]
  .map(a => `<div class="abjad">${a}</div>`)
  .join("");
text.innerHTML = textDiv;
const textAnim = document.querySelectorAll(".abjad");
// con-kado click
let clk = 1,
  randColor = [
    "rgba(250, 128, 114, 0.835)",
    "rgba(105, 102, 253, 0.835)",
    "rgba(96, 226, 113, 0.835)",
    "rgba(249, 251, 89, 0.835)",
    "rgba(251, 89, 183, 0.835)",
    "rgba(251, 89, 89, 0.835)",
    "rgba(89, 246, 251, 0.835)",
    "rgba(237, 89, 251, 0.835)"
  ];
conKado.addEventListener("click", () => {
  kado.style.pointerEvents = "none";
  kado.style.cursor = "none";
  conKado.style.animation = "kocok";
  conKado.style.animationDuration = "0.4s";
  if (clk == 1) {
    clk++;
    setTimeout(() => {
      tutup.style.transform = "translate(0, -70vh)";
      container.style.backgroundColor = "white";
      setTimeout(() => {
        let inEl = 0,
          inPk = 0,
          inCl = 0,
          inPsg = 0,
          inTx = 0,
          aTx = [...textAnim],
          aEl = [...element],
          aPk = [...pk],
          aPsg = [...psg];
        setInterval(() => {
          if (inEl < aEl.length) {
            if (inEl % 2 == 0) {
              aEl[inEl].style.transform = `translate(${rand(40)}vw, -${rand(
                50
              )}vh`;
            } else {
              aEl[inEl].style.transform = `translate(-${rand(40)}vw, -${rand(
                50
              )}vh`;
            }
            inEl++;
          }
          if (inCl < aTx.length) {
            aTx[inCl].style.color = randColor[rand(randColor.length)];
            if (inCl > 5 && inCl < aTx.length - 5) {
              aTx[inCl].style.fontSize = "3rem";
              setTimeout(() => {
                aTx[inCl].style.fontSize = "2.7rem";
              }, 100);
            }
            inCl++;
          }
          if (inTx < aTx.length) {
            aTx[inTx].style.color = randColor[rand(randColor.length - 1)];
            aTx[inTx].style.animationPlayState = "running";
            aTx[inTx].style.fontSize = "2.7rem";
            aTx[inTx].style.opacity = "1";
            inTx++;
          }
          if (inPsg < aPsg.length) {
            aPsg[inPsg].style.transform = `scale(${rand(1.1)})`;
            inPsg++;
          }
          if (inPk < aPk.length) {
            aPk[inPk].style.transform = `scale(${rand(1.1)})`;
            inPk++;
          }
        }, 100);
        setInterval(() => {
          inCl = 0;
          inEl = 0;
          inPsg = 0;
          inPk = 0;
        }, 3000);
      }, 200);
    }, 800);
  }
});

function rand(n) {
  return Math.round(Math.random() * n + 1);
}
