
const preloader = document.querySelector('.page-preloder')
window.addEventListener('load',(e)=>{
preloader.classList.add('hide-page-preloder')
})





const navbar = document.querySelector('.home')
window.addEventListener('scroll',()=>{
navbar.classList.toggle('fixed-nav',window.scrollY>0)
})

const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".mobile-slider");

toggleBtn.addEventListener("click", function () {
  
    sidebar.classList.toggle("active-mobile-slider");
    const link = document.querySelector('.sidebar-links')
    const x = link.children
for (let i = 0; i < x.length; i++) {
    const element = x[i];

   element.addEventListener('click',(e)=>{
      setTimeout(() => {
    sidebar.classList.remove("active-mobile-slider");
      }, 200);

   })
    
}
});

closeBtn.addEventListener("click", function () {
    sidebar.classList.remove("active-mobile-slider");

});


const qBtn = document.querySelectorAll('.plus-minus-bts')
const ansContainer = document.querySelector('.quistion-s-box')


qBtn.forEach((e) => {

    e.addEventListener('click', (val) => {
        const openIt = val.currentTarget.parentElement.parentElement
        openIt.classList.toggle('quition-active')
    })
})
$('.counter').counterUp({
    delay: 10,
    time: 1000,
    offset: 70,
    // beginAt: 100,
    formatter: function (n) {
        return n.replace(/,/g, '.');
    }
});