var consulta = window.matchMedia('(max-width: 1000px)');
consulta.addListener(mediaQuery);

function mediaQuery() {
    if (consulta.matches) {
        $(".primero").click(function () {
            $(".segundo").animate({
                "height": "0%",
                "min-height": "0px"
            }, "slow");
            $(".tercero").animate({
                "height": "0%",
                "min-height": "0px"
            }, "slow");
            $(".logo").hide("slow");
            $(".cuadro").hide("slow");
            $(this).animate({
                "height": "100%"
            }, "slow");
        });
        $(".segundo").click(function () {
            $(".primero").animate({
                "height": "0%",
                "min-height": "0px"
            }, "slow");
            $(".tercero").animate({
                "height": "0%",
                "min-height": "0px"
            }, "slow");
            $(".mundo").hide("slow");
            $(".cuadro").hide("slow");
            $(this).animate({
                "height": "100%"
            }, "slow");
        });
        $(".tercero").click(function () {
            $(".primero").animate({
                "height": "0%",
                "min-height": "0px"
            }, "slow");
            $(".segundo").animate({
                "height": "0%",
                "min-height": "0px"
            }, "slow");
            $(".mundo").hide("slow");
            $(".logo").hide("slow");
            $(this).animate({
                "height": "100%"
            }, "slow");
        });
        $(".menu").click(function () {
            $(".primero").animate({
                "height": "33%",
                "min-height": "400px"
            }, "slow");
            $(".segundo").animate({
                "height": "33%",
                "min-height": "400px"
            }, "slow");
            $(".tercero").animate({
                "height": "33%",
                "min-height": "400px"
            }, "slow");
            $(".logo").show("slow");
            $(".cuadro").show("slow");
            $(".mundo").show("slow");
        });

    } else {
        $(".primero").click(function () {
            $(".segundo").animate({
                "width": "0%",
                "left": "100%"
            }, "slow");
            $(".tercero").animate({
                "width": "0%",
                "left": "100%"
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
                "left": "0%"
            }, "slow");
            $(".tercero").animate({
                "width": "0%",
                "left": "100%"
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
                "left": "0%"
            }, "slow");
            $(".segundo").animate({
                "width": "0%",
                "left": "0%"
            }, "slow");
            $(this).animate({
                "width": "100%"
            }, "slow");
            $(".mundo").hide("slow");
            $(".logo").hide("slow");
        });
        $(".menu").click(function () {
            $(".primero").animate({
                "width": "33%"
            }, "slow");
            $(".segundo").animate({
                "width": "33%"
            }, "slow");
            $(".tercero").animate({
                "width": "33%"
            }, "slow");
            $(".logo").show("slow");
            $(".cuadro").show("slow");
            $(".mundo").show("slow");
        });
    }
}
mediaQuery();
