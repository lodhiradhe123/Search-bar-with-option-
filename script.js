const point = document.querySelector("#point");

const body = document.querySelector("body");

body.addEventListener("mousemove", function (e) {
  point.style.top = e.y + "px";
  point.style.left = e.x + "px";
});

const flowers = [
  {
    name: "rose",
    image:
      "https://images.unsplash.com/photo-1599462893312-aece70d5a860?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJvc2UlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "genda",
    image:
      "https://images.unsplash.com/photo-1596478528745-662331c50d9c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Zmxvd2VyJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "other",
    image:
      "https://images.unsplash.com/photo-1604137488398-b1d691713d96?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZsb3dlciUyMGltYWdlfGVufDB8fDB8fHww",
  },
  {
    name: "sunflower",
    image:
      "https://images.unsplash.com/photo-1692355110916-7cb79cde0b54?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3VuZmxvd2VyJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D",
  },
];

function rendomFlower() {
  var clutter = "";
  flowers.forEach((e) => {
    clutter += `<div id="flowers">
    <img
      src="${e.image}"
      alt="fool"
    />
  </div>`;
  });
  // console.log(clutter);
  document.querySelector("#page1").innerHTML = clutter;
}
rendomFlower();

function inputBar() {
  var input = document.querySelector("#input");

  input.addEventListener("focus", function () {
    document.querySelector("#overlay").style.display = "block";
    input.style.width = "400px";
  });

  input.addEventListener("blur", () => {
    document.querySelector("#overlay").style.display = "none";
  });
  input.addEventListener("input", () => {
    const filterArray = flowers.filter((obj) =>
      obj.name.toLowerCase().startsWith(input.value.toLowerCase())
    );
    var clutter = "";
    filterArray.forEach(function (obj) {
      clutter += `<h3>${obj.name}</h3>`;
      console.log(clutter);
    });
    document.querySelector("#searchpannel").style.display = "block";
    document.querySelector("#searchpannel").innerHTML = clutter;
  });
}

inputBar();
