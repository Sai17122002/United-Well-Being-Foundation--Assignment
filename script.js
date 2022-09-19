const showMoreButton = document.querySelector(".show-more-button button");
const showMoreContent = document.querySelectorAll(".show-more-content");

let count = 1;
showMoreButton.addEventListener("click", function (e) {
  showMoreContent.forEach((element) => {
    element.classList.toggle("active");
  });
  if (count % 2) showMoreButton.textContent = "Show Less";
  else showMoreButton.textContent = "Show More";
  count++;
});
