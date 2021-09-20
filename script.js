(() => {
	'use strict';
	const selector = '{{1}}';
	if ( selector === '' || selector === '{{1}}' ) {
		return;
	}
	const tag = document.createElement('{{2}}');
	const replace = ev => {
				    if (ev) { window.removeEventListener(ev.type, replace, true); }
				    try {
						const elements = document.querySelectorAll(selector);
                                        		for ( const element of elements ) {
                                                		const text = element.textContent;
							element.replaceWith(tag);
							tag.textContent = text;
						}   
				    } catch { }
	};
	if (document.readyState === 'loading') {
	          window.addEventListener('DOMContentLoaded', replace, true);
	} else {
		  replace();
	}
})();
