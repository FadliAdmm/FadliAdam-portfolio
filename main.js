//humberger menu

//menangkap element input checkbox
const menuToggle= document.querySelector(".togle-menu input")
//menangkap element nav ul
const nav = document.querySelector("nav ul")
//membuat Event ketika di klik
menuToggle.addEventListener('click', function () {
  //Menambahkan class 
  nav.classList.toggle('slide')
});

//humberger menu end