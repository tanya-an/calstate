jQuery(document).ready(function (){
	jQuery("#Container").mixItUp({
		selectors:{
			target: '.mix',
			filter: '.filter'
		},
		load: {
			filter:'.local'
		}
	});
});