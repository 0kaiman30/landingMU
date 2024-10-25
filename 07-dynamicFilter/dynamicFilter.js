// const dynamicFilterCreator = () => {
//   const accessories = {
//     homeware: [
//       {
//         name: "Manchester United Mug",
//         price: 15,
//       },
//       {
//         name: "Manchester United Blanket",
//         ,
//         price: 45,
//       },
//       {
//         name: "Manchester United Wall Art",
//         ,
//         price: 30,
//       },
//       {
//         name: "Manchester United Coaster Set",
//         ,
//         price: 25,
//       },
//     ],
//     accessories: [
//       {
//         name: "Manchester United Keychain",
//         ,
//         price: 10,
//       },
//       {
//         name: "Manchester United Phone Case",
//         ,
//         price: 20,
//       },
//       {
//         name: "Manchester United Wristband",
//         ,
//         price: 8,
//       },
//       {
//         name: "Manchester United Lanyard",
//         ,
//         price: 12,
//       },
//     ],
//     collectibles: [
//       {
//         name: "Manchester United Signed Ball",
//         ,
//         price: 150,
//       },
//       {
//         name: "Manchester United Retro Scarf",
//         ,
//         price: 35,
//       },
//       {
//         name: "Manchester United Framed Photo",
//         ,
//         price: 80,
//       },
//       {
//         name: "Manchester United Matchday Programme",
//         ,
//         price: 20,
//       },
//     ],
//     toys: [
//       {
//         name: "Manchester United LEGO Set",
//         ,
//         price: 75,
//       },
//       {
//         name: "Manchester United Football",
//         ,
//         price: 25,
//       },
//       {
//         name: "Manchester United Plush Toy",
//         ,
//         price: 30,
//       },
//       {
//         name: "Manchester United Action Figure",
//         ,
//         price: 50,
//       },
//     ],
//   };

//   const allItemsWithCategory = Object.entries(accessories).reduce(
//     (acc, [category, products]) => {
//       const productsWithCategory = products.map((el) => ({
//         ...el,
//         category,
//       }));
//       return [...acc, ...productsWithCategory];
//     },
//     []
//   );

//   const clearProducts = () => {
//     document.querySelector(".filter-2-output").innerHTML = "";
//   };

//   const renderProducts = (data) => {
//     clearProducts();
//     const output = document.querySelector(".filter-2-output");

//     data.forEach((el) => {
//       const productCard = document.createElement("div");
//       productCard.classList.add("filter-2-product-card");

//       const productImage = document.createElement("div");
//       productImage.classList.add("filter-2-product-image");
//       productImage.style.backgroundImage = `url(${el.img})`;

//       const productInfo = document.createElement("div");
//       productInfo.classList.add("filter-2-product-info");

//       const productName = document.createElement("h3");
//       productName.textContent = el.name;

//       const productPrice = document.createElement("p");
//       productPrice.textContent = `$${el.price}`;

//       productInfo.append(productName, productPrice);
//       productCard.append(productImage, productInfo);
//       output.append(productCard);
//     });
//   };

//   const renderButtons = () => {
//     const buttonWrap = document.querySelector(".filter-2-buttonWrap");
//     const categories = ["all menu", ...Object.keys(accessories)];

//     categories.forEach((category) => {
//       const button = document.createElement("button");
//       button.textContent = category;

//       button.addEventListener("click", () => {
//         const activeButton = buttonWrap.querySelector(".filter-2-active");
//         if (activeButton) {
//           activeButton.classList.remove("filter-2-active");
//         }

//         button.classList.add("filter-2-active");

//         if (category === "all menu") {
//           renderProducts(allItemsWithCategory);
//         } else {
//           const filteredProducts = allItemsWithCategory.filter(
//             (el) => el.category === category
//           );
//           renderProducts(filteredProducts);
//         }
//       });

//       buttonWrap.append(button);
//     });
//   };

//   const searchForm = () => {
//     const searchInput = document.querySelector(".filter-2-input");
//     const searchButton = document.querySelector(".filter-2-searchButton");
//     const clearButton = document.querySelector(".filter-2-clearButton");
//     const buttonWrap = document.querySelector(".filter-2-buttonWrap");

//     // Flag for tracking dynamic search
//     let isSearchActive = false;

