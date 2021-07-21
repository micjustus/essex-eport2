function loadNotFound(){
    fetch("notfound.html")
    .then(function(data){return data.text()})
    .then(function(html2){
        document.getElementById("unit-content").innerHTML = html2 ;
    });
}

function scrollContent(evt, doc){
    evt.preventDefault();
 
    var value = evt.srcElement.href;
    if (!value){
        loadNotfound();
    }
    else{
        fetch(value)
        .then(response=>{
            if (!response.ok)              
                return "";
           
            return response.text();
        })
        .then(function(html){
            if (!html){
               loadNotFound();
            }
            else{
                // we want to format the content of the google doc section, so do that here
                document.getElementById("unit-content").innerHTML = html;
                formatGoogleDoc(evt.srcElement.getAttribute("data-doc"));
            }
        });
    }
}

function initialize(){
    var elems = document.querySelectorAll(".units-block li");
    elems.forEach(elm => {
        elm.addEventListener("click", scrollContent);
    });

    var nav = document.querySelector("#sidebar");

    var blank = document.querySelector("#blank_sidebar");
    if (blank){
    blank.style["height"] = nav.scrollHeight.toString();
    blank.style["width"]  = nav.scrollWidth.toString();
    }

}

initialize();
