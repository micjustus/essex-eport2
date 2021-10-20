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

function openText(title, url){
    
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
                var win = window.open();
                win.document.title = title;
                
                var div = win.document.createElement("div");
                div.innerText ="HELLO ==> " + data;

                win.document.body.appendChild(div);
            });
        });
}
