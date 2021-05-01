import scrollSpy from './scrollSpy.js';
import toggleMenuClass from './toggleMenuClass.js';

document.addEventListener('DOMContentLoaded', e =>  {

    toggleMenuClass('#btnMenu','#navBar');
    scrollSpy();

})