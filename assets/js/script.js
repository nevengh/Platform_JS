// Top Icon SCroll
let span = document.querySelector('.up');
window.onscroll=function () {
    if(this.scrollY>=1000){
        span.classList.add('show')
    }else{
        span.classList.remove('show')
    }
}

span.onclick =function (){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
}

/*
    PreLoading Page
*/

let load = document.querySelector('.preload')

function preLoader(){
    
    setInterval(() => {
        CircleOne.classList.remove('liight')
        circleTwo.classList.add('liight')
    }, 2000);
    setInterval(() => {
        circleTwo.classList.remove('liight')
        circleThree.classList.add('liight')
        CircleOne.classList.remove('liight')
        circleLast.classList.remove('liight')
    }, 3000);
    setInterval(() => {
        circleThree.classList.remove('liight')
        circleLast.classList.add('liight')
        
    }, 2000);
    setInterval(() => {
        CircleOne.classList.add('liight')
    }, 2000);

    setTimeout(()=>{
        
        load.style.display='none'
    },1000)
}


/* 
    Discount Div
*/
const discount =document.querySelector('.discount');
const closeBtn = document.querySelector('.close');
closeBtn.addEventListener('click',function(){
    discount.classList.add('remove')
})

/*
    Flags Menu
*/

const dropdownFlags = document.querySelectorAll('.dropdown-flag');

dropdownFlags.forEach(dropdown => {
    // console.log(dropdown);
    const select =document.querySelector('.select');
    const selected =document.querySelector('.selected');
    const caret =document.querySelector('.caret');
    const menu =document.querySelector('.menu');
    const option =document.querySelectorAll('.menu li');

    select.addEventListener('click',function(){
        select.classList.add('select-click');

        caret.classList.add('.caret-rotate');

        menu.classList.add('menu-open');
    })
    option.forEach(option =>{
        option.addEventListener('click',function(){
            selected.innerHTML =option.innerHTML;
                    select.classList.remove('select-click')
                    caret.classList.remove('caret-rotate')
                    menu.classList.remove('menu-open')
                    

                    // option.forEach(option =>{
                    //     option.classList.remove('active')
                    //     })
                    //     option.classList.add('active')
        })
        
    })
})


/*
    Mobile Circle light red
*/
const CircleOne = document.querySelector('.circle');
const circleTwo = document.querySelector('.circle-1');
const circleThree = document.querySelector('.circle-2');
const circleLast = document.querySelector('.circle-3');
console.log(circleLast);


var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

let output ='';
let cardWraper = document.querySelector('.card-wrapper')
const URL ='https://dummyjson.com/products';



fetch(URL)
.then(res => res.json())
.then(data => data.products.forEach((ele)=>{
    if(ele.id<7){
        output+=`
     <div class="cards swiper-slide mt-5">
        <div class="image-content">
            <span class="overlay"></span>
            <div class="card-image">
            <img src=".${ele.images}" alt="" class="card-img">
            </div>
        </div>
        <div class="card-content">
            <h2 class="name">${ele.brand}</h2>
            <div class="star text-center mt-4">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>
                            <div class="price text-center mt-4">
                                <span class="me-5">$ 935.03</span>
                                <del class="text-warning">$1,000.00</del>
                            </div>
        </div>
    </div>
    `
    }
    cardWraper.innerHTML=output
}))


