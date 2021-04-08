const navbar = new Navbar(
  elements = {
    itemsList: navbarItems_ul,
    expandItemsListButton: expandNavbarItemsList_button
  }
);

function main() {
  navbar.addToggleItemsListVisibilityButtonClickEventListener();
}

main();