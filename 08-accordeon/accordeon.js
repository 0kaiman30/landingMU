const accordionCreator = () => {
  const data = [
    {
      title: "Club History",
      descr:
        "Manchester United was founded in 1878 and is known as one of the most successful football clubs in the world. The club has a rich history, including numerous victories in the English Premier League and the UEFA Champions League.",
      img: "https://wallpapercave.com/wp/wp1890051.jpg",
    },
    {
      title: "Famous Players",
      descr:
        "The club has produced many football legends, including Bobby Charlton, Eric Cantona, and Cristiano Ronaldo. Each of these players made significant contributions to the club's success over the decades.",
      img: "https://c4.wallpaperflare.com/wallpaper/288/894/416/cristiano-ronaldo-rooney-manchester-united-old-trafford-wallpaper-preview.jpg",
    },
    {
      title: "Modern Achievements",
      descr:
        "Despite challenging times, Manchester United continues to fight for titles. Under new management, the team aims to reclaim its positions in both English and European football.",
      img: "https://e0.365dm.com/23/02/2048x1152/skysports-manchester-united_6071181.jpg?20230226190424",
    },
  ];

  const accordion = document.querySelector(".accordion");
  const accordionCreator = () => {
    data.forEach((el) => {
      const accordionWrap = document.createElement("div");
      const accordionHeader = document.createElement("div");
      const accordionContent = document.createElement("div");

      const accordionHeaderText = document.createElement("p");
      const accordionContentText = document.createElement("p");
      const accordionHeaderArrow = document.createElement("img");
      const accordionContentImg = document.createElement("img");

      accordionWrap.className = "accordion__wrap";
      accordionContent.className = "accordion__content";
      accordionHeader.className = "accordion__name";
      accordionHeaderArrow.className = "plus";

      accordionHeaderArrow.src =
        "https://www.iconpacks.net/icons/2/free-arrow-down-icon-3101-thumb.png";
      accordionHeaderText.textContent = el.title;
      accordionContentText.textContent = el.descr;
      accordionContentImg.src = el.img;
      accordionContentImg.classList.add("exclusive");
      accordionContentImg.alt = el.title;

      accordionContent.append(accordionContentText, accordionContentImg);
      accordionHeader.append(accordionHeaderText, accordionHeaderArrow);
      accordionWrap.append(accordionHeader, accordionContent);
      accordion.append(accordionWrap);
    });
  };

  accordionCreator();

  const accordionHeader = document.querySelectorAll(".accordion__name");
  const accordion__wrap = document.querySelectorAll(".accordion__wrap");

  accordionHeader.forEach((el, index) => {
    el.addEventListener("click", () => {
      accordion__wrap.forEach((el, indexx) => {
        if (indexx !== index) {
          el.classList.remove("accordion__active");
        }
      });
      accordion__wrap[index].classList.toggle("accordion__active");
    });
  });
};
accordionCreator();
