jQuery('.sign-up-form').on('submit', function(event){
    event.preventDefault();
    jQuery.ajax({
       type : 'POST',
       url  : '/path/to/file.php',
       data : jQuery('.sign-up-form').serialize(),
       beforeSend: function(){
       jQuery("#error").fadeOut();
    },
       success :  function(response){
         var left_position = $("body").width()/2 - $("#popup").width()/2;
         $("#gray-panel").fadeIn("slow");
         $("#popup").css("left", left_position).fadeIn("slow");
       }
    });
});