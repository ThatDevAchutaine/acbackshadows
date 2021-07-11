function acbackshadows(options) {
    let images = document.querySelectorAll('.acbackshadows');

    if (options.shadow__type === 'hard')
        options.shadow__type = '0px'
    else
        options.shadow__type = '15px'

    images.forEach(image => {
        image.style.boxShadow = `10px 10px ${options.shadow__type} 1px rgba(0,0,0,0.12)`;

        if(options.padding) {
            image.style.padding = '1em';
        }
    })
}

module.exports.acbackshadows = acbackshadows;