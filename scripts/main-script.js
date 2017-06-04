$(function () {
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
<<<<<<< HEAD
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
    $("#omTxt").hide();
    $("#hamburgerContainerTwo").hide();
    var $hamburger = $(".hamburger");
    $hamburger.on("click", function () {
        $("#viewContainer, #omTxt").toggle()
            //$("#hamburgerContainer, #hamburgerContainerTwo").toggle();
        $hamburger.toggleClass("is-active");
    });
    //set up width and height of draggable container according to view container and draggable size
    var dragContainerWidth = $("#viewContainer").innerWidth() + ($('#draggable').outerWidth() - $("#viewContainer").innerWidth()) * 2;
    var dragContainerHeight = $("#viewContainer").innerHeight() + ($('#draggable').outerHeight() - $("#viewContainer").innerHeight()) * 2;
    $("#draggableContainer").css("width", dragContainerWidth);
    $("#draggableContainer").css("height", dragContainerHeight);
    //set up position of draggable container according to view container and draggable size
    var dragContainerOffsetLeft = $("#viewContainer").offset().left + $("#viewContainer").outerWidth() / 2 + $("#viewContainer").innerWidth() / 2 - $('#draggable').outerWidth();
    var dragContainerOffsetTop = $("#viewContainer").offset().top + $("#viewContainer").outerHeight() / 2 + $("#viewContainer").innerHeight() / 2 - $('#draggable').outerHeight();
    $("#draggableContainer").offset({
        left: dragContainerOffsetLeft
        , top: dragContainerOffsetTop
    });
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
=======
            }
        )
*/
    document.body.className += " fade-out";
    $(function () {
        $("body").removeClass("fade-out");
    });
    $("#omTxt").hide();
    $("#hamburgerContainerTwo").hide();
    var $hamburger = $(".hamburger");
    $hamburger.on("click", function () {
        $("#viewContainer, #omTxt").toggle()
            //$("#hamburgerContainer, #hamburgerContainerTwo").toggle();
        $hamburger.toggleClass("is-active");
    });
    //set up width and height of draggable container according to view container and draggable size
    var dragContainerWidth = $("#viewContainer").innerWidth() + ($('#draggable').outerWidth() - $("#viewContainer").innerWidth()) * 2;
    var dragContainerHeight = $("#viewContainer").innerHeight() + ($('#draggable').outerHeight() - $("#viewContainer").innerHeight()) * 2;
    $("#draggableContainer").css("width", dragContainerWidth);
    $("#draggableContainer").css("height", dragContainerHeight);
    //set up position of draggable container according to view container and draggable size
    var dragContainerOffsetLeft = $("#viewContainer").offset().left + $("#viewContainer").outerWidth() / 2 + $("#viewContainer").innerWidth() / 2 - $('#draggable').outerWidth();
    var dragContainerOffsetTop = $("#viewContainer").offset().top + $("#viewContainer").outerHeight() / 2 + $("#viewContainer").innerHeight() / 2 - $('#draggable').outerHeight();
    $("#draggableContainer").offset({
        left: dragContainerOffsetLeft
        , top: dragContainerOffsetTop
    });
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
        .draggable({
            axis: "x"
            , containment: "#draggableContainer"
        }).css({
            cursor: "pointer"
        })
    $(".drag")
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
        >>>>>>> a8bee31243c441f03673e05a55bb92b683abdccf
                        )
                */
        .draggable({
            axis: "x"
            , containment: "#draggableContainer"
        }).css({
            cursor: "pointer"
        })
    $(".drag")
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
        .draggable({
            //containment: "#container"
        }).css({
            cursor: "pointer"
        })
    $(".blue").on({
        click: function () {
            $(this)
            var audio = new Audio("../prosjekt/sounds/seblatter.ogg");
            audio.play();
        }
        , mouseenter: function () {
            $(this)
        }
        , mouseleave: function () {
            $(this)
        }
    , })
    $(".red").on({
        click: function () {
            $(this)
            var audio = new Audio("../prosjekt/sounds/annalatter.ogg");
            audio.play();
        }
        , mouseenter: function () {
            $(this)
        }
        , mouseleave: function () {
            $(this)
        }
    })
    $(".green").on({
        click: function () {
            $(this)
            var audio = new Audio("../prosjekt/sounds/barnelatter3.ogg");
            audio.play();
        }
    })
    $(".yellow").on({
        click: function () {
            $(this)
            var audio = new Audio("../prosjekt/sounds/latter.ogg");
            audio.play();
        }
    })
    $(".purple").on({
        click: function () {
            $(this)
            var audio = new Audio("../prosjekt/sounds/marlenelatter.ogg");
            audio.play();
        }
    })
    $(".brown").on({
        click: function () {
            $(this)
            var audio = new Audio("../prosjekt/sounds/mikelatter.ogg");
            audio.play();
        }
    })
    $(".redAndYellow").on({
        click: function () {
            $(this)
            var audio = new Audio("../prosjekt/sounds/saralatter.ogg");
            audio.play();
        }
    })
    $(".purpleAndYellow").on({
        click: function () {
            $(this)
            var audio = new Audio("../prosjekt/sounds/barnelatter.ogg");
            audio.play();
        }
    })
    $(".redAndBlue").on({
        click: function () {
            $(this)
            var audio = new Audio("../prosjekt/sounds/barnelatter2.ogg");
            audio.play();
        }
    })
    $("redAndYellow").on({
        mouseenter: function () {
            $(this).not(".getting-bigger").addClass("getting-bigger").animate({
                width: "+=100px";
            }, 1000);
        }
        , mouseleave: function () {
            $(this).not(".getting-smaller").addClass("getting-smaller").animate({
                width: "-=100px";
            }, 1000, function () {
                $(this).removeClass("getting-bigger getting-smaller");
            })
        }
    })
});