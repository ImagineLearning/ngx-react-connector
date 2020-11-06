import { Injectable } from '@angular/core';
import { merge } from 'lodash';
import * as i0 from "@angular/core";
var ReactConnectorService = /** @class */ (function () {
    function ReactConnectorService() {
    }
    ReactConnectorService.prototype.updateProps = function (currentProps, newProps) {
        return merge({}, currentProps, newProps);
    };
    ReactConnectorService.prototype.updateEvents = function (currentEvents, newEvents) {
        return merge({}, currentEvents, newEvents);
    };
    ReactConnectorService.ɵfac = function ReactConnectorService_Factory(t) { return new (t || ReactConnectorService)(); };
    ReactConnectorService.ɵprov = i0.ɵɵdefineInjectable({ token: ReactConnectorService, factory: ReactConnectorService.ɵfac });
    return ReactConnectorService;
}());
export { ReactConnectorService };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ReactConnectorService, [{
        type: Injectable
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhY3QtY29ubmVjdG9yLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtcmVhY3QtY29ubmVjdG9yLyIsInNvdXJjZXMiOlsibGliL3JlYWN0LWNvbm5lY3Rvci9yZWFjdC1jb25uZWN0b3Iuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxRQUFRLENBQUM7O0FBRS9CO0lBQUE7S0FXQztJQVJBLDJDQUFXLEdBQVgsVUFBZSxZQUFvQixFQUFFLFFBQWdCO1FBQ3BELE9BQU8sS0FBSyxDQUFDLEVBQUUsRUFBRSxZQUFZLEVBQUUsUUFBUSxDQUFNLENBQUM7SUFDL0MsQ0FBQztJQUVELDRDQUFZLEdBQVosVUFBZ0IsYUFBcUIsRUFBRSxTQUFpQjtRQUN2RCxPQUFPLEtBQUssQ0FBQyxFQUFFLEVBQUUsYUFBYSxFQUFFLFNBQVMsQ0FBTSxDQUFDO0lBQ2pELENBQUM7OEZBUlcscUJBQXFCO2lFQUFyQixxQkFBcUIsV0FBckIscUJBQXFCO2dDQUpsQztDQWNDLEFBWEQsSUFXQztTQVZZLHFCQUFxQjtrREFBckIscUJBQXFCO2NBRGpDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBtZXJnZSB9IGZyb20gJ2xvZGFzaCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBSZWFjdENvbm5lY3RvclNlcnZpY2Uge1xuXG5cdHVwZGF0ZVByb3BzPFQ+KGN1cnJlbnRQcm9wczogb2JqZWN0LCBuZXdQcm9wczogb2JqZWN0KTogVCB7XG5cdFx0cmV0dXJuIG1lcmdlKHt9LCBjdXJyZW50UHJvcHMsIG5ld1Byb3BzKSBhcyBUO1xuXHR9XG5cblx0dXBkYXRlRXZlbnRzPFQ+KGN1cnJlbnRFdmVudHM6IG9iamVjdCwgbmV3RXZlbnRzOiBvYmplY3QpOiBUIHtcblx0XHRyZXR1cm4gbWVyZ2Uoe30sIGN1cnJlbnRFdmVudHMsIG5ld0V2ZW50cykgYXMgVDtcblx0fVxuXG59XG4iXX0=