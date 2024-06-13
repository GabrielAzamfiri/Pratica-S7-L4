// adi kay: 6SiMMbZmMq653zKOBijPQwdWbjKzXk1a8jEwHGxCVbH6ePVhnv3errCk

window.addEventListener("DOMContentLoaded", function () {
  const loadImg = this.document.querySelector(".btn-primary");
  const loadSecImg = this.document.querySelector(".btn-secondary");
  const urlCat = "https://api.pexels.com/v1/search?query=cat";
  const urlDog = "https://api.pexels.com/v1/search?query=dog";
  const url = "";
  loadImg.addEventListener("click", () => (url = urlCat));

  console.log(url);
  fetch(urlDog, { headers: { Authorization: "6SiMMbZmMq653zKOBijPQwdWbjKzXk1a8jEwHGxCVbH6ePVhnv3errCk" } })
    .then(resp => {
      if (resp.ok) {
        // restituiamo il dato convertito in array da JSON
        return resp.json();
      } else {
        throw new Error("Errore nel reperimento dei dati");
      }
    })
    .then(arrObj => {
      // otteniamo l'array come parametro appointments
      // qui dentro ci saremo nel momento esatto in cui avremo ricevuto il dato,
      // è il punto giusto per fare tutta la dom manipulation che serve
      console.log(arrObj);

      const row = document.querySelector("#containerPhotos");

      arrObj.photos.forEach(photo => {
        const col = this.document.createElement("div");
        col.className = "col-md-4";
        const card = document.createElement("div");
        card.className = "card mb-4 shadow-sm";
        const img = document.createElement("img");
        img.className = "bd-placeholder-img card-img-top";
        img.setAttribute("src", photo.src.original);
        const cardBody = document.createElement("div");
        cardBody.className = "card-body";
        const h5 = document.createElement("h5");
        h5.innerText = photo.photographer;
        const p = document.createElement("p");
        p.innerText = photo.alt;
        const divFlex = document.createElement("div");
        divFlex.className = "d-flex justify-content-between align-items-center";
        const btnGroup = document.createElement("div");
        btnGroup.className = "btn-group";
        const btnView = document.createElement("button");
        btnView.type = "button";
        btnView.className = "btn btn-sm btn-outline-secondary";
        btnView.innerText = "View";
        const btnEdit = document.createElement("button");
        btnEdit.type = "button";
        btnEdit.className = "btn btn-sm btn-outline-secondary";
        btnEdit.innerText = "Edit";
        btnGroup.append(btnView, btnEdit);
        const small = document.createElement("small");
        small.className = "text-muted";
        small.innerText = "9 mins";
        divFlex.append(btnGroup, small);
        cardBody.append(h5, p, divFlex);
        card.append(img, cardBody);
        col.append(card);
        row.append(col);
      });
    })
    .catch(err => console.log(err));
});
