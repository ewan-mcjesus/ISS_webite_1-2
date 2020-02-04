
function going_up() {
    document.body.scrollTop  = 0 ;
    document.documentElement.scrollTop = 0;

}
    var i =4;

function img_carousel()
{
    imagedata = ["dog1.jpeg","dog2.jpeg","dog3.jpeg","dog4.jpeg","dog5.jpeg"]
    i=(i+1)%5
    document.getElementById("img").src=imagedata[i];
}

