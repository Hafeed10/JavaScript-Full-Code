$("button").click(function () { 
    // $("h1").addClass("hello");
    // $("h1").removeClass("hi");
    // $("h1").toggleClass("hi")
    if($("h1").hasClass("hi")){
        console.log("hi");
    }else{
        console.log("error");
    }
});