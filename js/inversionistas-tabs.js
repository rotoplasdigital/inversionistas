jQuery(document).ready(function($){
	// TABS
	$('body').on("click", ".tab-selector", function(){
		tabClicked = this.getAttribute('attr')
		$(this).parent().find("[class*='tab-selector-selected']").removeClass('tab-selector-selected')
		$('.tab-selector[attr="' + tabClicked + '"]').addClass('tab-selector-selected')
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
		//$(this).parent().find('.subtab-selector.subtab-selector-selected').removeClass('subtab-selector-selected')
		$(this).parent().find("[class*='subtab-selector-selected']").removeClass('subtab-selector-selected')
		$('.subtab-selector[attr="' + tabClicked + '"]').addClass('subtab-selector-selected')
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
	//THIRD TABS
	$('body').on("click", ".thirdbtab-selector", function(){
		tabClicked = this.getAttribute('attr')
		$(this).parent().find("[class*='thirdbtab-selector-selected']").removeClass('thirdbtab-selector-selected')
		$('.thirdbtab-selector[attr="' + tabClicked + '"]').addClass('thirdbtab-selector-selected')
		console.log('click: ' + tabClicked)
		showHideThirdTabs(tabClicked)
	})
	//
	function showHideThirdTabs(tabClicked) {
		console.log('showHideTabs')
		$('.thirdbtab:visible').each(function(){
			$(this).fadeOut('fast', function(){
				$('#' + tabClicked).fadeIn()
			})
		})
	}
})