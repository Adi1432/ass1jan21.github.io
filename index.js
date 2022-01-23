var reviews = [
  {
    id: 1,
    name: "naturelover",

    pp: "https://images.pexels.com/photos/7654096/pexels-photo-7654096.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    posters:
      "https://images.pexels.com/photos/775201/pexels-photo-775201.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    id: 2,
    name: "Angel",

    pp: "https://images.pexels.com/photos/2346735/pexels-photo-2346735.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    posters:
      "https://images.pexels.com/photos/3014941/pexels-photo-3014941.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    id: 3,
    name: "Loverboy",

    pp: "https://images.pexels.com/photos/6719064/pexels-photo-6719064.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    posters:
      "https://images.pexels.com/photos/8908108/pexels-photo-8908108.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
];

var logo = document.querySelectorAll(".logopic");
var users = document.querySelectorAll(".author");
var posts = document.querySelectorAll(".posts");
var con = document.querySelectorAll(".containers");
var heart = document.querySelectorAll(".like");

function showDetails() {
  for (let i = 0; i < con.length; i++) {
    logo[i].src = reviews[i].pp;
    users[i].innerText = reviews[i].name;
    posts[i].src = reviews[i].posters;
  }
}
showDetails();

for (let i = 0; i < heart.length; i++) {
  heart[i].addEventListener("click", function () {
    heart[i].classList.toggle("red");
  });
}

for (let i = 0; i < posts.length; i++) {
  posts[i].addEventListener("dblclick", function () {
    heart[i].classList.add("red");
  });
}
