
let i=0;
let images=[];
let time=4000;

//Image list
images[0]='Images/cab.jpg';
images[1]='Images/slide2.jpg';
images[2]='Images/pict.jpg';
images[3]='Images/vegfru.jpg';
images[4]='Images/background2.jpg';

function slideShow() {
    document.getElementById("image").src=images[i];

    if (i<images.length-1) {
        i++;
    }else {
        i=0;
    }
    setTimeout("slideShow()" , time);
}
window.onload= slideShow;


