function setupResizableSplitPane(wrapper) {
  const gutter = wrapper.querySelector(".gutter");
  const leftPane = wrapper.querySelector(".left");
  const rightPane = wrapper.querySelector(".right");

  function resizerMouseDown(e) {
    e.preventDefault();
    document.addEventListener("mousemove", mousemove);
    document.addEventListener("mouseup", mouseup);

    let prevX = e.clientX;
    const leftPanelWidth = leftPane.getBoundingClientRect().width;

    function mousemove(e) {
      const newX = e.clientX;
      const diffX = newX - prevX;
      leftPane.style.width = leftPanelWidth + diffX + "px";
    }

    function mouseup() {
      document.removeEventListener("mousemove", mousemove);
      document.removeEventListener("mouseup", mouseup);
    }
  }

  gutter.addEventListener("mousedown", resizerMouseDown);
}

const wrappers = document.querySelectorAll(".wrapper");
wrappers.forEach(setupResizableSplitPane);

document.querySelector("button").addEventListener("click", (e) => {
  const aside = document.getElementById("aside");
  if (aside.style.display == "flex") {
    aside.style.display = "none";
    e.target.textContent = ">";
  } else {
    aside.style.display = "flex";
    e.target.textContent = "<";
  }
});
