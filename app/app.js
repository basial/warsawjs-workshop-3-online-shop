import ApplicationController from './application.controller'
import { moduleName as componentsModuleName } from './components/components.module'

export const moduleName = 'show'

angular.module(moduleName, [componentsModuleName])
    .controller('ApplicationController', ApplicationController)
