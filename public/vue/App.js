 //manage database
 const database = firebase.database();
 const messageRef=database.ref("message");

 new Vue({
     el:"#comment",
     data:{
         messageText:'อากาศดีมาก',
         messages:[],
         name:'wut'
     },
     methods:{
        storeMessage:function () {
            // this.messages.push({text:this.messageText,name:this.name})
            // console.log(this.messages);
            // this.messageText=''
            messageRef.push({text:this.messageText,namee:this.name})
            this.messageText=''
            // console.log(this.messages);
        }
     },
     created(){
         
     }
 })