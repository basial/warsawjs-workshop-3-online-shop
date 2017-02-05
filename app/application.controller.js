export default class ApplicationController {
  constructor(productsService) {
      this.productsService = productsService
      this.inCartProducts = []
  }

  get products() {
      return this.productsService.products
  }

  get promotedProducts() {
      return this.productsService.promotedProducts
  }

   addProductToCart(product, amount) {
       let selectedProduct = this.inCartProducts.find((item) => item.name == product.name)

       if (selectedProduct) {
           selectedProduct.amount = selectedProduct.amount + amount;
           selectedProduct.price = selectedProduct.price + product.price * amount;
       } else {
           this.inCartProducts.push({name: product.name, amount: amount, price: product.price * amount })
       }
   }

   removeCartItem(product) {
       let selectedProduct = this.inCartProducts.find((item) => item.name == product.name)
       let cartProduct = this.products.find((item) => item.name == product.name)

       if (selectedProduct.amount == 1) {
           let index = this.inCartProducts.indexOf(selectedProduct)
           let products = this.inCartProducts;
           products.slice(index, 1)
           this.inCartProducts = products
       } else {
           selectedProduct.amount = selectedProduct.amount - 1;
           selectedProduct.price = selectedProduct.price - cartProduct.price;
       }
   }

   $onInit() {
      this.productsService.loadProducts()
   }
}
