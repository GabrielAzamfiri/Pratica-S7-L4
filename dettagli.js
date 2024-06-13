const params = new URLSearchParams(window.location.search);
const pexelId = params.get("pexelId");
console.log(pexelId);

window.addEventListener("DOMContentLoaded", () => {
  fetch("https://api.pexels.com/v1/photos/" + pexelId, { headers: { Authorization: "6SiMMbZmMq653zKOBijPQwdWbjKzXk1a8jEwHGxCVbH6ePVhnv3errCk" } })
    .then(resp => resp.json())
    .then(picObj => {
      console.log(picObj);

      const container = document.querySelector("#img");
      container.style.backgroundColor = picObj.avg_color;
      console.log(container);
      const img = document.createElement("img");
      img.className = "w-100 mb-5";
      img.src = picObj.src.original;
      img.alt = picObj.alt;
      container.appendChild(img);
    });
});
