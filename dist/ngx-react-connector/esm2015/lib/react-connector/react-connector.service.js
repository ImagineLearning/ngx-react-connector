import { Injectable } from '@angular/core';
import { merge } from 'lodash';
import * as i0 from "@angular/core";
export class ReactConnectorService {
    updateProps(currentProps, newProps) {
        return merge({}, currentProps, newProps);
    }
    updateEvents(currentEvents, newEvents) {
        return merge({}, currentEvents, newEvents);
    }
}
ReactConnectorService.ɵfac = function ReactConnectorService_Factory(t) { return new (t || ReactConnectorService)(); };
ReactConnectorService.ɵprov = i0.ɵɵdefineInjectable({ token: ReactConnectorService, factory: ReactConnectorService.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ReactConnectorService, [{
        type: Injectable
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhY3QtY29ubmVjdG9yLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtcmVhY3QtY29ubmVjdG9yLyIsInNvdXJjZXMiOlsibGliL3JlYWN0LWNvbm5lY3Rvci9yZWFjdC1jb25uZWN0b3Iuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxRQUFRLENBQUM7O0FBRy9CLE1BQU0sT0FBTyxxQkFBcUI7SUFFakMsV0FBVyxDQUFJLFlBQW9CLEVBQUUsUUFBZ0I7UUFDcEQsT0FBTyxLQUFLLENBQUMsRUFBRSxFQUFFLFlBQVksRUFBRSxRQUFRLENBQU0sQ0FBQztJQUMvQyxDQUFDO0lBRUQsWUFBWSxDQUFJLGFBQXFCLEVBQUUsU0FBaUI7UUFDdkQsT0FBTyxLQUFLLENBQUMsRUFBRSxFQUFFLGFBQWEsRUFBRSxTQUFTLENBQU0sQ0FBQztJQUNqRCxDQUFDOzswRkFSVyxxQkFBcUI7NkRBQXJCLHFCQUFxQixXQUFyQixxQkFBcUI7a0RBQXJCLHFCQUFxQjtjQURqQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgbWVyZ2UgfSBmcm9tICdsb2Rhc2gnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUmVhY3RDb25uZWN0b3JTZXJ2aWNlIHtcblxuXHR1cGRhdGVQcm9wczxUPihjdXJyZW50UHJvcHM6IG9iamVjdCwgbmV3UHJvcHM6IG9iamVjdCk6IFQge1xuXHRcdHJldHVybiBtZXJnZSh7fSwgY3VycmVudFByb3BzLCBuZXdQcm9wcykgYXMgVDtcblx0fVxuXG5cdHVwZGF0ZUV2ZW50czxUPihjdXJyZW50RXZlbnRzOiBvYmplY3QsIG5ld0V2ZW50czogb2JqZWN0KTogVCB7XG5cdFx0cmV0dXJuIG1lcmdlKHt9LCBjdXJyZW50RXZlbnRzLCBuZXdFdmVudHMpIGFzIFQ7XG5cdH1cblxufVxuIl19