/*
 * Author      : Hapsari Tilawah
 * Author URI  : http://www.facebook.com/hapsaritilawah
 */


$(document).ready(function ()
{
    window.scrollTo(0, document.body.scrollHeight);
    $("#rocket").css('top', ($(window).height() - 670) + "px");
    $("#flame").css('top', ($(window).height() - 420) + "px");
    constellationsHovering();
    mapShowing();
    mapClicked();

    var d = false;
    $(window).scroll(function () {
        if ($(this).scrollTop() <= 150 && !d) {
            $("#rocket").css('position', 'absolute');
            $("#rocket").css('top', '200px');
            $("#rocket").removeClass('soar-animation');
            $("#flame").css('display', 'none');
            $('#smokemoon').css('display', 'block');
            setTimeout(function () {
                $('#smokemoon').css('display', 'none');
            }, 800);
            d = true;
        }
    });

    var audio = new Audio();
    if (audio.canPlayType("audio/ogg")) {
        audio.src = "sounds/take-off.ogg";
    } else {
        audio.src = "sounds/take-off.wav";
    }
    $(window).load(function () {
        $(".preload").delay(2500).fadeOut(500, function () {
            $(".content").css('visibility', 'visible');
            audio.play();
            takeoff();
        });
    });

});

$(window).unload(function () {
    window.scrollTo(0, document.body.scrollHeight);
    $("#rocket").css('top', ($(window).height() - 670) + "px");
    $("#flame").css('top', ($(window).height() - 420) + "px");
});


function takeoff() {
    $("body").scrollTop($("body").height());
    $('#cd3').fadeIn(400, function () {
        $('#cd3').fadeOut(400, function () {
            $('#cd2').fadeIn(400, function () {
                $('#cd2').fadeOut(400, function () {
                    $('#cd1').fadeIn(400, function () {
                        $('#cd1').fadeOut(400, function () {
                            $('#smokeearth').css('display', 'block');
                            setTimeout(function () {
                                $('#smokeearth').css('display', 'none');
                            }, 800);
                            $("#flame").css('display', 'block');
                            $("#rocket").addClass('soar-animation');
                            $("body,html").animate({scrollTop: 5000}, 1000);
                            $("#rocket").animate({top: "20px"}, 1000);
                            $("#flame").animate({top: "325px"}, 1000);
                            $("body").css('overflow-y', 'visible');
                        })
                    });
                });
            });
        });
    });
}

function mapClicked() {
    $("#kologdam").on('click', function () {
        if ($("#map").is(':hidden')) {
            $("#map").css('visibility', 'visible');
            $("#map").css('display', 'block');
            $('#kologdam').removeClass('shake-animation');
        } else {
            $("#map").css('visibility', 'hidden');
            $("#map").css('display', 'none');
            $('#kologdam').addClass('shake-animation');
        }
    });
}

function mapShowing() {
    $("#kologdam").mouseover(function () {
        $("#map").css('visibility', 'visible');
        $("#map").css('display', 'block');
        $('#kologdam').removeClass('shake-animation');
    });
    $("#kologdam").mouseout(function () {
        $("#map").css('visibility', 'hidden');
        $("#map").css('display', 'none');
        $('#kologdam').addClass('shake-animation');
    });
    $("#map").mouseover(function () {
        $("#map").css('visibility', 'visible');
        $("#map").css('display', 'block');
        $('#kologdam').removeClass('shake-animation');
    });
    $("#map").mouseout(function () {
        $("#map").css('visibility', 'hidden');
        $("#map").css('display', 'none');
        $('#kologdam').addClass('shake-animation');
    });
}

function constellationsHovering() {
    $("#ibnu").mouseover(function () {
        $(this).css('background-position', '0 -110px');
    });
    $("#ibnu").mouseout(function () {
        $(this).css('background-position', '0 0');
    });
    $("#sabil").mouseover(function () {
        $(this).css('background-position', '-305px -110px');
    });
    $("#sabil").mouseout(function () {
        $(this).css('background-position', '-305px 0');
    });
}

