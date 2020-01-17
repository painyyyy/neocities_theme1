function display_random_image() 
{
     var theImages = [{
        src: "01.gif"
    }, {
        src: "02.gif"
    }, {
       src: "03.gif"
    }, {
        src: "04.gif"
    }, {
       src: "05.gif"
    }, {
        src: "06.gif"
    }, {
       src: "07.gif"
    }, {
        src: "08.gif"
    }, {
       src: "09.gif"
    }, {
        src: "10.gif"
    }, {
       src: "11.gif"
    }, {
        src: "12.gif"
    }, {
       src: "13.gif"
    }, {
        src: "14.gif"
    }, {
       src: "15.gif"
    }, {
        src: "16.gif"
    }, {
       src: "17.gif"
    }, {
        src: "18.gif"
    }, {
       src: "19.gif"
    }, {
        src: "20.gif"
    }, {
       src: "21.gif"
    }, {
        src: "22.gif"
    }, {
       src: "23.gif"
    }, {
        src: "24.gif"
    }, {
       src: "25.gif"
    }, {
        src: "26.gif"
    }, {
       src: "27.gif"
    }, {
        src: "28.gif"
    }, {
       src: "29.gif"
    }, {
        src: "30.gif"
    }, {
       src: "31.gif"
    }, {
        src: "32.gif"
    }, {
       src: "33.gif"
    }, {
        src: "34.gif"
    }, {
       src: "35.gif"
    }, {
        src: "36.gif"
    }, {
       src: "37.gif"
    }, {
        src: "38.gif"
    }, {
        src: "39.gif"
    }, {
        src: "40.gif"
    }, {
        src: "41.gif"
    }];
    
    var preBuffer = [];
    for (var i = 0, j = theImages.length; i < j; i++) {
        preBuffer[i] = new Image();
        preBuffer[i].src = theImages[i].src;
    }
   
  function getRandomInt(min,max) 
    {  
	imn = Math.floor(Math.random() * (max - min + 1)) + min;
    return preBuffer[imn];
    }  

var newImage = getRandomInt(0, preBuffer.length - 1);

newImage.style.position = 'absolute';
newImage.style.top = document.body.clientHeight * Math.random() + 'px';
newImage.style.left = document.body.clientWidth * Math.random() + 'px';

document.body.appendChild(newImage);
}

function changecolor(id){
  document.body.style.background = document.getElementById(id).innerHTML;
}

function change_font(){
  let optionFont = document.getElementById('option-font'),
  body = document.getElementsByTagName('body');
    
  body[0].style.fontFamily = optionFont.value;
}

$(document).ready(function(){
  
  $("#small").click(function(event){
    event.preventDefault();
    $("h1").animate({"font-size":"24px"});
    $("h2").animate({"font-size":"16px"});
    $("p").animate({"font-size":"12px", "line-height":"16px"});
    
  });
  
  $("#medium").click(function(event){
    event.preventDefault();
    $("h1").animate({"font-size":"36px"});
    $("h2").animate({"font-size":"24px"});
    $("p").animate({"font-size":"14px", "line-height":"20px"});
    
  });
  
  $("#large").click(function(event){
    event.preventDefault();
    $("h1").animate({"font-size":"48px"});
    $("h2").animate({"font-size":"30px"});
    $("p").animate({"font-size":"16px", "line-height":"20px"});
    
  });
  
  $("#max").click(function(event){
    event.preventDefault();
    $("h1").animate({"font-size":"56px"});
    $("h2").animate({"font-size":"42px"});
    $("p").animate({"font-size":"24px", "line-height":"26px"});
    
  });

  $( "a" ).click(function() {
   $("a").removeClass("selected");
  $(this).addClass("selected");
  
 });

});
