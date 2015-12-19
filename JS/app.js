  $(document).ready(function(){


    $('.dropdown').on('click','a', function(event){
      event.preventDefault();
      console.log(this);
      $(this).closest('.dd-content').css('display','none');
    });
    $('.dropdown').hover(
      function(){
        $(this).find('.dd-content').css('display','block');
      },
      function(){
        $(this).find('.dd-content').css('display','none');
    });
  });
