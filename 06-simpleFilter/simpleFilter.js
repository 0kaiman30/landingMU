const filterCreator = () => {
  const accessories = {
    sportswear: [
      {
        name: "Manchester United Home Jersey 2023/24",
        img: "https://mufc-live.cdn.scayle.cloud/images/33897d64d5ecc02014dc6d498bb8bd12.jpg?brightness=1&width=576&height=768&quality=75&bg=ffffff",
        price: 100,
      },
      {
        name: "Manchester United Away Jersey 2023/24",
        img: "https://mufc-live.cdn.scayle.cloud/images/559eb8fb7ea61b633f84b7ecba484ec3.jpg?brightness=1&width=576&height=768&quality=75&bg=ffffff",
        price: 100,
      },
      {
        name: "Manchester United Third Jersey 2023/24",
        img: "https://mufc-live.cdn.scayle.cloud/images/0dd8a9fe914d7bca2c29eb631fa44e96.jpg?brightness=1&width=576&height=768&quality=75&bg=ffffff",
        price: 100,
      },
      {
        name: "Manchester United Training Top",
        img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjLlV5gWHyyzvZYzN87WgG2uiwy1IKYthM_wRcLQgk8Oje8AJPkTTwGMj_ylTcpORagZnZD9qQoGWphaq6GbcgAEdbuvgSL8Hm0KyU6gy2XgEDAuE5TY3oOSa2VgX0aGlxrWozi3G0goQAQs_qqgBwKoZVC_Za9ejwHSyll3uhBvN8fTacGHSPNw8eIlg0/s1600/manchester-united-24-25-collection%20%285%29.jpg",
        price: 35,
      },
      {
        name: "Manchester United Tracksuit",
        img: "https://files.ekmcdn.com/0506e7/images/manchester-united-23-24-white-with-black-tracksuit-with-hood-size-xxl-9579-p.jpg",
        price: 80,
      },
    ],
    casual: [
      {
        name: "Manchester United Hoodie",
        img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/29b3f45a7f8f4653886f8138a5c1e170_9366/Manchester_United_Originals_Hoodie_Black_IS6521_HM1.jpg",
        price: 60,
      },
      {
        name: "Manchester United Sweatshirt",
        img: "https://img01.ztat.net/article/spp-media-p1/08cab210920d4265b16ceb82a403ca50/1a10b319e0c445cf809766ff4a00a9b6.jpg?imwidth=1800",
        price: 50,
      },
      {
        name: "Manchester United Vintage T-Shirt",
        img: "https://garmisland.com/cdn/shop/files/FullSizeRender_517937db-ba95-49f1-857c-23d5f0abfa78.jpg?v=1693844837&width=1080",
        price: 25,
      },
      {
        name: "Manchester United Women's Jersey 2023/24",
        img: "https://mufc-live.cdn.scayle.cloud/images/92d09e0aea9dea832fec25e84e100705.jpg?quality=75",
        price: 100,
      },
    ],
    accessories: [
      {
        name: "Manchester United Scarf",
        img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8421bd1717684574b9acace700a9b462_9366/Manchester_United_Scarf_Red_GU0121_01_standard.jpg",
        price: 15,
      },
      {
        name: "Manchester United Cap",
        img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/73f0fb2a86534d96aae12e914d6bdef0_9366/Manchester_United_Home_Baseball_Cap_Black_IB4568_01_standard.jpg",
        price: 12,
      },
      {
        name: "Manchester United Socks",
        img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/877ca45d4814408aa41bb9646a889fc6_9366/Manchester_United_24-25_Home_Socks_White_IU1411_03_standard.jpg",
        price: 10,
      },
      {
        name: "Manchester United Gym Bag",
        img: "https://mufc-live.cdn.scayle.cloud/images/0f7f51eefe0cdd002103828c49b9dbd4.jpg?brightness=1&width=922&height=1230&quality=75&bg=ffffff",
        price: 20,
      },
    ],
    kids: [
      {
        name: "Manchester United Kids' Jersey 2023/24",
        img: "https://mufc-live.cdn.scayle.cloud/images/3b607cc82ed072210e33d1328dc9169f.jpg?brightness=1&width=576&height=768&quality=75&bg=ffffff",
        price: 70,
      },
      {
        name: "Manchester United Kids' Hoodie",
        img: "https://www.lifestylesports.com/on/demandware.static/-/Sites-LSS_eCommerce_Master/default/dw05097bbe/images/72124230xlarge.jpg",
        price: 40,
      },
      {
        name: "Manchester United Kids' Sweatshirt",
        img: "https://www.futbolemotion.com/imagesarticulos/228511/750/sudadera-adidas-manchester-united-training-2024-2025-nino-night-indigo-bright-red-0.webp",
        price: 35,
      },
      {
        name: "Manchester United Kids' Cap",
        img: "https://mufc-live.cdn.scayle.cloud/images/34261ccbabbee19c73131eecc562f8bb.jpg?brightness=1&width=576&height=768&quality=75&bg=ffffff",
        price: 12,
      },
    ],
  };

  const allItemsWithCategory = Object.entries(accessories).reduce(
    (acc, [category, products]) => {
      const productsWithCategory = products.map((el) => ({
        ...el,
        category,
      }));
      return [...acc, ...productsWithCategory];
    },
    []
  );

  const clearProducts = () => {
    document.querySelector(".output").innerHTML = "";
  };

  const renderProducts = (data) => {
    clearProducts();
    const output = document.querySelector(".output");

    data.forEach((el) => {
      const productCard = document.createElement("div");
      productCard.classList.add("product-card");

      const productImage = document.createElement("div");
      productImage.classList.add("product-image");
      productImage.style.backgroundImage = `url(${el.img})`;

      const productInfo = document.createElement("div");
      productInfo.classList.add("product-info");

      const productName = document.createElement("h3");
      productName.textContent = el.name;

      const productPrice = document.createElement("p");
      productPrice.classList.add("price");
      productPrice.textContent = `$${el.price}`;

      productInfo.append(productName, productPrice);
      productCard.append(productImage, productInfo);
      output.append(productCard);
    });
  };

  const renderButtons = () => {
    const buttonWrap = document.querySelector(".buttonWrap");
    const categories = ["all menu", ...Object.keys(accessories)];

    categories.forEach((category) => {
      const button = document.createElement("button");
      button.textContent = category;

      button.addEventListener("click", () => {
        const activeButton = buttonWrap.querySelector(".active");
        if (activeButton) {
          activeButton.classList.remove("active");
        }

        button.classList.add("active");

        if (category === "all menu") {
          renderProducts(allItemsWithCategory);
        } else {
          const filteredProducts = allItemsWithCategory.filter(
            (el) => el.category === category
          );
          renderProducts(filteredProducts);
        }
      });

      buttonWrap.append(button);
    });
  };

  const searchForm = () => {
    const searchInput = document.querySelector(".searchInput");
    const searchButton = document.querySelector(".searchButton");
    const clearButton = document.querySelector(".clearButton");
    const buttonWrap = document.querySelector(".buttonWrap");

    searchButton.addEventListener("click", (e) => {
      e.preventDefault();

      const searchTerm = searchInput.value.trim().toLowerCase();
      if (!searchTerm) {
        alert("Please enter a search term.");
        return;
      }

      const searchResults = allItemsWithCategory.filter((el) =>
        el.name.toLowerCase().includes(searchTerm)
      );

      if (searchResults.length > 0) {
        renderProducts(searchResults);
      } else {
        clearProducts();
        const noResults = document.createElement("p");
        noResults.textContent = "No products found.";
        document.querySelector(".output").append(noResults);
      }

      const activeButton = buttonWrap.querySelector(".active");
      if (activeButton) {
        activeButton.classList.remove("active");
      }
    });

    clearButton.addEventListener("click", (e) => {
      e.preventDefault();
      searchInput.value = "";
      renderProducts(allItemsWithCategory);
      const activeButton = buttonWrap.querySelector(".active");
      if (activeButton) {
        activeButton.classList.remove("active");
      }
    });
  };

  renderProducts(allItemsWithCategory);
  renderButtons();
  searchForm();
};

filterCreator();
