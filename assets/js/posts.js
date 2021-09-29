function initPosts() {
  var elms = document.querySelectorAll(".post");
  elms.forEach(function (item) {
    item.addEventListener(
      "click",
      function () {
        openPostContent(item);
      },
      false
    );
  });
}

function keyPressToClosePost(event) {
  if (event.isComposing || event.keyCode === 229) {
    return;
  }

  if (event.keyCode == 27) {
    closePostContent();
  }
}

function closePostContent() {
  var popup = document.querySelector("#popup__1");
  popup.removeEventListener("click", clickToClosePost);
  document.body.removeChild(popup);
  document.removeEventListener("keydown", keyPressToClosePost);
}

function clickToClosePost(event) {
  if (event.target.id === "popup__1") {
    closePostContent();
  }
}

function stopScroll(event) {
  if (event.target.id === "popup__1") {
    event.preventDefault();
  }
}

function openPostContent(content, otherClass) {
  var popup = document.createElement("div");
  popup.id = "popup__1";
  popup.addEventListener("click", clickToClosePost);
  popup.addEventListener("wheel", stopScroll);
  popup.classList.add("post-popup");

  document.addEventListener("keydown", keyPressToClosePost);

  var popupInner = document.createElement("div");
  popupInner.classList.add("content");

  if (otherClass)
    popupInner.classList.add(otherClass);

  popup.appendChild(popupInner);

  if (content) popupInner.innerHTML = content;


  document.body.appendChild(popup);
}

function openPostContentWithFetch(elm, otherClass) {
  var href = elm.getAttribute("data-href");
  if (!href) return;

  fetch(href)
    .then((response) => response.text())
    .then((data) => openPostContent(data, otherClass));
}

function openPost(evt, otherClass) {
  openPostContentWithFetch(evt, otherClass);
}

function openModuleUnits(moduleId){
  openPostContent( 
  `<body>
    <div>
        <module-units module-id=${moduleId}></module-units>
    </div>
</body>`);
}

function openModuleSeminars(moduleId){
  openPostContent(
    `<body>
      <div>
        <module-seminars module-id=${moduleId}></module-seminars>
      </div>
    </body>`);
}

initPosts();
