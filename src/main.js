import setYear from './autocompleteProfileData.js';
import scrollSpy from './scrollSpy.js';
import toggleMenuClass from './toggleMenuClass.js';
import { GetUserByIdApplication } from './features/application/get-user-by-id.js'

document.addEventListener('DOMContentLoaded', e =>  {
    toggleMenuClass('#btnMenu','#navBar');
    scrollSpy();
    setYear('#year', '1993-6-9');
    const getUserByIdApplication = new GetUserByIdApplication();
    const user = getUserByIdApplication.execute(1)
    console.log(user)

})