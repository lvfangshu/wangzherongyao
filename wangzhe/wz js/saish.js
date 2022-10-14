let main = document.getElementById('main_sub'),

  lis = main.querySelectorAll(".item_subnav2 li"),
  divList = document.querySelectorAll('#main_sub>div');

console.log(lis);

console.log(divList);
for (var i = 0; i < lis.length; i++) {
  (function (n) {
    lis[n].onmouseenter = function () {
      return change(n)
    }
  })(i)
}
function change(n) {
  for (var j = 0; j < lis.length; j++) {

    divList[j].className = ""
  }

  divList[n].className = "active"
}