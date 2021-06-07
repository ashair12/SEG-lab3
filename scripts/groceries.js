	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "Yogurt",
		lactoseFree: false,
		nutFree: true,
		organic: true,
		lowCalorie: true,
		price: 0.50
	},
	{
		name: "Apple",
		lactoseFree: true,
		nutFree: true,
		organic: true,
		lowCalore: true,
		price: 1.00
	},
	{
		name: "Peanut Butter",
		lactoseFree: true,
		nutFree: false,
		organic: false,
		lowCalorie: false,
		price: 1.50
	},
	{
		name: "Brocoli",
		lactoseFree: true,
		nutFree: true,
		organic: true,
		lowCalore: true,
		price: 1.99
	},
	{
		name: "Bread",
		lactoseFree: true,
		nutFree: true,
		organic: false,
		lowCalorie: false,
		price: 2.35
	},
	{
		name: "Chicken",
		lactoseFree: true,
		nutFree: true,
		organic: false,
		lowCalorie: true,
		price: 7.50
	},
	{
		name: "Beef",
		lactoseFree: true,
		nutFree: true,
		organic: false,
		lowCalorie: true,
		price: 8.00
	},

	{
		name: "Salmon",
		lactoseFree: true,
		nutFree: true,
		organic: false,
		lowCalorie: true,
		price: 10.00
	},
	{
		name: "Pasta",
		lactoseFree: true,
		nutFree: true,
		organic: false,
		lowCalorie: false,
		price: 11.50
	},
	{
		name: "Cake",
		lactoseFree: false,
		nutFree: true,
		organic: false,
		lowCalorie: false,
		price: 15.00
	},
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "LactoseFree") && (prods[i].lactoseFree == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "NutFree") && (prods[i].nutFree == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "Organic") && (prods[i].organic == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "LowCalorie") && (prods[i].lowCalorie == true)){
			product_names.push(prods[i].name);
		}
		else if (restriction == "None"){
			product_names.push(prods[i].name);
		}
	}
	return product_names;
}

function getListPrices(prods, restriction)
{
	let product_prices = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "LactoseFree") && (prods[i].lactoseFree == true)){
			product_prices.push(prods[i].price);
		}
		else if ((restriction == "NutFree") && (prods[i].nutFree == true)){
			product_prices.push(prods[i].price);
		}
		else if ((restriction == "Organic") && (prods[i].organic == true)){
			product_prices.push(prods[i].price);
		}
		else if ((restriction == "LowCalorie") && (prods[i].lowCalorie == true)){
			product_prices.push(prods[i].price);
		}
		else if (restriction == "None"){
			product_prices.push(prods[i].price);
		}
	}
	return product_prices;

}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}
