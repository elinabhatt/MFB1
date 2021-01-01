var members = ["Geeta Bhatt (Mom)", "Elina Bhatt (Me)"];

var images = [
  "https://i.postimg.cc/Y9vbHcdS/my-momma-s-pic.jpg",
  "https://i.postimg.cc/cL17WyHN/good-ic-of-moi.jpg"
];

var i = 0;
function nextslide() {
  document.getElementById("r1").innerHTML = members[i];
  document.getElementById("album").src = images[i];
  i++;
}

  
  