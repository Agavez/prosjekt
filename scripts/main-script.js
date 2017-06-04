$(function () {
    $("#omTxt").hide();
    $("#hamburgerContainerTwo").hide();
    var $hamburger = $(".hamburger");
    $hamburger.on("click", function () {
        $("#viewContainer, #omTxt").toggle()
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
    $("#draggable").draggable({
        axis: "x"
        , containment: "#draggableContainer"
    }).css({
        cursor: "pointer"
    })
    $(".drag").draggable(
            //{
            //	containment: ".figureContainer"
            //}
        ).css({
            cursor: "pointer"
        })
        //colors
    $(".blue").on({
        click: function () {
            $(this)
            var audio = new Audio("../prosjekt/sounds/seblatter.ogg");
            audio.play();
        }
        , mouseenter: function () {
            $(this).not(".getting-bigger").addClass("getting-bigger").animate({
                width: "+=50%"
            }, 500)
        }
        , mousedown: function () {
            $(this)
        }
        , mouseleave: function () {
            $(this).not(".getting-smaller").addClass("getting-smaller").animate({
                width: "-=50%"
            }, 500, function () {
                $(this).removeClass("getting-bigger getting-smaller");
            })
        }
    })
    $(".red").on({
        click: function () {
            $(this)
            var audio = new Audio("../prosjekt/sounds/marlenelatter.ogg");
            audio.play();
        }
        , mouseenter: function () {
            $(this).animate({
                width: "+=20%"
                , height: "auto"
            }, 500)
        }
        , mousedown: function () {}
        , mouseleave: function () {
            $(this).animate({
                width: "-=20%"
                , height: "auto"
            }, 500)
        }
    })
    $(".green").on({
        click: function () {
            $(this)
            var audio = new Audio("../prosjekt/sounds/saralatter.ogg");
            audio.play();
        }
        , mouseenter: function () {
            $(this).animate({
                width: "+=20%"
                , height: "auto"
            }, 500)
        }
        , mousedown: function () {}
        , mouseleave: function () {
            $(this).animate({
                width: "-=20%"
                , height: "auto"
            }, 500)
        }
    })
    $(".yellow").on({
        click: function () {
            $(this)
            var audio = new Audio("../prosjekt/sounds/annalatter.ogg");
            audio.play();
        }
        , mouseenter: function () {
            $(this).animate({
                width: "+=20%"
                , height: "auto"
            }, 500)
        }
        , mousedown: function () {}
        , mouseleave: function () {
            $(this).animate({
                width: "-=20%"
                , height: "auto"
            }, 500)
        }
    })
    $(".purple").on({
        click: function () {
            $(this)
            var audio = new Audio("../prosjekt/sounds/mikelatter.ogg");
            audio.play();
        }
        , mouseenter: function () {
            $(this).animate({
                width: "+=20%"
                , height: "auto"
            }, 500)
        }
        , mousedown: function () {}
        , mouseleave: function () {
            $(this).animate({
                width: "-=20%"
                , height: "auto"
            }, 500)
        }
    })
    $(".brown").on({
        click: function () {
            $(this)
            var audio = new Audio("../prosjekt/sounds/latter.ogg");
            audio.play();
        }
        , mouseenter: function () {
            $(this).animate({
                width: "+=20%"
                , height: "auto"
            }, 500)
        }
        , mousedown: function () {}
        , mouseleave: function () {
            $(this).animate({
                width: "-=20%"
                , height: "auto"
            }, 500)
        }
    })
    $(".redAndBlue").on({
        click: function () {
            $(this)
            var audio = new Audio("../prosjekt/sounds/barnelatter.ogg");
            audio.play();
        }
        , mouseenter: function () {
            $(this).animate({
                width: "+=20%"
                , height: "auto"
            }, 500)
        }
        , mousedown: function () {}
        , mouseleave: function () {
            $(this).animate({
                width: "-=20%"
                , height: "auto"
            }, 500)
        }
    })
    $(".redAndYellow").on({
        click: function () {
            $(this)
            var audio = new Audio("../prosjekt/sounds/barnelatter2.ogg");
            audio.play();
        }
        , mouseenter: function () {
            $(this).animate({
                width: "+=20%"
                , height: "auto"
            }, 500)
        }
        , mousedown: function () {}
        , mouseleave: function () {
            $(this).animate({
                width: "-=20%"
                , height: "auto"
            }, 500)
        }
    })
    $(".purpleAndYellow").on({
        click: function () {
            $(this)
            var audio = new Audio("../prosjekt/sounds/barnelatter3.ogg");
            audio.play();
        }
        , mouseenter: function () {
            $(this).animate({
                width: "+=20%"
                , height: "auto"
            }, 500)
        }
        , mouseleave: function () {
            $(this).animate({
                width: "-=20%"
                , height: "auto"
            }, 500)
        }
    })
});