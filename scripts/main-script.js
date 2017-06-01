$(function(){
/*
    http://jsfiddle.net/UjztS/
    http://stackoverflow.com/questions/14316525/stop-dragging-when-edges-show-with-jquery
*/
/*
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
*/
	
	ion.sound({
		sounds: [
			{name: "barnelatter"},
		],
		
		path: "../../sounds/",
		preload: true,
		multiplay: true,
		volume: 0.9
	});
    
//set up width and height of draggable container according to view container and draggable size
	var dragContainerWidth = $("#viewContainer").innerWidth() + ($('#draggable').outerWidth() - $("#viewContainer").innerWidth()) * 2;
	
	var dragContainerHeight = $("#viewContainer").innerHeight() + ($('#draggable').outerHeight() - $("#viewContainer").innerHeight()) * 2;

	$("#draggableContainer").css("width",dragContainerWidth);
	$("#draggableContainer").css("height",dragContainerHeight);

//set up position of draggable container according to view container and draggable size

	var dragContainerOffsetLeft = $("#viewContainer").offset().left + $("#viewContainer").outerWidth()/2 + $("#viewContainer").innerWidth()/2 - $('#draggable').outerWidth();
	
	var dragContainerOffsetTop = $("#viewContainer").offset().top + $("#viewContainer").outerHeight()/2 + $("#viewContainer").innerHeight()/2 - $('#draggable').outerHeight();

	$("#draggableContainer").offset(
        {
            left: dragContainerOffsetLeft,
            top: dragContainerOffsetTop
        }
    );
	
//activate draggable
	$("#draggable")
/*.css(
            {
                width: "200%",
                height: "100",
                backgroundColor: "green",
                cursor: "pointer",
                marginLeft: "-100%",
                border: "10px solid black"
            }
        )
*/
        .draggable(
		{
			containment: "#draggableContainer"
		}
	)
		.css(
		{
			cursor: "pointer"
		}
	)
	
    $(".images")
/*
		.on(
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
*/
		.draggable(
		{
			containment: "parent"
		}
	)
		.css(
		{
			cursor: "pointer"
		}
	)
	
	$(".blue")
		.on(
        {
            click: function(){
                $(this)
				ion.sound.play("barnelatter");
            },
            mouseenter: function(){
                $(this)
                    .effect("pulsate", {times: 5}, 7500)
            },
            mouseleave: function(){
                $(this)
                    .effect("shake", {times: 10}, 100)
            },
        }
    )
	
	$(".red")
		.on(
		{
			click: function(){
				$(this)
			},
			mouseenter: function(){
				$(this)
					.effect("bounce", {times: 2}, 1000)
			},
			mouseleave: function(){
				$(this)
			}
		}
	)
	
});
