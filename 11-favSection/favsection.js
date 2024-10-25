const favSectionCreate = () => {
  const images = [
    {
      name: "Garnacho",
      imageUrl:
        "https://pbs.twimg.com/media/F_40Aq3XgAE4XKu?format=jpg&name=4096x4096",
    },
    {
      name: "Ugarte",
      imageUrl:
        "https://sun9-63.userapi.com/s/v1/ig2/d02cEVUjdn2OfeE9cEdwmiPNnkEpWoOPl_OeK78cER9CWm_2LdT5nimpOWr67xmzY4US1nLNvV9w4PqAfNtuUlXd.jpg?quality=96&as=32x40,48x60,72x90,108x135,160x200,240x300,360x450,480x600,540x675,640x800,720x900,1080x1350,1280x1600,1440x1800,1638x2048&from=bu&u=ygUqBQ43gWpzAWirhhQ2oMfHgccxMXKSSr00ugrYW4g&cs=645x807",
    },
    {
      name: "Onana",
      imageUrl:
        "https://static.tildacdn.com/tild6164-3930-4333-a536-326435643866/photo.jpg",
    },
    {
      name: "De Ligt",
      imageUrl:
        "https://sun9-15.userapi.com/s/v1/ig2/6n42AtJXZcwHh8voRgoN1qieCIGpPlhSmVKqHfgpvjKr5d4UvmOqNAnYRyBgBZXi81pXG4pBLZ7ic8NAQ8EyVCTz.jpg?quality=96&as=32x37,48x55,72x82,108x123,160x183,240x274,360x412,480x549,540x617,640x732,720x823,1080x1235,1280x1464,1289x1474&from=bu&u=Lq3Eo5hNWU2CPBaMgZDbOJ1hVMm58CzvH-BLJDh9rXE&cs=706x807",
    },
  ];

  const output = document.querySelector(".users");
  const img2 = document.querySelector(".finalImage");
  img2.src = images[0].imageUrl;
  images.forEach((el, index) => {
    const col = document.createElement("div");
    const box = document.createElement("div");
    const avatar = document.createElement("img");
    const name = document.createElement("p");

    col.className = "col-6";
    box.className = "box";
    name.className = "name";

    avatar.src = el.imageUrl;
    name.textContent = el.name;

    box.append(avatar, name);
    col.append(box);
    output.append(col);

    box.addEventListener("click", () => {
      img2.src = avatar.src;
    });
  });
};

favSectionCreate();
