export const name = 'productsList'
export const properties = {
    template: `
        <product-item ng-repeat="product in $ctrl.products" item="product"></product-item>
    `,
    bindings: {
        products: '<items'
    }
}