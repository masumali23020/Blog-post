const menuIcon = document.querySelector('#manu__icon')
const navManu = document.querySelector('#nav_manu');
console.log(navManu)
console.log(menuIcon,'rrrrr')



menuIcon.addEventListener('click', () =>{
    if(navManu.className === 'hidden'){
        navManu.classList.remove('hidden');

    }else{
        navManu.classList.add('hidden');
    }
})