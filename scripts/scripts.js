    $("#carouselButton").click(function(){
        if ($("#carouselButton").children("span").hasClass('fa-pause')) {
                    $("#mycarousel").carousel('pause');
                    $("#carouselButton").children("span").removeClass('fa-pause');
                    $("#carouselButton").children("span").addClass('fa-play');
                }
                else if ($("#carouselButton").children("span").hasClass('fa-play')){
                    $("#mycarousel").carousel('cycle');
                    $("#carouselButton").children("span").removeClass('fa-play');
                    $("#carouselButton").children("span").addClass('fa-pause');                    
                }
            });
            
        <!-- Triggering Reserve a Table Modal --> 
            $("#b1").click(function(){
                $("#booktable").modal('show');
                
            });
            
            <!-- Triggering Login modal -->
            
    $("#b2").click(function(){
                $("#loginModal").modal('show');
            });
         
    $("#cancel1").click(function(){
                $("#loginModal").modal('toggle');
            });
            
            $("#cancel11").click(function(){
                $("#loginModal").modal('toggle');
            });

     $("#cancel2").click(function(){
                $("#booktable").modal('toggle');
            });
            
            $("#cancel21").click(function(){
                $("#booktable").modal('toggle');
            });
    