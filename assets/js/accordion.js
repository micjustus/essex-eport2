export { initAccordion2 };

function toggleAccordion2(ev) {
  var itemToggle = undefined;
  var elm = ev.currentTarget; // this should be the '.accordion2 .accordion__item' element
  if (elm) itemToggle = elm.getAttribute("aria-expanded") || "false";
  toggleAccordionItem(itemToggle, elm);
}

function initAccordion2(src) {
  src = src || document;

  var elms = src.querySelectorAll(".accordion-header");
  elms.forEach(function (item) {
    return item.addEventListener("click", toggleAccordion2);
  });

  // let's run an initialization on the items
  elms.forEach(function (item) {
    return toggleAccordionItem("true", item);
  });
}

function closeAccordion(src) {
  src = src || document;

  var elms = src.querySelectorAll(".accordion-header");
  elms.forEach(function (item) {
    return item.removeEventListener("click", toggleAccordion2);
  });
}

function hideBody(elm){
  var body = elm.parentElement.querySelector(".accordion-body");
  if (body) {
    body.style.display = 'none';
    body.style.overflow = "hidden";
  }
}

function toggleAccordionItem(itemToggle, elm) {
  var body;

  // since it's a "toggle", we do the opposite of
  if (itemToggle == "false") {
    elm.setAttribute("aria-expanded", "true");
    elm.classList.add("active");

    body = elm.parentElement.querySelector(".accordion-body");
    if (body) {
      body.style.display='block';
    }
  } else {
    elm.setAttribute("aria-expanded", "false");
    elm.classList.remove("active");

    hideBody(elm);
  }
}