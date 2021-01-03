let burger = document.getElementsByClassName('label_burger')[0];
let cross = document.getElementsByClassName('label_cross')[0];
let body = document.getElementsByClassName('body')[0];
let navLink = document.querySelectorAll('.nav-item-link');
let nav = document.getElementsByClassName('nav')[0];




burger.addEventListener('click', () => {
  if(burger.classList.contains('label_burger')) {
    nav.classList.toggle('active')
    burger.classList.toggle('dn')
    cross.classList.toggle('db')
    body.classList.toggle("overflowHidden")
  }
})
cross.addEventListener('click', () => {
  if(nav.classList.contains('active')) {
    nav.classList.toggle('active')
    burger.classList.toggle('dn')
    cross.classList.toggle('db')
    body.classList.remove('overflowHidden')
  }
})

for(navs of navLink) {
  navs.addEventListener('click', () => {
    if(body.classList.contains('overflowHidden')) {
      body.classList.toggle('overflowHidden')
      nav.classList.toggle('active')
      burger.classList.toggle('dn')
      cross.classList.toggle('db')
    }
  })
}



//burger.addEventListener("click", function () {
//  if(this.classList.contains("label_burger")) {
//    body.classList.toggle("overflowHidden")
//  }
//})

//cross.addEventListener("click", function() {
//  if(body.classList.contains('overflowHidden')) {
//    body.classList.remove('overflowHidden')
//  }
//})



// animation-navigation
let header = document.getElementsByClassName('header')[0];
let scrollPrev = 0;

window.addEventListener('scroll', () => {
  let scrolled = window.scrollY
  if( scrolled > 50 && scrolled > scrollPrev) {
    header.classList.add('hide')
  }
  else {
      header.classList.remove('hide')
  }
  scrollPrev = scrolled;
})



const animItems = document.querySelectorAll(".anim_items");

if (animItems.length > 0) {
  window.addEventListener('scroll', animOnScroll);
  function animOnScroll() {
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 5;

       let animItemPoint = window.innerHeight - animItemHeight / animStart;
       if (animItemHeight > window.innerHeight) {
         animItemPoint = window.innerHeight - window.innerHeight / animStart;
       }

       if ((pageYOffset > animItemOffset - animItemPoint ) && pageYOffset < ( animItemOffset + animItemHeight )) {
         animItem.classList.add("_active")

       } else {
         if(!animItem.classList.contains("anim_no_hide")) {
          animItem.classList.remove("_active")
         }
       }
    }
  }
  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
  }
  setTimeout(() => {
    animOnScroll()
  }, 300)
}



const smoothLinks = document.querySelectorAll('a[href^="#"]');

  for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');
        setTimeout(()=> {
          document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }, 500)

    });
  };

