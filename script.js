function display_random_image() 
{
     var theImages = [{
        src: "/cutify/01.gif"
    }, {
        src: "/cutify/02.gif"
    }, {
       src: "/cutify/03.gif"
    }, {
        src: "/cutify/04.gif"
    }, {
       src: "/cutify/05.gif"
    }, {
        src: "/cutify/06.gif"
    }, {
       src: "/cutify/07.gif"
    }, {
        src: "/cutify/08.gif"
    }, {
       src: "/cutify/09.gif"
    }, {
        src: "/cutify/10.gif"
    }, {
       src: "/cutify/11.gif"
    }, {
        src: "/cutify/12.gif"
    }, {
       src: "/cutify/13.gif"
    }, {
        src: "/cutify/14.gif"
    }, {
       src: "/cutify/15.gif"
    }, {
        src: "/cutify/16.gif"
    }, {
       src: "/cutify/17.gif"
    }, {
        src: "/cutify/18.gif"
    }, {
       src: "/cutify/19.gif"
    }, {
        src: "/cutify/20.gif"
    }, {
       src: "/cutify/21.gif"
    }, {
        src: "/cutify/22.gif"
    }, {
       src: "/cutify/23.gif"
    }, {
        src: "/cutify/24.gif"
    }, {
       src: "/cutify/25.gif"
    }, {
        src: "/cutify/26.gif"
    }, {
       src: "/cutify/27.gif"
    }, {
        src: "/cutify/28.gif"
    }, {
       src: "/cutify/29.gif"
    }, {
        src: "/cutify/30.gif"
    }, {
       src: "/cutify/31.gif"
    }, {
        src: "/cutify/32.gif"
    }, {
       src: "/cutify/33.gif"
    }, {
        src: "/cutify/34.gif"
    }, {
       src: "/cutify/35.gif"
    }, {
        src: "/cutify/36.gif"
    }, {
       src: "/cutify/37.gif"
    }, {
        src: "/cutify/38.gif"
    }, {
        src: "/cutify/39.gif"
    }, {
        src: "/cutify/40.gif"
    }, {
        src: "/cutify/41.gif"
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