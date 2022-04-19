function calcYearByCountLeaps(years, currentDate, dateOfBirth){
    
    const dayMs = 24 * 60 * 60 * 1000;
    let countLeapsIntoDays = Math.floor(years / 4) * dayMs;
    return Math.floor((currentDate - dateOfBirth - countLeapsIntoDays) / 1000 / 60 / 60 / 24 / 365);
}

function atuoYear(dateOfBirth){

    dateOfBirth = new Date(dateOfBirth);
    let currentDate = new Date();
    let years = (currentDate - dateOfBirth) / 1000 / 60 / 60 / 24 / 365;
    
    return calcYearByCountLeaps(years, currentDate, dateOfBirth)
}

export default function setYear(id, dateOfBirth){

    const $year = document.querySelector(id);
    $year.innerHTML = atuoYear(dateOfBirth) + ' Años'

}

