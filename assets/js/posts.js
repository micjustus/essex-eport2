function initPosts() {
  var elms = document.querySelectorAll(".post");
  elms.forEach(function (item) {
    item.addEventListener(
      "click",
      function () {
        openPopup({ content: item });
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
  var popup = document.querySelector(".popup-overlay");
  popup.removeEventListener("click", clickToClosePost);
  document.body.removeChild(popup);
  document.removeEventListener("keydown", keyPressToClosePost);
}

function clickToClosePost(event) {
  if (event.target.classList.contains("popup-overlay")) {
    closePostContent();
  }
}

function stopScroll(event) {
  if (event.srcElement.classList.contains("popup-overlay")) {
    event.preventDefault();
  }
}

function openScript(title, href){
  setTimeout( function(){
    fetch(href, { method: "GET" })
    .then(res => 
        {
            if (res.ok) {
                return res.text();
            }

            return "NO DATA";
        })
        .then(data =>{

            openPopup( { content: `<h1 style="margin-bottom: 2em">${title}</h1>
              <pre><code class="language-python">${data}</code></pre>
              <div style="margin-top:1em; font-size:0.7em">
                <span style="font-family: 'JetBrains Mono'">Font face used for Python script is <a href='https://www.jetbrains.com/lp/mono/#intro' target="_blank" style="font-face: 'JetBrains Mono'">JetBrains Mono</a>. 
                Syntax highlighting is provided by <a href="https://highlightjs.org/">Highlight.js</a>
                </span>
                
              `}, null, 'padding: 1em;max-width:70%;');
            

            document.body.querySelectorAll("pre code").forEach(el=>
              {
                hljs.highlightElement(el);
              });
        });
    });
}

function openPopup(options){
  
  var overlay = document.createElement("div");
  overlay.addEventListener("click", clickToClosePost);
  overlay.addEventListener("wheel", stopScroll);
  overlay.classList.add("popup-overlay");

  var popup = document.createElement("div");
  popup.classList.add("popup");

  if (options.title) {
    var header = document.createElement("header");
    header.innerText = options.title;
    popup.appendChild(header);
  }

  var popupContent = document.createElement("div");
  popupContent.classList.add("content");

  if (options.otherClass)
    popupContent.classList.add(options.otherClass);

  if (options.style)
    popupContent.style = options.style;

  if (options.content) {
    var content = document.createElement("div");
    content.innerHTML = options.content;
    popupContent.appendChild(content);
  }

  popup.appendChild(popupContent);
  overlay.appendChild(popup);

  document.body.appendChild(overlay);
  document.addEventListener("keydown", keyPressToClosePost);
}

function openPostContentWithFetch(elm, otherClass) {
  var href = elm.getAttribute("data-href");
  if (!href) return;

  fetch(href)
    .then((response) => response.text())
    .then((data) => openPopup({ content: data, otherClass: otherClass }));
}

function openModuleUnits(moduleId){
  openPopup( 
    {
      content: 
      `<body>
        <div>
            <module-units module-id=${moduleId}></module-units>
        </div>
    </body>`
    });
}

function openModuleSeminars(moduleId){
  openPopup( {
    content:
    `<body>
      <div>
        <module-seminars module-id=${moduleId}></module-seminars>
      </div>
    </body>` }
    );
}

function openPopupHTMLBase64(title, ...args){

  var text = args.map((elm)=> {
    return decodeURIComponent(window.atob(elm));
  }).join("");

  openPopup({ content: text, title: title });
}

initPosts();
