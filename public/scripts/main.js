document.addEventListener( 'DOMContentLoaded', function () {
	new Splide( '#image-slider', {
            type: 'loop',
            cover: true,
            heightRatio: 0.5,
            autoplay    : true,
            pagination: false,

	} ).mount();
} );
