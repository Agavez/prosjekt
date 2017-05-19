$(function(){
        
    $("#backscreen")
        .css(
            {
                width: "5000px",
                height: "2500px",
                backgroundColor: "green",
                cursor: "pointer",
                marginLeft: "-500px",
                marginTop: "-350px"
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
