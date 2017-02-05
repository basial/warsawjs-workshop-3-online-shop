export const name = 'pageHeader'
export const properties =  {
    template: `
        <div>
            <div>
                <shop-logo size="medium"></shop-logo>
                <span class="header"><strong>Sklep</strong> z owockami</span>
                <div ng-transclude="controls"></div>
            </div>
             <div ng-transclude="bar"></div>
        </div>
    `,
    transclude: {
        controls: 'pageHeaderControls',
        bar: 'pageHeaderBar'
    }
}
