// document.querySelector(".container2").innerHTML = "";
const maps = new Map();
const container = document.querySelector(".container2");
container.innerHTML = "";
const displayDeletedElement = function (maps) {
  container.innerHTML = "";
  for (const [key, value] of maps.entries()) {
    if (key != "") {
      const html = `<div class="card">
        <span class="head"><p>${key}</span>
        <div class="content">
          <div class="desc">
            <p>
                ${value}
            </p>
          </div>
          <div class="button"><button class="btn delete">Delete</button></div>
        </div>
      </div>`;
      container.insertAdjacentHTML("beforeend", html);
    }
  }
};
const displayList = function (maps) {
  container.innerHTML = "";
  for (const [key, value] of maps.entries()) {
    if (key != "" && value != "") {
      const html = `<div class="card">
        <span class="head"><p>${key}</span>
        <div class="content">
          <div class="desc">
            <p>
              ${value}
            </p>
          </div>
          <div class="button"><button class="btn delete">Delete</button></div>
        </div>
      </div>`;
      container.insertAdjacentHTML("afterbegin", html);
      const deleted = document.querySelector(".delete");
      deleted.addEventListener("click", function () {
        maps.delete(`${key}`);
        console.log(maps);
        displayDeletedElement(maps);
        document.querySelector(".btn1").click();
      });
      document.querySelector("#text").value = "";
      document.querySelector("#textarea").value = "";
    }
  }
};
document.querySelector(".btn1").addEventListener("click", function (e) {
  e.preventDefault();
  const displays = document.querySelector(".container2");
  displays.style.display = "block";
  const todonext = String(document.querySelector("#text").value);
  const desc = String(document.querySelector("#textarea").value);
  maps.set(todonext, desc);
  displayList(maps);
});
