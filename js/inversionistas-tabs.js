jQuery(document).ready(function($){
	// TABS
	$('body').on("click", ".tab-selector", function(){
		tabClicked = this.getAttribute('attr')
		$('.tab-selector').removeClass('tab-selector-selected')
		if ( !$(this).hasClass('tab-selector-selected') ) {
			$(this).addClass('tab-selector-selected')
		}
		console.log('click: ' + tabClicked)
		showHideTabs(tabClicked)
	})
	//
	function showHideTabs(tabClicked) {
		console.log('showHideTabs')
		$('.tab:visible').each(function(){
			$(this).fadeOut('fast', function(){
				$('#' + tabClicked).fadeIn()
			})
		})
	}
	// SUBTABS
	$('body').on("click", ".subtab-selector", function(){
		tabClicked = this.getAttribute('attr')
		$('.subtab-selector').removeClass('subtab-selector-selected')
		if ( !$(this).hasClass('subtab-selector-selected') ) {
			$(this).addClass('subtab-selector-selected')
		}
		console.log('click: ' + tabClicked)
		showHideSubTabs(tabClicked)
	})
	//
	function showHideSubTabs(tabClicked) {
		console.log('showHideTabs')
		$('.subtab:visible').each(function(){
			$(this).fadeOut('fast', function(){
				$('#' + tabClicked).fadeIn()
			})
		})
	}
})