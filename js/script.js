var header = document.querySelector("header");
window.addEventListener("scroll", function () {

  header.classList.toggle("sticky", window.scrollY > 0)
})

if (window.scrollY > 0) {
  header.classList.add("sticky")
}



  AOS.init({
    once:true,
  });
