import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactConnectorComponent } from './react-connector/react-connector.component';
import { ReactConnectorDirective } from './react-connector/react-connector.directive';
import { ReactConnectorService } from './react-connector/react-connector.service';
import * as i0 from "@angular/core";
export class ReactConnectorModule {
}
ReactConnectorModule.ɵmod = i0.ɵɵdefineNgModule({ type: ReactConnectorModule });
ReactConnectorModule.ɵinj = i0.ɵɵdefineInjector({ factory: function ReactConnectorModule_Factory(t) { return new (t || ReactConnectorModule)(); }, providers: [
        ReactConnectorService
    ], imports: [[
            CommonModule
        ]] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhY3QtY29ubmVjdG9yLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1yZWFjdC1jb25uZWN0b3IvIiwic291cmNlcyI6WyJsaWIvcmVhY3QtY29ubmVjdG9yLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUN0RixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUN0RixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQzs7QUFpQmxGLE1BQU0sT0FBTyxvQkFBb0I7O3dEQUFwQixvQkFBb0I7dUhBQXBCLG9CQUFvQixtQkFQckI7UUFDVixxQkFBcUI7S0FDckIsWUFUUTtZQUNSLFlBQVk7U0FDWjt3RkFZVyxvQkFBb0IsbUJBVi9CLHVCQUF1QjtRQUN2Qix1QkFBdUIsYUFKdkIsWUFBWSxhQVVaLHVCQUF1QjtrREFHWixvQkFBb0I7Y0FmaEMsUUFBUTtlQUFDO2dCQUNULE9BQU8sRUFBRTtvQkFDUixZQUFZO2lCQUNaO2dCQUNELFlBQVksRUFBRTtvQkFDYix1QkFBdUI7b0JBQ3ZCLHVCQUF1QjtpQkFDdkI7Z0JBQ0QsU0FBUyxFQUFFO29CQUNWLHFCQUFxQjtpQkFDckI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNSLHVCQUF1QjtpQkFDdkI7YUFDRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBSZWFjdENvbm5lY3RvckNvbXBvbmVudCB9IGZyb20gJy4vcmVhY3QtY29ubmVjdG9yL3JlYWN0LWNvbm5lY3Rvci5jb21wb25lbnQnO1xuaW1wb3J0IHsgUmVhY3RDb25uZWN0b3JEaXJlY3RpdmUgfSBmcm9tICcuL3JlYWN0LWNvbm5lY3Rvci9yZWFjdC1jb25uZWN0b3IuZGlyZWN0aXZlJztcbmltcG9ydCB7IFJlYWN0Q29ubmVjdG9yU2VydmljZSB9IGZyb20gJy4vcmVhY3QtY29ubmVjdG9yL3JlYWN0LWNvbm5lY3Rvci5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcblx0aW1wb3J0czogW1xuXHRcdENvbW1vbk1vZHVsZVxuXHRdLFxuXHRkZWNsYXJhdGlvbnM6IFtcblx0XHRSZWFjdENvbm5lY3RvckNvbXBvbmVudCxcblx0XHRSZWFjdENvbm5lY3RvckRpcmVjdGl2ZVxuXHRdLFxuXHRwcm92aWRlcnM6IFtcblx0XHRSZWFjdENvbm5lY3RvclNlcnZpY2Vcblx0XSxcblx0ZXhwb3J0czogW1xuXHRcdFJlYWN0Q29ubmVjdG9yRGlyZWN0aXZlXG5cdF1cbn0pXG5leHBvcnQgY2xhc3MgUmVhY3RDb25uZWN0b3JNb2R1bGUge31cbiJdfQ==