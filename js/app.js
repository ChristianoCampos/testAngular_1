(function()
{
	var app = angular.module('store', []);

	app.controller('StoreController', function()
	{
		this.product = gems;
	});

	var gems = 
	[
		{
			name: 'Product Name',
			desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti facere neque minima voluptatibus ipsa laboriosam ipsum et? Id, maxime, adipisci, itaque ex accusamus cupiditate officiis repellat beatae sequi rem reprehenderit.',
			price: 29.99,
			canPurchase: false
		},
		{
			name: 'Outher Product Name',
			desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti facere neque minima voluptatibus ipsa laboriosam ipsum et? Id, maxime, adipisci, itaque ex accusamus cupiditate officiis repellat beatae sequi rem reprehenderit.',
			price: 42,
			canPurchase: true
		}
	];
})();



