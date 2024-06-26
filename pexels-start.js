// adi kay: 6SiMMbZmMq653zKOBijPQwdWbjKzXk1a8jEwHGxCVbH6ePVhnv3errCk

window.addEventListener("DOMContentLoaded", function () {
  const loadPrimImg = this.document.querySelector(".btn-primary");
  const loadSecImg = this.document.querySelector(".btn-secondary");
  const url = "https://api.pexels.com/v1/search?query=";
  const searchQuery = document.getElementById("searchQuery");
  searchQuery.addEventListener("change", function () {
    let info = searchQuery.value;
    loadImg(info);
  });
  loadPrimImg.addEventListener("click", event => {
    event.preventDefault();
    let info = "dog";
    loadImg(info);
  });
  loadSecImg.addEventListener("click", event => {
    event.preventDefault();
    let info = "cat";
    loadImg(info);
  });
  function loadImg(info) {
    const row = document.querySelector("#containerPhotos");
    row.innerHTML = "";
    fetch(url + info, { headers: { Authorization: "6SiMMbZmMq653zKOBijPQwdWbjKzXk1a8jEwHGxCVbH6ePVhnv3errCk" } })
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

        arrObj.photos.forEach(photo => {
          const col = this.document.createElement("div");
          col.className = "col-md-4";
          const card = document.createElement("div");
          card.className = "card mb-4 shadow-sm";
          const img = document.createElement("img");
          img.className = "bd-placeholder-img card-img-top";
          img.setAttribute("src", photo.src.original);
          img.addEventListener("click", () => {
            window.location.assign("./dettagli.html?pexelId=" + photo.id);
          });

          const cardBody = document.createElement("div");
          cardBody.className = "card-body";
          const h5 = document.createElement("h5");
          h5.innerText = photo.photographer;
          const p = document.createElement("p");
          p.innerText = photo.alt;
          p.addEventListener("click", () => {
            window.location.assign("./dettagli.html?pexelId=" + photo.id);
          });
          const divFlex = document.createElement("div");
          divFlex.className = "d-flex justify-content-between align-items-center";
          const btnGroup = document.createElement("div");
          btnGroup.className = "btn-group";
          const btnView = document.createElement("button");
          btnView.type = "button";
          btnView.className = "btn btn-sm btn-outline-secondary";
          btnView.innerText = "View";
          const btnHide = document.createElement("button");
          btnHide.type = "button";
          btnHide.className = "btn btn-sm btn-outline-secondary";
          btnHide.innerText = "Hide";
          btnHide.addEventListener("click", event => {
            event.preventDefault();
            col.remove();
          });

          btnGroup.append(btnView, btnHide);
          const small = document.createElement("small");
          small.className = "text-muted";
          small.innerText = photo.id;
          divFlex.append(btnGroup, small);
          cardBody.append(h5, p, divFlex);
          card.append(img, cardBody);
          col.append(card);
          row.append(col);
        });
      })
      .catch(err => console.log(err));
  }
});
