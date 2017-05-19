$(function(){
        
    $("#backscreen")
        .css(
            {
                width: "2000px",
                height: "1500px",
                backgroundColor: "green",
                cursor: "pointer",
                marginLeft: "-500px",
                marginTop: "-250px"
            }
        )
        .draggable(
            {
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
});
