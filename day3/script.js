const coverBook = function () {
  fetch("https://striveschool-api.herokuapp.com/books")
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Error Error Error");
      }
    })
    .then((bookData) => {
      const firstBook = bookData[0];
      const secondBook = bookData[1];
      const thirdBook = bookData[2];
      const fourthBook = bookData[3];
      const fifthBook = bookData[4];
      const sixthBook = bookData[5];
      const seventhBook = bookData[6];
      const eighthBook = bookData[7];
      const ninthBook = bookData[8];
      const tenthBook = bookData[9];
      const eleventhBook = bookData[10];
      const twelfthBook = bookData[11];

      document.getElementById("img1").src = firstBook.img;
      document.getElementById("title1").innerText = firstBook.title;
      document.getElementById("price1").innerText = firstBook.price + " €";

      document.getElementById("img2").src = secondBook.img;
      document.getElementById("title2").innerText = secondBook.title;
      document.getElementById("price2").innerText = secondBook.price + " €";

      document.getElementById("img3").src = thirdBook.img;
      document.getElementById("title3").innerText = thirdBook.title;
      document.getElementById("price3").innerText = thirdBook.price + " €";

      document.getElementById("img4").src = fourthBook.img;
      document.getElementById("title4").innerText = fourthBook.title;
      document.getElementById("price4").innerText = fourthBook.price + " €";

      document.getElementById("img5").src = fifthBook.img;
      document.getElementById("title5").innerText = fifthBook.title;
      document.getElementById("price5").innerText = fifthBook.price + " €";

      document.getElementById("img6").src = sixthBook.img;
      document.getElementById("title6").innerText = sixthBook.title;
      document.getElementById("price6").innerText = sixthBook.price + " €";

      document.getElementById("img7").src = seventhBook.img;
      document.getElementById("title7").innerText = seventhBook.title;
      document.getElementById("price7").innerText = seventhBook.price + " €";

      document.getElementById("img8").src = eighthBook.img;
      document.getElementById("title8").innerText = eighthBook.title;
      document.getElementById("price8").innerText = eighthBook.price + " €";

      document.getElementById("img9").src = ninthBook.img;
      document.getElementById("title9").innerText = ninthBook.title;
      document.getElementById("price9").innerText = ninthBook.price + " €";

      document.getElementById("img10").src = tenthBook.img;
      document.getElementById("title10").innerText = tenthBook.title;
      document.getElementById("price10").innerText = tenthBook.price + " €";

      document.getElementById("img11").src = eleventhBook.img;
      document.getElementById("title11").innerText = eleventhBook.title;
      document.getElementById("price11").innerText = eleventhBook.price + " €";

      document.getElementById("img12").src = twelfthBook.img;
      document.getElementById("title12").innerText = twelfthBook.title;
      document.getElementById("price12").innerText = twelfthBook.price + " €";
    })
    .catch((err) => {
      console.log("Error", err);
    });
};

coverBook();

function setupDeleteButton(buttonId) {
  document.getElementById(buttonId).addEventListener("click", function (e) {
    e.preventDefault();

    let card = this.closest(".card");

    if (card) {
      card.remove();
    }
  });
}
setupDeleteButton("btnDel1");
setupDeleteButton("btnDel2");
setupDeleteButton("btnDel3");
setupDeleteButton("btnDel4");
setupDeleteButton("btnDel5");
setupDeleteButton("btnDel6");
setupDeleteButton("btnDel7");
setupDeleteButton("btnDel8");
setupDeleteButton("btnDel9");
setupDeleteButton("btnDel10");
setupDeleteButton("btnDel11");
setupDeleteButton("btnDel12");
