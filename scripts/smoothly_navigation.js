!function () {
    var view=document.querySelector('nav.meau')
    var controller={
        view:null,
        aTags:null,
        init:function(view){
            this.view=view
            this.animateInit()
            this.bindEvents()
        },
        animateInit:function () {
            function animate(time) {
                requestAnimationFrame(animate);
                TWEEN.update(time);
                }
            requestAnimationFrame(animate);
        },
        bindEvents:function(){
            var aTags=this.view.querySelectorAll('nav.meau>ul>li.subMean>a')
            for(let i=0;i<aTags.length;i++){
                aTags[i].onclick=(x)=>{
                    x.preventDefault()
                    let a=x.currentTarget
                    let href=a.getAttribute('href')
                    let element=document.querySelector(href)
                    this.scrollToElement(element)
                }
            } 
        },
        scrollToElement:function(element) {
            let top=element.offsetTop
            let currentTop=window.scrollY
            var targetTop=top-80
            var distance=targetTop-currentTop
            var t=Math.abs(distance/100*300) 
            if(t>500){
                t=500
            }
            var coords = { y: currentTop}; 
            var tween = new TWEEN.Tween(coords) 
                    .to({ y: targetTop}, t) 
                    .easing(TWEEN.Easing.Quadratic.InOut) 
                    .onUpdate(function() { 
                        window.scrollTo(0,coords.y)
                    })
                    .start();
        },
    }
    controller.init(view)
}.call()
