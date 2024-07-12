const i = document.getElementById("images");
console.log(i);

let id = (Math.random() * 6 + 1) * 10000;
id = Math.floor(id);
const fi = "https://thispersondoesnotexist.com/";
const ri = `https://whichfaceisreal.blob.core.windows.net/public/realimages/${id}.jpeg`;

const rnd = Math.random() > 0.5;
const arr = [rnd, !rnd];
const resultDiv = document.getElementById("result");
const again = document.createElement("button");
again.innerText = "Play Again";
again.onclick = function () {
  location.reload()
}

for (const x of arr) {
  const img1 = document.createElement("img");
  img1.src = x ? ri : fi;
  i.append(img1);

  img1.onclick = function () {
    resultDiv.innerHTML = x ? "Correct" : "Not Correct"
    imagesDiv.style.pointerEvents = 'none'
    resultDiv.append(again)
  }
}
