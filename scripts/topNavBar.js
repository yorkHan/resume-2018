!function () {
    var view=document.querySelector('#topNavBar')
    var controller={
        view:null,
        init:function (view) {
            this.view=view
            this.bindEvents()
        },
        bindEvents:function () {
            var view=this.view
            window.addEventListener('scroll',()=>{
                if(window.scrollY>0){
                    this.active()
                }else{
                    this.deactive()
                }
            }) 
        },
        active:function () {
            this.view.classList.add('active')
        },
        deactive:function () {
            this.view.classList.remove('active')
        }
    }
    controller.init(view)
}.call()


var liTags=document.getElementsByClassName("subMean");
for(var i=0;i<liTags.length;i++){
    liTags[i].onmouseenter=function(x){
        x.currentTarget.classList.add('active')
    }
    liTags[i].onmouseleave=function(x){
        x.currentTarget.classList.remove('active')
    }
}