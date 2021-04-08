class Navbar {
  constructor(
    elements = {
      itemsList,
      expandItemsListButton
    }
  ) {
    this.itemsListElement = elements.itemsList;
    this.expandItemsListButtonElement = elements.expandItemsListButton;
    this.expandItemsListButtonLineElements = this.expandItemsListButtonElement.querySelectorAll(".expand-navbar-items-button-line");
  }

  addToggleItemsListVisibilityButtonClickEventListener() {
    this.expandItemsListButtonElement.addEventListener("click", () => {
      this.itemsListElement.classList.toggle("collapsed");
      this.expandItemsListButtonLineElements[0].classList.toggle("rotated");
      this.expandItemsListButtonLineElements[1].classList.toggle("rotated");
      this.toggleElementExpandedAttribute(this.itemsListElement);
      //this.expandItemsListButtonElement.toggleAttribute("data-expanded");
      const first_section = document.getElementsByTagName("section")[0];
      first_section.classList.toggle("shifted-down");
      const tooltipPanel_div = document.querySelector(".tooltip-panel");
      if (tooltipPanel_div === null || tooltipPanel_div === undefined) {
        return;
      }
      if (first_section.classList.contains("shifted-down")) {
        tooltipPanel_div.classList.add("shifted-down");
      } else {
        tooltipPanel_div.classList.remove("shifted-down");
      }
    });
  }

  toggleElementExpandedAttribute(element) {
    element.setAttribute("data-expanded", !parseBool(element.getAttribute("data-expanded")));
  }

  isExpanded() {
    return (this.itemsListElement.style.display !== "none") &&
      (parseBool(this.itemsListElement.getAttribute("data-expanded")));
  }
}