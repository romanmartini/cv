export default function scrollSpy() {
 
    const $section = document.querySelectorAll('section[data-scroll-spy]');

    console.log($section)

    const cb = (entries) => {

        entries.forEach(entry => {
            const id = entry.target.id

            if(entry.isIntersecting){
                document.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.add('active')
                console.log('enrada: ', id, 'visible')
            }else{
                document.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.remove('active')
                console.log('enrada: ', id, 'no visible')

            }
        })
    }


    const observer = new IntersectionObserver(cb, {
        threshold: [1.0, 0.6, 0.2, 0.5]


    })

    $section.forEach(elm => observer.observe(elm))
}