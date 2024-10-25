const createDoubleAccordion = () => {
  const data = [
    {
      title: "Top Scorer",
      image:
        "https://photobooth.cdn.sports.ru/preset/tags/2/6c/2eba748014a27aa3515b8648feb4f.jpeg",
      descr: "Matthijs de Ligt\nGoals: 1 | Assists: 0 | Yellow Cards: 1",
    },
    {
      title: "Last Transfer",
      image:
        "https://photobooth.cdn.sports.ru/preset/tags/d/c4/26344f68a4a79b674980c2fb8151e.png",
      descr: "Manuel Ugarte - 50.000.000$",
    },
  ];

  const accordion = document.querySelector(".accordion-double");

  const accordionCreator = () => {
    const row = document.createElement("div");
    row.className = "row";

    data.forEach((el) => {
      const col = document.createElement("div");
      col.className = "col-6";
      const accordionWrap = document.createElement("div");
      const accordionHeader = document.createElement("div");
      const accordionContent = document.createElement("div");

      const accordionHeaderText = document.createElement("p");
      const accordionContentText = document.createElement("p");
      const accordionHeaderArrow = document.createElement("img");

      const playerImage = document.createElement("img");
      accordionContentText.textContent = el.descr
      playerImage.src = el.image;
      playerImage.className = "player-image";

      accordionWrap.className = "accordion-double__wrap";
      accordionContent.className = "accordion-double__content";
      accordionHeader.className = "accordion-double__name";
      accordionHeaderArrow.className = "plus";

      accordionHeaderArrow.src =
        "https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png";
      accordionHeaderText.textContent = el.title;

      accordionContent.innerHTML = "";
      accordionContent.append(playerImage);
      accordionContent.append(accordionContentText);

      accordionHeader.append(accordionHeaderText, accordionHeaderArrow);
      accordionWrap.append(accordionHeader, accordionContent);
      col.append(accordionWrap);
      row.append(col);
    });

    accordion.appendChild(row);
  };

  accordionCreator();

  const accordionHeaders = document.querySelectorAll(".accordion-double__name");
  const accordionWraps = document.querySelectorAll(".accordion-double__wrap");

  accordionHeaders.forEach((el, index) => {
    el.addEventListener("click", () => {
      accordionWraps[index].classList.toggle("accordion-double__active");
    });
  });
};

createDoubleAccordion();
