!function () {
    var aCard=document.querySelectorAll('[data-x]')
    for(let i=0;i<aCard.length;i++){
        aCard[i].classList.add('offset')
    }
    function animation(){
        var aCard=document.querySelectorAll('[data-x]')
        var mindex=0
        for(let i=1;i<aCard.length;i++){
            if(Math.abs(aCard[i].offsetTop-window.scrollY)<Math.abs(aCard[mindex].offsetTop-window.scrollY)){
                aCard[i].classList.remove('offset')
            }
        }
        aCard[mindex].classList.remove('offset')
        var id=aCard[mindex].id
        var site=document.querySelector('a[href="#'+id+'"]')
        var li=site.parentNode
        var bothers=li.parentNode.children
        for(var i=0;i<bothers.length;i++){
            bothers[i].classList.remove('highlight')
        }
        li.classList.add('highlight')
    }
    window.addEventListener('scroll',function () {
        setTimeout(function(){
            animation()
        },800)
    }) 
}.call()