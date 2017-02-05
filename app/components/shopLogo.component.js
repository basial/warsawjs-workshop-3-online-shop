class ShopLogoController {
    constructor() {
        this.source = "http://images.clipshrine.com/download/downloadpnglarge/cherry-fruit-icon-12255-large.png"
        this.width = 'auto'
    }

    $onInit() {
        this.width = this.size === "small" ? '20px' : '40px'
    }
}

export const name = 'shopLogo'
export const properties = {
    template: `<img src="{{ $ctrl.source }}" width="{{ $ctrl.width }}">`,
    controller: ShopLogoController,
    bindings: {
        size: '@'
    }
}
