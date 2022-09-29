// Opening and Closing Slider Functions____________

let opens = false;

const Open = () => {
  if (opens === false) {
    let sidebar = document.querySelector(".right_slider");
    sidebar.style.transform = "translateX(0)";
    sidebar.style.transition = "0.3s";

    sidebar.parentElement.style = `overflow-x: visible`;
  } else {
    let sidebar = document.querySelector(".right_slider");
    sidebar.style = `transform:translateX(700px); transition: 0.5s`;
    sidebar.parentElement.style = `overflow-x: hidden`;

    opens = false;
  }
};

const Close = () => {
  let sidebar = document.querySelector(".right_slider");
  sidebar.style = `transform:translateX(700px); transition: 0.5s`;
  sidebar.parentElement.style = `overflow-x: hidden`;

  opens = false;
};
