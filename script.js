const menu = document.querySelector('.menu');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const iconBars = document.querySelector('.fa-bars');
const iconClose = document.querySelector('.fa-xmark');

hamburgerMenu.addEventListener('click', displayMenu);

menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        if(menu.classList.contains('absolute')){
            displayMenu();
        }
    });
});

function displayMenu() {
    if(menu.classList.contains('absolute')){
        menu.classList.add('hidden');
        
        iconBars.classList.remove('hidden');
        iconClose.classList.add('hidden');

        menu.classList.remove('absolute');
        menu.classList.remove('top-14');
        menu.classList.remove('w-full');
        menu.classList.remove('left-0');
        menu.classList.remove('bg-slate-800');
        menu.classList.remove('divide-gray-900');
        menu.classList.remove('divide-y-2');
    }else{
        menu.classList.remove('hidden');
        
        iconBars.classList.add('hidden');
        iconClose.classList.remove('hidden');

        menu.classList.add('absolute');
        menu.classList.add('top-14');
        menu.classList.add('w-full');
        menu.classList.add('left-0');
        menu.classList.add('bg-slate-800');
        menu.classList.add('divide-gray-900');
        menu.classList.add('divide-y-2');
    }
}