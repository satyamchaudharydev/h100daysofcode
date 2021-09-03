function myFunction() {
    var checkBox = document.getElementById("toggle3");
    var text = document.querySelector(".para3");
    var fa  = document.querySelector(".fa3");
    if (checkBox.checked == true){
      text.style.display = "block";
      fa.style.color = "red";
    } else {
       text.style.display = "none";
       fa.style.transform = "rotate(0deg)"
    }}