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



// затримка після інімації
//const title = document.getElementsByClassName("content-block-title")[0];
//const direction = document.getElementsByClassName("content-block-direction")[0];

//title.addEventListener('click', () => {
//  if(title.classList.contains('content-block-title')) {
//    setTimeout(() => {
//      direction.classList.toggle('dn')
//    }, 600)
//  }
//})
//const title1 = document.getElementsByClassName("content-block-title1")[0];
//const direction1 = document.getElementsByClassName("content-block-direction1")[0];

//title1.addEventListener('click', () => {
//  if(title1.classList.contains('content-block-title1')) {
//    setTimeout(() => {
//      direction1.classList.toggle('dn')
//    }, 600)
//  }
//})
//const title2 = document.getElementsByClassName("content-block-title2")[0];
//const direction2 = document.getElementsByClassName("content-block-direction2")[0];

//title2.addEventListener('click', () => {
//  if(title2.classList.contains('content-block-title2')) {
//    setTimeout(() => {
//      direction2.classList.toggle('dn')
//    }, 600)
//  }


//})


const link1 = document.getElementsByClassName("content-block-title_name1")[0];
const direction1 = document.getElementsByClassName("content-block-direction1")[0];
const arrowDown1 = document.getElementsByClassName('arrowDown1')[0];
const arrowUp1 = document.getElementsByClassName('arrowUp1')[0];
link1.addEventListener('click', () => {
  if(direction1.classList.contains('dn')) {
    direction1.classList.toggle('dn')
    arrowDown1.classList.toggle('dn')
    arrowUp1.classList.toggle('dis')
    setTimeout(() => {
      direction1.classList.add('df')
        }, 100)
  } else {
    setTimeout(() => {
      direction1.classList.toggle('dn')
      arrowDown1.classList.toggle('dn')
      arrowUp1.classList.toggle('dis')
    }, 500)
    direction1.classList.toggle('df')
  }
})

const link2 = document.getElementsByClassName("content-block-title_name2")[0];
const direction2 = document.getElementsByClassName("content-block-direction2")[0];
const arrowDown2 = document.getElementsByClassName('arrowDown2')[0];
const arrowUp2 = document.getElementsByClassName('arrowUp2')[0];
link2.addEventListener('click', () => {
  if(direction2.classList.contains('dn')) {
    direction2.classList.toggle('dn')
    arrowDown2.classList.toggle('dn')
    arrowUp2.classList.toggle('dis')
    setTimeout(() => {
      direction2.classList.add('df')
        }, 100)
  } else {
    setTimeout(() => {
      direction2.classList.toggle('dn')
      arrowDown2.classList.toggle('dn')
      arrowUp2.classList.toggle('dis')
    }, 500)
    direction2.classList.toggle('df')
  }
})

const link3 = document.getElementsByClassName("content-block-title_name3")[0];
const direction3 = document.getElementsByClassName("content-block-direction3")[0];
const arrowDown3 = document.getElementsByClassName('arrowDown3')[0];
const arrowUp3 = document.getElementsByClassName('arrowUp3')[0];
link3.addEventListener('click', () => {
  if(direction3.classList.contains('dn')) {
    direction3.classList.toggle('dn')
    arrowDown3.classList.toggle('dn')
    arrowUp3.classList.toggle('dis')
    setTimeout(() => {
      direction3.classList.add('df')
        }, 100)
  } else {
    setTimeout(() => {
      direction3.classList.toggle('dn')
      arrowDown3.classList.toggle('dn')
      arrowUp3.classList.toggle('dis')
    }, 500)
    direction3.classList.toggle('df')
  }
})

const link4 = document.getElementsByClassName("content-block-title_name4")[0];
const direction4 = document.getElementsByClassName("content-block-direction4")[0];
const arrowDown4 = document.getElementsByClassName('arrowDown4')[0];
const arrowUp4 = document.getElementsByClassName('arrowUp4')[0];
link4.addEventListener('click', () => {
  if(direction4.classList.contains('dn')) {
    direction4.classList.toggle('dn')
    arrowDown4.classList.toggle('dn')
    arrowUp4.classList.toggle('dis')
    setTimeout(() => {
      direction4.classList.add('df')
        }, 100)
  } else {
    setTimeout(() => {
      direction4.classList.toggle('dn')
      arrowDown4.classList.toggle('dn')
      arrowUp4.classList.toggle('dis')
    }, 500)
    direction4.classList.toggle('df')
  }
})



//const title4 = document.getElementsByClassName("content-block-title4")[0];
//const direction4 = document.getElementsByClassName("content-block-direction4")[0];


//title4.addEventListener('click', () => {
//  if(title4.classList.contains('content-block-title4')) {
//    arrowDown.classList.toggle('dn')
//    arrowUp.classList.toggle('dis')
//    setTimeout(() => {
//      direction4.classList.toggle('dn')
//    }, 600)
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



//const smoothLinks = document.querySelectorAll('a[href^="#"]');

//  for (let smoothLink of smoothLinks) {
//    smoothLink.addEventListener('click', function (e) {
//        e.preventDefault();
//        const id = smoothLink.getAttribute('href');
//        setTimeout(()=> {
//          document.querySelector(id).scrollIntoView({
//            behavior: 'smooth',
//            block: 'start'
//          });
//        }, 500)
//    });
//  };

  $(document).ready(function() {
    $('a[href^="#"]').click(function(){
      let el = $(this).attr('href');
      $('html, body').animate({
        scrollTop: $(el).offset().top}, 1000);
        return false;
    });
  });