function myFunction() {
    var x = document.getElementById("menu");
    if (x.className === "list") {
      x.className += " open";
    } else {
      x.className = "list";
    }
  }