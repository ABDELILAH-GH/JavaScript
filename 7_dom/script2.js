// part2
// changing content
element.textContent = "New content";
element.innerHTML = "<p>new content</p>";

// changing styles
element.style.color = "red";

// adding/removing classes
element.classList.add("ne-class");
element.classList.remove("old-class");

//event listners
element.addEventListener("click", function () {
  console;
  log("element clicked!");
});
