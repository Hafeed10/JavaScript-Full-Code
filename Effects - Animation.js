$("button").click(function () { 
    let div = $("div")
   div.animate({left:"250px",},3000);
   div.animate({ opacity:'0.5'},3000);
   div.animate({  height:'+=150px'},3000);

});
$("#stop").click(function(){
    div.stop();
})