window.onscroll = function() {
    if (window.scrollY + window.innerHeight >= document.body.offsetHeight) {
        document.querySelector('body').style.background = 'white';
    }
    else {
        document.querySelector('body').style.background = 'red';
    }
};


// // Event listener for scrolling
//             window.onscroll = () => {

//                 // Check if we're at the bottom
//                 if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {

//                     // Change color to green
//                     document.querySelector('body').style.background = 'green';
//                 } else {

//                     // Change color to white
//                     document.querySelector('body').style.background = 'white';
//                 }

//             };