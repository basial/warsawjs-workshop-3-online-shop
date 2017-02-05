import {ProductsService} from './products.service.js'

export const moduleName = 'services'
angular.module(moduleName, [])
    .service('productsService', ProductsService)