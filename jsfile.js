//popup window
function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
    var popup = document.getElementById("caret").innerHTML="&#xf0d8";
     
}
//working on footer dropdown and nav caret(forget about that for now)

//caret up and down


//Question:  I don't have a .show class in my index.  I do have one in 
//css and javascript.  Does/how does .show connect css and js, wo index class

//footer date of birth dropdown---needs coded to html elements
$(document).ready(function(){
  $(".dropdown").on("hide.bs.dropdown", function(){
    $(".btn").html(' <span class="caret"></span>');
  });
  $(".dropdown").on("show.bs.dropdown", function(){
    $(".btn").html(' <span class="caret caret-up"></span>');
  });
});



//footer join button
