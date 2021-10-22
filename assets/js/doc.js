function loadDoc(title, url){
    var win = window.open('reflections.html', "google_reflections");

    setTimeout( function(){
        win.document.title = title;
        var item = win.document.querySelector("#reflector")

        var xhr = new XMLHttpRequest();
                 xhr.open('GET', url, true);
                 xhr.onload = function() {
                     // display response
                     item.innerHTML = xhr.responseText;
                 };
                 xhr.send();
    }, 200);    
}

function loadPdf(title, url){
    var win = window.open(url, title);
}

function openXml(title, url){
    
    setTimeout( function(){
        fetch(url, { method: "GET" })
        .then(res => 
            {
                if (res.ok) {
                    return res.text();
                }

                return "NO DATA";
            })
            .then(data =>{
                openPostContent( `<h1 style="margin-bottom: 2em">${title}</h1>
                <pre><code class="language-xml"><textarea>${data}</textarea></code></pre>
                <div style="margin-top:1em; font-size:0.7em">
                  <span style="font-family: 'JetBrains Mono'">Font face used for Python script is <a href='https://www.jetbrains.com/lp/mono/#intro' target="_blank" style="font-face: 'JetBrains Mono'">JetBrains Mono</a>. 
                  Syntax highlighting is provided by <a href="https://highlightjs.org/">Highlight.js</a>
                  </span>
                  
                `, null, 'padding: 1em;');
              
  
              document.body.querySelectorAll("pre code").forEach(el=>
                {
                  hljs.highlightElement(el);
                });
            });
        });
}

function openImage(title, url){
    
    openPostContent( `<h1 style="margin-bottom: 2em">${title}</h1>
    <img src="${url}"/>
      
    `, null, 'padding: 1em;');
}
