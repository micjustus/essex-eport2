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
    var win = window.open(url, "google_reflections");

    // setTimeout( function(){
    //     win.document.title = title;
    //     var item = win.document.querySelector("#reflectorPdf")

    //     var em = item.querySelector("embed");
    //     em.src = url;
    //     /*
    //     var xhr = new XMLHttpRequest();
    //              xhr.open('GET', url, true);
    //              xhr.onload = function() {
    //                  // display response
    //                  item.innerHTML = xhr.responseText;
    //              };
    //              xhr.send();
    //     */
    // }, 200);   
}

