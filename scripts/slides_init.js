!function () {
    var view=document.querySelector('#mySlides')
    var controller={
        view:null,
        swiper:null,
        swiperOptions:{
            loop: true,
                    pagination: {
                        el: '.swiper-pagination',
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                    scrollbar: {
                        el: '.swiper-scrollbar',
                    },
        },
        init:function (view) {
            this.view=view
            this.initSwiper()
            // this.openURL('#myNav','https://yorkhan.github.io/myNav/index.html')
            // this.openURL('#canvas','https://yorkhan.github.io/canvas_demo/index.html')
            // this.openURL('#appleSlides','https://yorkhan.github.io/Gallery/index.html')
            
        },
        initSwiper:function () {
                this.swiper = new Swiper (
                    view.querySelector('.swiper-container'), 
                    this.swiperOptions
            )
        },
        openURL(selector,url){
            document.querySelector(selector).onclick=function(){
                console.log(1)
                window.location.assign(url);
            }
        }
    }
    controller.init(view)
}.call()