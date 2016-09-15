var consulta = window.matchMedia('(max-width: 1000px)');
var redimension = window.matchMedia('(max-width: 1000px)');

function mediaQuery() {
    if (consulta.matches) {
        $(".primero").click(function () {
            $(".segundo").animate({
                "height": "0%",
                "min-height": "0px",
                "width": "100%"
            }, "slow");
            $(".tercero").animate({
                "height": "0%",
                "min-height": "0px",
                "width": "100%"
            }, "slow");
            $(".logo").hide("slow");
            $(".cuadro").hide("slow");
            $(this).animate({
                "height": "100%",
                "width": "100%"
            }, "slow");
        });
        $(".segundo").click(function () {
            $(".primero").animate({
                "height": "0%",
                "min-height": "0px",
                "width": "100%"
            }, "slow");
            $(".tercero").animate({
                "height": "0%",
                "min-height": "0px",
                "width": "100%"
            }, "slow");
            $(".mundo").hide("slow");
            $(".cuadro").hide("slow");
            $(this).animate({
                "height": "100%",
                "width": "100%"
            }, "slow");
        });
        $(".tercero").click(function () {
            $(".primero").animate({
                "height": "0%",
                "min-height": "0px",
                "width": "100%"
            }, "slow");
            $(".segundo").animate({
                "height": "0%",
                "min-height": "0px",
                "width": "100%"
            }, "slow");
            $(".mundo").hide("slow");
            $(".logo").hide("slow");
            $(this).animate({
                "height": "100%",
                "width": "100%"
            }, "slow");
        });
        $(".menu").click(function () {
            $(".primero").animate({
                "height": "33%",
                "min-height": "400px",
                "width": "100%"
            }, "slow");
            $(".segundo").animate({
                "height": "33%",
                "min-height": "400px",
                "width": "100%"
            }, "slow");
            $(".tercero").animate({
                "height": "33%",
                "min-height": "400px",
                "width": "100%"
            }, "slow");
            $(".logo").show("slow");
            $(".cuadro").show("slow");
            $(".mundo").show("slow");
        });

    } else {
        $(".primero").click(function () {
            $(".segundo").animate({
                "width": "0%",
                "min-height": "0px"
            }, "slow");
            $(".tercero").animate({
                "width": "0%",
                "min-height": "0px"
            }, "slow");
            $(".logo").hide("slow");
            $(".cuadro").hide("slow");
            $(this).animate({
                "width": "100%"
            }, "slow");
        });
        $(".segundo").click(function () {
            $(".primero").animate({
                "width": "0%",
                "min-height": "0px"
            }, "slow");
            $(".tercero").animate({
                "width": "0%",
                "min-height": "0px"
            }, "slow");
            $(this).animate({
                "width": "100%"
            }, "slow");
            $(".mundo").hide("slow");
            $(".cuadro").hide("slow");
        });
        $(".tercero").click(function () {
            $(".primero").animate({
                "width": "0%",
                "min-height": "0px"
            }, "slow");
            $(".segundo").animate({
                "width": "0%",
                "min-height": "0px"
            }, "slow");
            $(this).animate({
                "width": "100%"
            }, "slow");
            $(".mundo").hide("slow");
            $(".logo").hide("slow");
        });
        $(".menu").click(function () {
            $(".primero").animate({
                "width": "33%",
                "height": "100%",
                "min-height": "400px",
            }, "slow");
            $(".segundo").animate({
                "width": "33%",
                "height": "100%",
                "min-height": "400px",
            }, "slow");
            $(".tercero").animate({
                "width": "33%",
                "height": "100%",
                "min-height": "400px",
            }, "slow");
            $(".logo").show("slow");
            $(".cuadro").show("slow");
            $(".mundo").show("slow");
        });
    }
}

function valorDefecto() {
    if (redimension.matches) {
        $(".primero").css({
            "width": "100%",
            "height": "33%",
            "min-height": "400px"
        });
        $(".segundo").css({
            "width": "100%",
            "height": "33%",
            "min-height": "400px"
        });
        $(".tercero").css({
            "width": "100%",
            "height": "33%",
            "min-height": "400px"
        });
    } else {
        $(".primero").css({
            "height": "100%",
            "width": "33%",
            "min-height": "0px"
        });
        $(".segundo").css({
            "height": "100%",
            "width": "33%",
            "min-height": "0px"
        });
        $(".tercero").css({
            "height": "100%",
            "width": "33%",
            "min-height": "0px"
        });
        $(".logo").show("slow");
        $(".cuadro").show("slow");
        $(".mundo").show("slow");
    }
    $(".logo").show("slow");
    $(".cuadro").show("slow");
    $(".mundo").show("slow");
}

consulta.addListener(mediaQuery);
redimension.addListener(valorDefecto);
valorDefecto();
mediaQuery();
