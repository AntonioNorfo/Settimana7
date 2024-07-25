const apiKey = "mJqGAMnrPXKXA2Xvmzs01oAA4T6D4OpoB5dVRXv1xE4C0Pdpf4yX2raN";

document.getElementById("load-images").addEventListener("click", () => {
  const query = document.getElementById("search-query").value || "nature";
  fetchImages(query, "image-gallery");
});

document.getElementById("load-secondary-images").addEventListener("click", () => {
  const query = document.getElementById("search-query").value || "ocean";
  fetchImages(query, "image-gallery");
});

function fetchImages(query, galleryId) {
  const url = `https://api.pexels.com/v1/search?query=${query}`;
  fetch(url, {
    headers: {
      Authorization: apiKey,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const gallery = document.getElementById(galleryId);
      gallery.innerHTML = "";
      data.photos.forEach((photo) => {
        const card = document.createElement("div");
        card.classList.add("col-md-4", "mb-4", "image-card");
        card.innerHTML = `
                <div class="card h-100 shadow-sm">
                    <img src="${photo.src.medium}" class="card-img-top" alt="${photo.photographer}">
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title text-primary">${photo.photographer}</h5>
                        <p class="card-text text-muted">ID: ${photo.id}</p>
                        <button class="btn btn-danger mt-auto hide-button">Hide</button>
                    </div>
                </div>
            `;
        card.querySelector(".hide-button").addEventListener("click", () => {
          card.style.display = "none";
        });
        card.addEventListener("click", () => {
          showImageDetails(photo);
        });
        gallery.appendChild(card);
      });
    })
    .catch((error) => console.error("Error fetching images:", error));
}

function showImageDetails(photo) {
  const detailsPage = document.createElement("div");
  detailsPage.classList.add("container", "details-page", "py-5");
  detailsPage.innerHTML = `
        <div class="row justify-content-center">
            <div class="col-md-8">
                <button id="back-button" class="btn btn-secondary mb-4">Back</button>
                <img src="${photo.src.medium}" class="img-fluid mb-4" alt="${photo.photographer}">
                <h2 class="text-primary">${photo.photographer}</h2>
                <a href="${photo.photographer_url}" class="btn btn-primary mt-3" target="_blank">Visit Artist Page</a>
            </div>
        </div>
    `;
  document.body.innerHTML = "";
  document.body.appendChild(detailsPage);
  document.getElementById("back-button").addEventListener("click", () => {
    window.location.reload();
  });
}
