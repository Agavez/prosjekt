$(function(){
    /*
    http://jsfiddle.net/UjztS/
    http://stackoverflow.com/questions/14316525/stop-dragging-when-edges-show-with-jquery
    */
    $("#backscreen")
        .css(
            {
                width: "300%",
                height: "100%",
                backgroundColor: "green",
                cursor: "pointer",
                marginLeft: "-500px"
            }
        )
        .draggable(
            {
                containment: "parent",
                start: function(){
                    $(this)
                },
                drag: function(){
                    $(this).css("background-color", "darkgreen")
                },
                stop: function(){
                    $(this).css("background-color", "green")
                }
            }
        )
    
    $(".images").on(
        {
            click: function(){
                $(this)
                    .animate(
                        {
                            width: "+=100px"
                        },
                    200
                    ) 
            },
            mouseenter: function(){
                $(this)
                    .effect("pulsate", {times: 5}, 1000)
            },
            mouseleave: function(){
                $(this)
                    .animate(
                        {
                            width: "-=100"
                        },
                    200
                )
                    .effect("shake", {times: 10}, 100)
            },
        }
    )
});
