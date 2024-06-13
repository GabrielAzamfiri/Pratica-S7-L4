const params = new URLSearchParams(window.location.search);
const pexelId = params.get("pexelId");
console.log(pexelId);

window.addEventListener("DOMContentLoaded", () => {
  fetch("https://api.pexels.com/v1/photos/" + pexelId, { headers: { Authorization: "6SiMMbZmMq653zKOBijPQwdWbjKzXk1a8jEwHGxCVbH6ePVhnv3errCk" } })
    .then(resp => resp.json())
    .then(picObj => {
      console.log(picObj);

      const container = document.querySelector("#img");
      const section = document.querySelector("section");

      section.style.backgroundColor = picObj.avg_color;

      const img = document.createElement("img");
      img.className = "w-100 mb-5";
      img.src = picObj.src.original;
      img.alt = picObj.alt;
      const description = document.createElement("h3");
      description.className = "text-center mb-5";
      description.innerText = picObj.alt;

      const divBtn = document.createElement("div");
      divBtn.className = "d-flex justify-content-between";

      const photographerLink = document.createElement("a");
      photographerLink.href = picObj.photographer_url;
      photographerLink.innerText = "More info about " + picObj.photographer;
      photographerLink.className = "btn btn-primary mb-3 fs-5 border border-dark";
      const home = document.createElement("a");
      home.href = "./pexels-start.html";
      home.innerText = "Home";
      home.className = "btn btn-primary mb-3 fs-5 border border-dark ";
      divBtn.append(photographerLink, home);
      container.append(img, description, divBtn);
    });
});
