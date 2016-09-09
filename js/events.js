


$( ".negro" ).click(function() {

        $( ".verde" ).animate({"width" : "0%", "left" : "100%"}, "slow");
        $( ".azul" ).animate({"width" : "0%", "left" : "100%"}, "slow");
        $( this ).animate({"width" : "100%", "left" : "0%"}, "slow");  
        $( ".triangulo-ezquinado").fadeIn(1500);
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
        $( ".negro" ).animate({"width" : "0%", "left" : "0%"}, "slow");
        $( ".azul" ).animate({"width" : "0%", "left" : "100%"}, "slow");
        $( this ).animate({"width" : "100%", "left" : "0%"}, "slow");
        $( ".triangulo-ezquinado").fadeIn(1500);
        console.log('asd');

});

$( ".azul" ).click(function() {
        $( ".verde" ).animate({"width" : "0%", "left" : "0%"}, "slow");
        $( ".negro" ).animate({"width" : "0%", "left" : "0"}, "slow");
        $( this ).animate({"width" : "100%", "left" : "0%"}, "slow");
        $( ".triangulo-ezquinado").fadeIn(1500);
        console.log('asd');

});
var velocity=23;
$(document).ready(function(){
  particlesJS('otracosa',jsonPuntos);


});
$( ".triangulo-ezquinado" ).click(function() {
        $( ".triangulo-ezquinado" ).hide();
        $( ".negro" ).animate({"width" : "33.3%", "left" : "0%"}, "slow")
        $( ".verde" ).animate({"width" : "33.3%", "left" : "33.3%"}, "slow")
        $( ".azul" ).animate({"width" : "33.3%", "left" : "66.6%"}, "slow")

			$(".mundo1").css('display','none');
      $("#otracosa").css('display','block');
      console.log('asd');

});
