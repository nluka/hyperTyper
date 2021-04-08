expandNavbarItemsButton_div.addEventListener("click", () => {
  navbarItems_ul.classList.toggle("collapsed");
  expandNavbarItemsButtonStrips_spans[0].classList.toggle("rotated");
  expandNavbarItemsButtonStrips_spans[1].classList.toggle("hidden");
  expandNavbarItemsButtonStrips_spans[2].classList.toggle("rotated");
  expandNavbarItemsButton_div.classList.toggle("active");
  gameArea_section.classList.toggle("shifted-down");
});
