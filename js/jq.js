function number1(){
    alert("js被使用")
}
var music = document.querySelector('.music-list');
music.addEventListener('click',function(){
    setInterval(function(){
        var timer = music.style.height = music.offsetheight+5+'px';
        if(music.offsetheight >= 180){
            clearInterval(timer);
        }
    },30);
})