var width = 166;
var addition =2;
var intervalID= 0;

function decrease()
{
    clearInterval(intervalID)
    intervalID = setInterval(zoomout, 1)

}

function increase()
{
    clearInterval(intervalID)
    intervalID = setInterval(zoomin, 1)
}

function zoomin()
{
    if(width<1000)
    {
        width = width+addition;
        document.getElementById("candy").style.width = width;
        console.log(width)
    }

    else{
        clearInterval(intervalID)
    }
}

function zoomout()
{
    if(width>166)
{
    width= width-addition;
    document.getElementById("candy").style.width = width;
    console.log(width)

}
    else
    {
        clearInterval(intervalID)
    }
}
