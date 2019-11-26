(function() {

	var menu = {
	  navToggle: document.querySelector('.nav-toggle'),
	  nav: document.querySelector('nav'),
  
	  doToggle: function(e) {
		e.preventDefault();
		this.navToggle.classList.toggle('expanded');
		this.nav.classList.toggle('expanded');
	  }
	};
  
	menu.navToggle.addEventListener('click', function(e) { menu.doToggle(e); });
	menu.nav.addEventListener('click', function(e) { menu.doToggle(e); });
  
  }());