


$( ".negro" ).click(function() {

        $( ".verde" ).slideUp("slow");
        $( ".azul" ).slideUp("slow");
        $( this ).animate({"width" : "100%", "left" : "0%"}, "slow");
        $( ".triangulo-ezquinado").show();
			$(".mundo1").css('display','block');
			$("#otracosa").css('display','none');

      console.log('asd');
			particlesJS('particles-js',jsonPuntos);
      var style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = 'body {}';
    document.getElementsByTagName('head')[0].appendChild(style);
    this.stylesheet = document.styleSheets[document.styleSheets.length-1];
    try {
    //  console.log('@-webkit-keyframes walkW{from {top: '+$('.lunaP').position().top+'px; left:'+$('.lunaP').position().left+'px}}');
      this.stylesheet.insertRule('@-webkit-keyframes walkW{to {top: '+$('.lunaP').position().top+'px; left:'+$('.lunaP').position().left+'px},from {top: 1000px; left:10000px}}', this.stylesheet.rules.length);
    //  this.stylesheet.insertRule('.objetoN{         -webkit-animation: walkW '+velocity+'.0s linear  infinite;}', this.stylesheet.rules.length);
        } catch (e) {};
      velocity-=5;


});

$( ".verde" ).click(function() {
        $( ".negro" ).slideUp("slow");
        $( ".azul" ).slideUp("slow");
        $( this ).animate({"width" : "100%", "left" : "0%"}, "slow");
        $( ".triangulo-ezquinado").show();
        console.log('asd');

});

$( ".azul" ).click(function() {
        $( ".verde" ).slideUp("slow");
        $( ".negro" ).slideUp("slow");
        $( this ).animate({"width" : "100%", "left" : "0%"}, "slow");
        $( ".triangulo-ezquinado").show();
        console.log('asd');

});
var velocity=23;
$(document).ready(function(){
  particlesJS('otracosa',jsonPuntos);


});
$( ".triangulo-ezquinado" ).click(function() {
        $( ".triangulo-ezquinado" ).hide();
        $( ".negro" ).slideDown("slow", function(){
            $( ".negro" ).animate({"width" : "33.3%", "left" : "0%"}, "slow")
        });
        $( ".verde" ).slideDown("slow", function(){
            $( ".verde" ).animate({"width" : "33.3%", "left" : "33.3%"}, "slow")
        });
        $( ".azul" ).slideDown("slow", function(){
            $( ".azul" ).animate({"width" : "33.3%", "left" : "66.6%"}, "slow")
        });
        $( ".negro" ).show();
        $( ".verde" ).show();
        $( ".azul" ).show();

			$(".mundo1").css('display','none');
      $("#otracosa").css('display','block');
      console.log('asd');

});
