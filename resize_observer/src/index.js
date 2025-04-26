const box = document.querySelector(".box");

const observer = new ResizeObserver((entries) => {
  console.log("entries", entries);

  if (entries[0].contentRect.width < 1000) {
    box.style.backgroundColor = "lightblue";
  }
});

observer.observe(box);
