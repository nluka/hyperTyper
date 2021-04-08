class Tooltip {
  static expandedInstances = [];

  constructor(iconElement, titleText, bodyText) {
    this.elements = {
      icon: iconElement,
      background: null,
      panel: null,
      header: null,
      title: null,
      closeButton: null,
      body: null
    };
    this.titleText = titleText;
    this.bodyText = bodyText;
    this.isExpanded = false;
    this.addIconClickEventListener();
  }

  addIconClickEventListener() {
    this.elements.icon.addEventListener("click", () => {
      if (!this.isExpanded) {
        this.expand();
      }
    });
  }

  expand() {
    Tooltip.closeAnyExpandedInstances();
    Tooltip.expandedInstances.push(this);
    this.isExpanded = true;
    this.createBackgroundElement();
    this.createPanelElement();
    this.shiftPanelDownwardIfNavbarIsExpanded();
    this.createHeaderElement();
    this.createTitleElement();
    this.createCloseButtonElement();
    this.createBodyElement();
    this.addCloseButtonClickEventListener();
  }

  static closeAnyExpandedInstances() {
    if (this.expandedInstances.length === 0) {
      return;
    }
    this.expandedInstances.forEach((expandedInstance) => {
      expandedInstance.elements.closeButton.dispatchEvent(new Event("click"));
    });
    this.expandedInstances = [];
  }

  createBackgroundElement() {
    this.elements.background = document.createElement("div");
    this.elements.background.classList.add("tooltip-background");
    document.body.appendChild(this.elements.background);
  }

  createPanelElement() {
    this.elements.panel = document.createElement("div");
    this.elements.panel.classList.add("tooltip-panel");
    document.body.appendChild(this.elements.panel);
  }

  shiftPanelDownwardIfNavbarIsExpanded() {
    if (navbar.isExpanded()) {
      this.elements.panel.classList.add("shifted-down");
    }
  }

  createHeaderElement() {
    this.elements.header = document.createElement("div");
    this.elements.header.classList.add("tooltip-header");
    this.elements.panel.appendChild(this.elements.header);
  }

  createTitleElement() {
    this.elements.title = document.createElement("div");
    this.elements.title.classList.add("tooltip-title");
    this.elements.title.innerText = this.titleText;
    this.elements.header.appendChild(this.elements.title);
  }

  createCloseButtonElement() {
    this.elements.closeButton = document.createElement("div");
    this.elements.closeButton.classList.add("tooltip-close-button");
    this.elements.closeButton.innerText = "🗙";
    this.elements.header.appendChild(this.elements.closeButton);
  }

  createBodyElement() {
    this.elements.body = document.createElement("div");
    this.elements.body.classList.add("tooltip-body");
    this.elements.body.innerText = this.bodyText;
    this.elements.panel.appendChild(this.elements.body);
  }

  addCloseButtonClickEventListener() {
    this.elements.closeButton.addEventListener("click", () => {
      this.close();
    });
  }

  close() {
    const nonIconElementsInReversedOrderAdded = [
      this.elements.body,
      this.elements.closeButton,
      this.elements.title,
      this.elements.header,
      this.elements.panel,
      this.elements.background
    ];
    nonIconElementsInReversedOrderAdded.forEach((element) => {
      element.remove();
    });
    this.isExpanded = false;
  }
}