class CountPickerController {
    constructor() {
        this.count = 0
    }

    setCount() {
        this.pick({count: this.count})
        this.count = 0
    }
}

export const name = 'countPicker'
export const properties = {
    template: `
        <form name="itemForm">
            <input type="number" name="count" ng-model="$ctrl.count" min="1" max="100">
            <button ng-disabled="itemForm.$invalid" ng-click="$ctrl.setCount()">Dodaj</button>
        </form>
`,
    bindings: {
        pick: '&onPick'
    },
    controller: CountPickerController
}