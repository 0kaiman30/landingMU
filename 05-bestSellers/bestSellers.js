const swiperCreator = () => {
  const products = [
    {
      image:
        "https://mufc-live.cdn.scayle.cloud/images/26a5470b87f18db6446820b18252de4a.png?brightness=1&width=576&height=768&quality=75&bg=ffffff",
      name: "Kobbie Mainoo Home Kit 2024-25",
      price: "$99.99",
    },
    {
      image:
        "https://mufc-live.cdn.scayle.cloud/images/de77eb4e356ac34887ed8927745d8e66.png?brightness=1&width=576&height=768&quality=75&bg=ffffff",
      name: "Garnacho Home Kit 2024",
      price: "$99.99",
    },
    {
      image:
        "https://mufc-live.cdn.scayle.cloud/images/46697e884e91076429e4db51a0b580d6.png?brightness=1&width=576&height=768&quality=75&bg=ffffff",
      name: "Bruno Fernandes Home Kit 2024",
      price: "$99.99",
    },
    {
      image:
        "https://i.pinimg.com/originals/4c/6c/4b/4c6c4b6c1b19d7cf1478136d8fb7b9c1.jpg",
      name: "Anthony and his Golden Ball",
      price: "$39.99",
    },
  ];

  const addProductCards = (products) => {
    products.forEach((product) => {
      const swiperSlide = document.createElement("div");
      swiperSlide.classList.add("swiper-slide");

      const productCard = document.createElement("div");
      productCard.classList.add("product-card");

      const productImage = document.createElement("div");
      productImage.classList.add("product-image");
      productImage.style.backgroundImage = `url(${product.image})`;

      const productInfo = document.createElement("div");
      productInfo.classList.add("product-info");

      const productName = document.createElement("h3");
      productName.textContent = product.name;

      const productPrice = document.createElement("p");
      productPrice.textContent = product.price;

      productInfo.append(productName, productPrice);
      productCard.append(productImage, productInfo);
      swiperSlide.append(productCard);

      const result = document
        .querySelector(".swiper-1 .swiper-wrapper")
        .append(swiperSlide);
      return result;
    });
  };

  addProductCards(products);

  const swiper1 = new Swiper(".swiper-1", {
    loop: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    slidesPerView: 3,
    spaceBetween: 10,
  });
};

swiperCreator();
