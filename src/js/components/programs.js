(function () {
  var program = document.getElementsByClassName("program");
  var tab = document.getElementsByClassName("tab");

  [].forEach.call(program, function(item) {
      item.addEventListener('click', function () {
          for (var i = 0; i < tab.length; i++) {
              if (this == program[i]) {
                  tab[i].classList.add("show");
                  this.classList.add("active-tab");
              } else {
                program[i].classList.remove("active-tab");
                tab[i].classList.remove("show");
              }
          }
      });
  });
})();
