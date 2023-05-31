$(document).ready(function(){
  $("#signup-form").validate({
    rules:{
        name:{
            required:true,
            minlength:4,
            maxlength:12
        },
        emailAddress:{
            required:true,
            email:true
        },
      
        
    },
        messages:{
        name:{
        required:"Enter your Name"
        
    },
      emailAddress:{
       required:"mail id is required",
       email:"please enter valid mail id"
      },
   
}
})
})
