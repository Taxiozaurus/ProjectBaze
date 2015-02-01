/*$(document).ready(function(){
	var HeaderTop = $('#bh').offset().top;
    $(window).scroll(function(){
        if( $(window).scrollTop() > HeaderTop ) {
            $('#bh').css({position: 'fixed', top: '0px', left: '0px'});
        } else {
            $('#bh').css({position: 'static'});
        }
    });

});*/

$navBase = false;

function ToggleMenu()
{
	$('#sideNav').toggleClass('side-offset');
	$('#bh a').toggleClass('dark');
}
