// //let sections= document.querySelectorAll('section');
// let navLinks=document.querySelectorAll('header nav a');


// window.onscroll=()=>{
//     sections.forEach(sect =>{
//         let top= window.scrollY;
//         let offset=sect.offsetTop - 150;
//         let height=sect.offsetHeight;
//         let id=sect.getAttribute('id');


//         if(top >= offset && top< offset+height){
//           navLinks.classList.remove('active')
//           document.querySelectorAll('header nav a[href*='+id+']').classlist.add('active');
//         }
//     })
// }

let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menuIcon.onclick=()=>{
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}




/*MUTLIPLE TEXT*/



//sticky navbar


let header=document.querySelector('header');

header.classList.toggle('sticky',window.scrollY>100)


menuIcon.classList.remove('bx-x');
navbar.classList.remove('remove')