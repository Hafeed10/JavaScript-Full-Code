$("button").click(function(){
//    console.log( $("h1").attr("data-number", 10));
$("h1").data("number", 20);
console.log($("h1").data("number"));
})