//     searchInput.addEventListener("input", () => {
//       const searchTerm = searchInput.value.trim().toLowerCase();
//       isSearchActive = searchTerm.length > 0;

//       if (isSearchActive) {
//         const searchResults = allItemsWithCategory.filter((el) =>
//           el.name.toLowerCase().includes(searchTerm)
//         );

//         if (searchResults.length > 0) {
//           renderProducts(searchResults);
//         } else {
//           clearProducts();
//           const noResults = document.createElement("p");
//           noResults.textContent = "No products found.";
//           document.querySelector(".filter-2-output").append(noResults);
//         }

//         const activeButton = buttonWrap.querySelector(".filter-2-active");
//         if (activeButton) {
//           activeButton.classList.remove("filter-2-active");
//         }
//       }
//     });

//     searchButton.addEventListener("click", (e) => {
//       e.preventDefault();
//       const searchTerm = searchInput.value.trim().toLowerCase();
//       if (!searchTerm) {
//         alert("Please enter a search term.");
//         return;
//       }

//       const searchResults = allItemsWithCategory.filter((el) =>
//         el.name.toLowerCase().includes(searchTerm)
//       );

//       if (searchResults.length > 0) {
//         renderProducts(searchResults);
//       } else {
//         clearProducts();
//         const noResults = document.createElement("p");
//         noResults.textContent = "No products found.";
//         document.querySelector(".filter-2-output").append(noResults);
//       }

//       const activeButton = buttonWrap.querySelector(".filter-2-active");
//       if (activeButton) {
//         activeButton.classList.remove("filter-2-active");
//       }
//     });

//     clearButton.addEventListener("click", (e) => {
//       e.preventDefault();
//       searchInput.value = "";
//       renderProducts(allItemsWithCategory);
//       const activeButton = buttonWrap.querySelector(".filter-2-active");
//       if (activeButton) {
//         activeButton.classList.remove("filter-2-active");
//       }
//       isSearchActive = false;
//     });
//   };

//   renderProducts(allItemsWithCategory);
//   renderButtons();
//   searchForm();
// };

// dynamicFilterCreator();


