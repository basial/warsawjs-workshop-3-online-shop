class ShopCartController {
    constructor() {

    }
    removeItem(product) {
        this.removeCartItem({product: product});
    }
}

export const name = 'shopCart'
export const properties = {
  template: `
    <div ng-if="$ctrl.items.length" class="shop-cart">
        <div>Produkty w koszyczku</div>
        <div ng-repeat="product in $ctrl.items">
            {{product.name}} 
            <strong> {{product.price | currency:'PLN' }} </strong>
            <span> ({{product.amount}} szt.) </span>
            <button ng-click="$ctrl.removeItem(product)">Usuń</button>
        </div>
    </div>
   `,
  bindings: {
    items: '<',
    removeCartItem: '&onRemoveItem'
  },
    controller: ShopCartController
}
