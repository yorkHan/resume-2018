!function () {
    var view=document.querySelector('#MessageBoard')
    var model={
        fetch:function () {
            var query = new AV.Query('Messageboard');
            return query.find()
        },
        save:function(object){
            var Messageboard = AV.Object.extend('Messageboard');
            var message = new Messageboard();
            return message.save(object)
        },
        init:function () {
            var APP_ID = 'M9QQLN7KtQwtcCgoeHKCxf0X-gzGzoHsz';
            var APP_KEY = 'bQvAndiaTFoIlQgWpL2mWabK';
            AV.init({appId: APP_ID,appKey: APP_KEY });
        }
    }
    var controller={
        view:null,
        MessageList:null,
        init:function (view,model) {
            this.view=view
            this.MessageList=view.querySelector('#MessageList')
            this.form=view.querySelector('form')
            this.model=model
            this.model.init()
            this.loadMessages()
            this.bindEvents()
        },
        bindEvents:function(){
            this.form.addEventListener('submit',(e)=>{
                e.preventDefault()
                this.postMessage()
            })
        },
        postMessage:function(){
            let myForm=this.form
            let name=myForm.querySelector('input[name=name]').value
            let content=myForm.querySelector('input[name=content]').value
            this.model.save({'name':name,'content':content}).then(function (object) {
                var li=document.createElement('li')
                li.innerText=`${object.attributes.name}:${object.attributes.content}`
                var MessageList=document.querySelector('#MessageList')
                MessageList.appendChild(li)
                myForm.querySelector('input[name=content]').value=''
            })
        },
        loadMessages:function(){
            this.model.fetch().then((Messages) =>{
                let Array=Messages.map(item=>item.attributes)
                console.log(Array)
                Array.forEach(item => {
                    var li=document.createElement('li')
                    li.innerText=`${item.name}:${item.content}`
                    this.MessageList.appendChild(li)
                });
            });
        }
    }
    controller.init(view,model)
}.call()
