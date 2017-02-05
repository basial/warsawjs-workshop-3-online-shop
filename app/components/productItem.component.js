class ProductItemController {
    countPicked(count) {
        this.addToCart({amount: count})
    }
}

export const name = 'productItem'
export const properties = {
    template: `
        <div class="product-item">
            <h2> {{ $ctrl.product.name }} {{ $ctrl.product.price | currency:'PLN' }} </h2>
            <p> {{ $ctrl.product.description | shorten:200 }}</p>
            
            <count-picker on-pick="$ctrl.countPicked(count)"></count-picker>
        </div>
    `,
    bindings: {
        product: '<item',
        addToCart: '&onAddToCart'
    },
    controller: ProductItemController
}