const dynamicFilterCreator = () => {
  const accessories = {
    homeware: [
      { name: "Manchester United Mug", img: "https://images.footballfanatics.com/manchester-united/manchester-united-team-matte-mug_ss4_p-11889704+u-1f9mq6yooyhss77wv3zx+v-53975800f34c40f385299ad6c541140b.jpg?_hv=2&w=600", price: 15 },
      { name: "Manchester United Blanket", img: "https://uk.foco.com/cdn/shop/products/BKTEPPLSSLGMNU_s_1024x1024.jpg?v=1635259380", price: 45 },
      { name: "Manchester United Wall Art", img: "https://www.themed.co.uk/cdn/shop/files/Trio-Illustration-Final-FRAMED_3d9127c2-8fc9-4358-a7a0-6cdc7100fc38.jpg?v=1709028245", price: 30 },
      { name: "Manchester United Coaster Set", img: "https://m.media-amazon.com/images/I/71+I+AyIVxL._AC_UF894,1000_QL80_.jpg", price: 25 },
    ],
    accessories: [
      { name: "Manchester United Keychain", img: "https://www.since7.com/cdn/shop/files/united.jpg?v=1688888614", price: 10 },
      { name: "Manchester United Phone Case", img: "https://footballmonk.in/wp-content/uploads/2021/02/Manchester20United20Home20Jersey20Case20Cover20Customisable201-600x600.jpg", price: 20 },
      { name: "Manchester United Wristband", img: "https://files.ekmcdn.com/leighc10/images/manchester-united-wristbands-8083-p.jpg", price: 8 },
      { name: "Manchester United Lanyard", img: "https://mufc-live.cdn.scayle.cloud/images/5247d2517c9eb43ff9797faad2903c86.png?quality=75", price: 12 },
    ],
    collectibles: [
      { name: "Manchester United Signed Ball", img: "https://images.footballfanatics.com/manchester-united/manchester-united-crest-signature-football-size-5_ss5_p-13375386+pv-1+u-1yuxlh1crrqspj134apa+v-23s8g0yny1z4ifkhqzaw.jpg?_hv=2&w=900", price: 150 },
      { name: "Manchester United Retro Scarf", img: "https://i.ebayimg.com/00/s/MTYwMFgxMjAw/z/d7wAAOSwsAVjGgzk/$_57.JPG?set_id=880000500F", price: 35 },
      { name: "Manchester United Framed Photo", img: "https://www.firmastella.com/wp-content/uploads/2023/08/Signed-Manchester-United-FC-Framed-Shirt-Premier-League-Champions-2001.jpg", price: 80 },
      { name: "Manchester United Matchday Programme", img: "https://upload.wikimedia.org/wikipedia/commons/3/3d/Stretford_End%2C_Old_Trafford.jpg", price: 20 },
    ],
    toys: [
      { name: "Manchester United LEGO Set", img: "https://m.media-amazon.com/images/I/81wQUlIVRsL._AC_UF894,1000_QL80_.jpg", price: 75 },
      { name: "Manchester United Football", img: "https://i.ebayimg.com/images/g/XFIAAOSwCwJjc95H/s-l1200.jpg", price: 25 },
      { name: "Manchester United Plush Toy", img: "https://images.footballfanatics.com/manchester-united/manchester-united-fred-the-red-mascot-soft-toy_ss5_p-200785714+pv-1+u-exrowtqeiu4fxgg4ni6l+v-uqiyy7w1mwzig42jctli.jpg?_hv=2&w=900", price: 30 },
      { name: "Manchester United Action Figure", img: "https://i5.walmartimages.com/seo/Minigols-F-C-Manchester-United-Team-Figures-11ct_8fe5abab-5acc-45ed-8508-24d1f90e6126.b72f078824621c0506b6e66ffe9a594a.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF", price: 50 },
    ],
  };

  const allItemsWithCategory = Object.entries(accessories).reduce((acc, [category, products]) => {
    const productsWithCategory = products.map((el) => ({ ...el, category }));
    return [...acc, ...productsWithCategory];
  }, []);

  const clearProducts = () => {
    document.querySelector(".filter-2-output").innerHTML = "";
  };

  const renderProducts = (data) => {
    clearProducts();
    const output = document.querySelector(".filter-2-output");

    data.forEach((el) => {
      const productCard = document.createElement("div");
      productCard.classList.add("filter-2-product-card");

      const productImage = document.createElement("div");
      productImage.classList.add("filter-2-product-image");
      productImage.style.backgroundImage = `url(${el.img})`;

      const productInfo = document.createElement("div");
      productInfo.classList.add("filter-2-product-info");

      const productName = document.createElement("h3");
      productName.textContent = el.name;

      const productPrice = document.createElement("p");
      productPrice.textContent = `$${el.price}`;

      productInfo.append(productName, productPrice);
      productCard.append(productImage, productInfo);
      output.append(productCard);
    });
  };

  const renderSelectOptions = () => {
    const select = document.querySelector(".filter-2-categorySelect");
    const categories = Object.keys(accessories);

    categories.forEach((category) => {
      const option = document.createElement("option");
      option.value = category;
      option.textContent = category.charAt(0).toUpperCase() + category.slice(1);
      select.append(option);
    });

    select.addEventListener("change", (e) => {
      const selectedCategory = e.target.value;
      if (selectedCategory === "all menu") {
        renderProducts(allItemsWithCategory);
      } else {
        const filteredProducts = allItemsWithCategory.filter((el) => el.category === selectedCategory);
        renderProducts(filteredProducts);
      }
    });
  };

  const searchForm = () => {
    const searchInput = document.querySelector(".filter-2-input");
    const searchButton = document.querySelector(".filter-2-searchButton");
    const clearButton = document.querySelector(".filter-2-clearButton");

    searchInput.addEventListener("input", () => {
      const searchTerm = searchInput.value.trim().toLowerCase();
      const searchResults = allItemsWithCategory.filter((el) => el.name.toLowerCase().includes(searchTerm));
      renderProducts(searchResults);
    });

    searchButton.addEventListener("click", (e) => {
      e.preventDefault();
      const searchTerm = searchInput.value.trim().toLowerCase();
      const searchResults = allItemsWithCategory.filter((el) => el.name.toLowerCase().includes(searchTerm));
      renderProducts(searchResults);
    });

    clearButton.addEventListener("click", (e) => {
      e.preventDefault();
      searchInput.value = "";
      renderProducts(allItemsWithCategory);
    });
  };

  renderProducts(allItemsWithCategory);
  renderSelectOptions();
  searchForm();
};

dynamicFilterCreator();
