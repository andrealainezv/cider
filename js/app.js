// Dom7
var $$ = Dom7;

// Init App
var app = new Framework7({
  	id: 'com.app',
  	root: '#app',
	theme: 'auto',
	view: {
        pushState: true
    },
	cache:false,
	cacheDuration: 0,
	modalTitle: 'AppBase',
  	routes: [
		{
		path: '/categorias/',
    	url: 'categoria.html',
    	name: 'categorias',
  		},
		{
		path: '/cardigan/',
    	url: 'cardigan.html',
    	name: 'cardigan',
  		},
		{
		path: '/inicio/',
    	url: 'index.html',
    	name: 'inicio',
  		},
		{
		path: '/perfil/',
    	url: 'perfil.html',
    	name: 'perfil',
  		},
		
		
	],
	dialog: {
		title: 'Cider',
		buttonOk: 'Aceptar',
		buttoncancel: 'Cancelar',
  	},
	popup: {
		closeOnEscape: true,
		backdrop : false
	},
	sheet: {
		closeOnEscape: true,
	},
	popover: {
		closeOnEscape: true,
	},
	actions: {
		closeOnEscape: true,
	}
});



