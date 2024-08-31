let btn = document.querySelector("#btn");

btn.addEventListener("click", function () {
  console.log("btn clicked");
  // dynamic import
  import("./file1.mjs")
    .then(({ name, greet }) => {
      console.log(name);
      greet();
    })
    .catch((e) => {
      console.log(e);
    });
});
