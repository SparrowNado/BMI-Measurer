$( index.html ).ready(function(){
    let images = [
         "fitness 1",
         "fitness2 2",
         "fitness3 3",
    ];
    var i = 0;
    window.setInterval(function(){
         $('.switchpic'). attr("src", images[i]);
         i = (i==images.length-1) ? 0 : i+1;
    }, 5000);
});