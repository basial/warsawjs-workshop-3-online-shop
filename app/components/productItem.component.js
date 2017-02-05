export const name = 'productItem'
export const properties = {
    template: `
        <div class="product-item">
            <h2> {{ $ctrl.product.name }} </h2>
            <p> {{ $ctrl.product.price }} </p>
        </div>
    `,
    bindings: {
        product: '<item'
    }
}