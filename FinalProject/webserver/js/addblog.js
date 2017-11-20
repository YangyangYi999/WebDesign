
init(); // initjson
var addButton = document.getElementById('postblog'),
addStickyListener = function (evt) {
  
            var authorname =document.getElementById('authorinput').value;
            if(authorname ==""){
                alert("author name can't be empty");
               return false;
            }
            var letters = /^[A-Za-z]+$/;
            if (!/^[a-zA-Z]*$/g.test(authorname)) {
                alert("Author name should only contain letters");
                return false;
            }
            if(authorname.length>20){
                alert(" author name can't exceed 20 character");
                return false;
            }

            var titlename = document.getElementById('titleinput').value;
            if(titlename ==""){
                alert("title name can't be empty");
                return false;

            }

            if(titlename.length>20){
                alert("title length can't exceed 20 character");
                return false;
            }

            var contentinput = document.getElementById('contentinput').value;
            if(contentinput ==""){
                alert("write something before you commmit");
                return false;
            }
             if(contentinput.length >200){
                alert("too much content to commmit");
                return false;
             }
 
             var dateinput = document.getElementById('dateinput').value;
             if(dateinput ==""){
                alert("select a date");
                return false;

             }
            
             var blogarea = document.getElementById('blogarea');
             var newArticle = "<div class = 'box'> <article><h1 class= 'blog-title'>"
             +titlename
             +"</h1><p class= 'blog-content'>"
             +contentinput
             +"</p><p class = 'blog-author'>"
             +authorname
             +"</p><p class = 'blog-date'>"
             +dateinput
             +"</p></article></div>";
  
             var newdiv = document.createElement('div');
             newdiv.innerHTML = newArticle;
             blogarea.appendChild(newdiv);
   
};

//Add click event handler/listener
addButton.addEventListener('click', addStickyListener);

function loadJSON(callback) {   
    
        var xobj = new XMLHttpRequest();
            xobj.overrideMimeType("application/json");
        xobj.open('GET', 'oldblog.json', true); // Replace 'my_data' with the path to your file
        xobj.onreadystatechange = function () {
              if (xobj.readyState == 4 && xobj.status == "200") {
                // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
                callback(xobj.responseText);
              }
        };
        xobj.send(null);  
     }

     function init() {
        loadJSON(function(response) {
         // Parse JSON string into object
           var actual_JSON = JSON.parse(response);
          
           var items= actual_JSON.items;
           var blogarea = document.getElementById('blogarea');
           for(var i = 0;i<items.length;i++){
            console.log(actual_JSON.items[i].title); 
          
           


           var newArticle = "<div class = 'box'><article><h1 class= 'blog-title'>"
           +actual_JSON.items[i].title
           +"</h1><p class= 'blog-content'>"
           +actual_JSON.items[i].content
           +"</p><p class = 'blog-author'>"
           +actual_JSON.items[i].author
           +"</p><p class = 'blog-date'>"
           +actual_JSON.items[i].date
           +"</p></article></div>";

           var newdiv = document.createElement('div');
           newdiv.innerHTML = newArticle;
           blogarea.appendChild(newdiv);
           }
         
        });
       }
        