(function () {
  var menus = document.querySelectorAll(".menu");
  if (!menus.length) return;

  function setOpen(menu, open) {
    var btn = menu.querySelector(".menu-toggle");
    var nav = menu.querySelector(".mobile-nav");
    menu.classList.toggle("open", open);
    if (btn) {
      btn.setAttribute("aria-expanded", open ? "true" : "false");
      btn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    }
    if (nav) {
      if (open) nav.removeAttribute("hidden");
      else nav.setAttribute("hidden", "");
    }
  }

  menus.forEach(function (menu) {
    var btn = menu.querySelector(".menu-toggle");
    var nav = menu.querySelector(".mobile-nav");
    if (!btn) return;
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      setOpen(menu, !menu.classList.contains("open"));
    });
    if (nav) {
      nav.addEventListener("click", function (e) {
        if (e.target.closest && e.target.closest("a")) setOpen(menu, false);
      });
    }
  });

  document.addEventListener("click", function (e) {
    menus.forEach(function (menu) {
      if (menu.classList.contains("open") && !menu.contains(e.target)) setOpen(menu, false);
    });
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") menus.forEach(function (menu) { setOpen(menu, false); });
  });
})();
