const d = document;

export default function toggleMenuClass(btnMenu, navBar){

    d.addEventListener('click', e => {
        
        const $navBar = d.querySelector(navBar),
        $btnMenu = d.querySelector(btnMenu);

        if(e.target.matches(btnMenu)){
            $btnMenu.firstElementChild.classList.toggle('active')
            $btnMenu.lastElementChild.classList.toggle('active')
            $btnMenu.classList.toggle('active')
            $navBar.classList.toggle('active')

        }else if(e.target.classList.contains('menu-link')){ 

            $btnMenu.classList.remove('active')
            $navBar.classList.remove('active')
            $btnMenu.firstElementChild.classList.add('active')
            $btnMenu.lastElementChild.classList.remove('active')
            
        }else if(e.target.matches(navBar)){
            return false;
        }else{    
            $btnMenu.classList.remove('active')
            $navBar.classList.remove('active')
            $btnMenu.firstElementChild.classList.add('active')
            $btnMenu.lastElementChild.classList.remove('active')   
        }
    })
} 