class ProductsListController {
    addToCart(product, amount) {
        this.requestAddToCart({product: product, amount: amount})
    }
}

export const name = 'productsList'
export const properties = {
    template: `
        <product-item ng-repeat="product in $ctrl.products" item="product" on-add-to-cart="$ctrl.addToCart(product, amount)"></product-item>
        <p ng-if="!$ctrl.products.length">Owocki się już skończyły, zapraszamy jutro.</p>
    `,
    bindings: {
        products: '<items',
        requestAddToCart: '&onAddToCart'
    },
    controller: ProductsListController
}