import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactConnectorComponent } from './react-connector/react-connector.component';
import { ReactConnectorDirective } from './react-connector/react-connector.directive';
import { ReactConnectorService } from './react-connector/react-connector.service';
import * as i0 from "@angular/core";
var ReactConnectorModule = /** @class */ (function () {
    function ReactConnectorModule() {
    }
    ReactConnectorModule.ɵmod = i0.ɵɵdefineNgModule({ type: ReactConnectorModule });
    ReactConnectorModule.ɵinj = i0.ɵɵdefineInjector({ factory: function ReactConnectorModule_Factory(t) { return new (t || ReactConnectorModule)(); }, providers: [
            ReactConnectorService
        ], imports: [[
                CommonModule
            ]] });
    return ReactConnectorModule;
}());
export { ReactConnectorModule };
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ReactConnectorModule, { declarations: [ReactConnectorComponent,
        ReactConnectorDirective], imports: [CommonModule], exports: [ReactConnectorDirective] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ReactConnectorModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule
                ],
                declarations: [
                    ReactConnectorComponent,
                    ReactConnectorDirective
                ],
                providers: [
                    ReactConnectorService
                ],
                exports: [
                    ReactConnectorDirective
                ]
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhY3QtY29ubmVjdG9yLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1yZWFjdC1jb25uZWN0b3IvIiwic291cmNlcyI6WyJsaWIvcmVhY3QtY29ubmVjdG9yLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUN0RixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUN0RixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQzs7QUFFbEY7SUFBQTtLQWVvQzs0REFBdkIsb0JBQW9COzJIQUFwQixvQkFBb0IsbUJBUHJCO1lBQ1YscUJBQXFCO1NBQ3JCLFlBVFE7Z0JBQ1IsWUFBWTthQUNaOytCQVZGO0NBc0JvQyxBQWZwQyxJQWVvQztTQUF2QixvQkFBb0I7d0ZBQXBCLG9CQUFvQixtQkFWL0IsdUJBQXVCO1FBQ3ZCLHVCQUF1QixhQUp2QixZQUFZLGFBVVosdUJBQXVCO2tEQUdaLG9CQUFvQjtjQWZoQyxRQUFRO2VBQUM7Z0JBQ1QsT0FBTyxFQUFFO29CQUNSLFlBQVk7aUJBQ1o7Z0JBQ0QsWUFBWSxFQUFFO29CQUNiLHVCQUF1QjtvQkFDdkIsdUJBQXVCO2lCQUN2QjtnQkFDRCxTQUFTLEVBQUU7b0JBQ1YscUJBQXFCO2lCQUNyQjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1IsdUJBQXVCO2lCQUN2QjthQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFJlYWN0Q29ubmVjdG9yQ29tcG9uZW50IH0gZnJvbSAnLi9yZWFjdC1jb25uZWN0b3IvcmVhY3QtY29ubmVjdG9yLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSZWFjdENvbm5lY3RvckRpcmVjdGl2ZSB9IGZyb20gJy4vcmVhY3QtY29ubmVjdG9yL3JlYWN0LWNvbm5lY3Rvci5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgUmVhY3RDb25uZWN0b3JTZXJ2aWNlIH0gZnJvbSAnLi9yZWFjdC1jb25uZWN0b3IvcmVhY3QtY29ubmVjdG9yLnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuXHRpbXBvcnRzOiBbXG5cdFx0Q29tbW9uTW9kdWxlXG5cdF0sXG5cdGRlY2xhcmF0aW9uczogW1xuXHRcdFJlYWN0Q29ubmVjdG9yQ29tcG9uZW50LFxuXHRcdFJlYWN0Q29ubmVjdG9yRGlyZWN0aXZlXG5cdF0sXG5cdHByb3ZpZGVyczogW1xuXHRcdFJlYWN0Q29ubmVjdG9yU2VydmljZVxuXHRdLFxuXHRleHBvcnRzOiBbXG5cdFx0UmVhY3RDb25uZWN0b3JEaXJlY3RpdmVcblx0XVxufSlcbmV4cG9ydCBjbGFzcyBSZWFjdENvbm5lY3Rvck1vZHVsZSB7fVxuIl19