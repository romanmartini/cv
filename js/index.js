import setYear from './autocompleteProfileData.js';
import scrollSpy from './scrollSpy.js';
import toggleMenuClass from './toggleMenuClass.js';

document.addEventListener('DOMContentLoaded', e =>  {

    toggleMenuClass('#btnMenu','#navBar');
    scrollSpy();
    setYear('#year', '1993-6-9');

})