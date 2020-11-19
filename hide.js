
    // document.addEventListener('click', function(event) {
    //     const elem = event.target;
    //     if (elem.ClassName === 'hide') {
    //         elem.parentElement.style.animationPlayState = 'running';
    //         elem.parentElement.addEventList
    //     }
    // });


// If hide button is clicked, delete the post
document.addEventListener('click', event => {

    // Find what was clicked on
    const element = event.target;

    // Check if the user clicked on a hide button
    if (element.className === 'hide') {
        element.parentElement.style.animationPlayState = 'running';
        //element.parentElement.addEventList
    }
    
});