const hideActiveMenu = (el) => {
  document.querySelectorAll(el).forEach((item) => {
    item.classList.remove("active");
  });
};

hideActiveMenu(".questions__item");

document.querySelectorAll(".questions__item").forEach((item) => {
  item.addEventListener("click", (e) => {
    const self = e.currentTarget;
    hideActiveMenu(".questions__item");
    self.classList.add("active");
  });
});
