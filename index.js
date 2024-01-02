let heading = $("h1");
console.log(heading);

$("ul li a")
$("h1").slideUp();
$("h1").show([]);



 $(document).ready(function(){
   $("button").click(function(){
        alert("background color =" +
        $("p").css("background-color"));
    });
})
;
$(document).ready(function(){
    $("button").click(function(){
        $("p").css("background" , "yellow" );
    });
});
$(document).ready(function(){
    $("button").click(function(){
        $("p").toggle();
    });
});