//DOM manipulation
const main = document.querySelector("#main");

//create div's
function createDiv(id) {
  const container = document.createElement("div");
  container.setAttribute("id", "container");
  for (let i = 1; i <= id; i++) {
    const rowDiv = document.createElement("div");
    rowDiv.classList.add("row");

    for (let j = 1; j <= id; j++) {
      const divCol = document.createElement("div");
      divCol.classList.add("col");
      divCol.classList.add(`col${id}`);
      rowDiv.appendChild(divCol);
    }
    container.appendChild(rowDiv);
  }
  main.append(container);
}

//hover effect
//Mouse Over
function changeColor(evt) {
  const cols = document.querySelectorAll(".col");
  if (evt == "random-color") {
    cols.forEach((col) => {
      col.addEventListener("mouseover", () => {
        randomColor = Math.floor(Math.random() * 16777215).toString(16);
        col.style.backgroundColor = "#" + randomColor;
      });
      col.addEventListener("touchstart",()=>{
        randomColor = Math.floor(Math.random() * 16777215).toString(16);
        col.style.backgroundColor = "#" + randomColor;
      })
      col.addEventListener("touchmove",()=>{
        randomColor = Math.floor(Math.random() * 16777215).toString(16);
        col.style.backgroundColor = "#" + randomColor;
      })
    });
  } else {
    cols.forEach((col) => {
      col.addEventListener("mouseover", () => {
        col.style.backgroundColor = evt;
      });
      col.addEventListener("touchstart",()=>{
        col.style.backgroundColor = evt;
      })
      col.addEventListener("touchmove",()=>{
        col.style.backgroundColor = evt;
      })
    });
  }
}

//working start from here
//Size button working
const boxSizes = document.querySelectorAll(".boxSize");
boxSizes.forEach((boxSize) => {
  boxSize.addEventListener("click", (evt) => {
    funButtons.forEach((button) => button.classList.remove("active-button"));
    boxSizes.forEach((boxSize) => boxSize.classList.remove("active-button"));
    boxSize.classList.add("active-button");
    resetDiv();
    createDiv(evt.target.id);
    evt.stopPropagation();
  });
});

//color button working
const funButtons = document.querySelectorAll(".funButton");
funButtons.forEach((funButton) => {
  funButton.addEventListener("click", (evt) => {
    funButtons.forEach((button) => button.classList.remove("active-button"));
    funButton.classList.add("active-button");
    changeColor(evt.target.id);
    evt.stopPropagation();
  });
});

//function to reset div
function resetDiv() {
    main.textContent="";
    const container=document.querySelector("#container");
    if(container){
        container.remove();
    }
}
