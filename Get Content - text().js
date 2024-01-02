let text = $("h1").text();
console.log(text);

let text1 = $("h1").html();
console.log(text);
$("input").on("change keyup", function(){
    let $this = $(this);
    console.log($this.val());


    if(parseInt($this.val()) >= 10 ){
        console.log("pass");
    } else{
        console.log("fail");
    }

   
    
 });








