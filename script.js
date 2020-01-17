function display_random_image() {
    var num = 1 + Math.floor(40 * Math.random());
    var nums = num.toString();
    while(nums.length < 2)
        nums = '0' + nums;

    var w = document.body.clientWidth;
    var h = document.body.clientHeight;

    var x = Math.floor(w * Math.random());
    var y = Math.floor(h * Math.random());

    var img = new Image();
    img.src = 'cutify/' + nums + '.gif';
    img.style.position = 'absolute';
    img.style.top = y + 'px';
    img.style.left = x + 'px';

    document.body.appendChild(img);
}

function changecolor(id) {
  document.body.style.background = document.getElementById(id).innerHTML;
}

function change_font() {
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
