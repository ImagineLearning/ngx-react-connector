import { __assign } from "tslib";
import { Component, ViewChild, ElementRef, Input, HostBinding } from '@angular/core';
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
var _c0 = ["container"];
var ReactConnectorComponent = /** @class */ (function () {
    function ReactConnectorComponent() {
        this.class = 'react-connector';
    }
    ReactConnectorComponent.prototype.ngAfterViewInit = function () {
        this.render();
    };
    ReactConnectorComponent.prototype.render = function () {
        if (this.reactComponentRef && this._containerRef) {
            ReactDOM.render(React.createElement(this.reactComponentRef, __assign(__assign({}, this.props || {}), this.events || {})), this._containerRef.nativeElement);
        }
    };
    ReactConnectorComponent.prototype.ngOnDestroy = function () {
        ReactDOM.unmountComponentAtNode(this._containerRef.nativeElement);
    };
    ReactConnectorComponent.ɵfac = function ReactConnectorComponent_Factory(t) { return new (t || ReactConnectorComponent)(); };
    ReactConnectorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ReactConnectorComponent, selectors: [["rc-render-container"]], viewQuery: function ReactConnectorComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, true, ElementRef);
        } if (rf & 2) {
            var _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx._containerRef = _t.first);
        } }, hostVars: 2, hostBindings: function ReactConnectorComponent_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵclassMap(ctx.class);
        } }, inputs: { reactComponentRef: "reactComponentRef", props: "props", events: "events", classContainer: "classContainer" }, decls: 2, vars: 1, consts: [[3, "ngClass"], ["container", ""]], template: function ReactConnectorComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "div", 0, 1);
        } if (rf & 2) {
            i0.ɵɵproperty("ngClass", ctx.classContainer);
        } }, directives: [i1.NgClass], styles: [".react-connector[_ngcontent-%COMP%] { display:block; }"] });
    return ReactConnectorComponent;
}());
export { ReactConnectorComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ReactConnectorComponent, [{
        type: Component,
        args: [{
                selector: 'rc-render-container',
                template: "<div [ngClass]=\"classContainer\" #container></div>",
                styles: ['.react-connector { display:block; }']
            }]
    }], function () { return []; }, { class: [{
            type: HostBinding,
            args: ['class']
        }], _containerRef: [{
            type: ViewChild,
            args: ['container', { read: ElementRef }]
        }], reactComponentRef: [{
            type: Input
        }], props: [{
            type: Input
        }], events: [{
            type: Input
        }], classContainer: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhY3QtY29ubmVjdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1yZWFjdC1jb25uZWN0b3IvIiwic291cmNlcyI6WyJsaWIvcmVhY3QtY29ubmVjdG9yL3JlYWN0LWNvbm5lY3Rvci5jb21wb25lbnQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQWlCLEtBQUssRUFBYSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0csT0FBTyxLQUFLLFFBQVEsTUFBTSxXQUFXLENBQUM7QUFDdEMsT0FBTyxLQUFLLEtBQUssTUFBTSxPQUFPLENBQUM7Ozs7QUFFL0I7SUFtQkM7UUFac0IsVUFBSyxHQUFHLGlCQUFpQixDQUFDO0lBWWhDLENBQUM7SUFFakIsaURBQWUsR0FBZjtRQUNDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNmLENBQUM7SUFFRCx3Q0FBTSxHQUFOO1FBQ0MsSUFBSSxJQUFJLENBQUMsaUJBQWlCLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUNqRCxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLGlCQUFpQix3QkFBTSxJQUFJLENBQUMsS0FBSyxJQUFJLEVBQUUsR0FBSyxJQUFJLENBQUMsTUFBTSxJQUFJLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDNUk7SUFDRixDQUFDO0lBRUQsNkNBQVcsR0FBWDtRQUNDLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ25FLENBQUM7a0dBNUJXLHVCQUF1QjtnRUFBdkIsdUJBQXVCO3NDQUlKLFVBQVU7Ozs7Ozs7WUFQOUIsNEJBQWlEOztZQUE1Qyw0Q0FBMEI7O2tDQU4zQztDQXVDQyxBQW5DRCxJQW1DQztTQTlCWSx1QkFBdUI7a0RBQXZCLHVCQUF1QjtjQUxuQyxTQUFTO2VBQUM7Z0JBQ1YsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsUUFBUSxFQUFFLHFEQUFtRDtnQkFDN0QsTUFBTSxFQUFFLENBQUMscUNBQXFDLENBQUM7YUFDL0M7O2tCQUdDLFdBQVc7bUJBQUMsT0FBTzs7a0JBRW5CLFNBQVM7bUJBQUMsV0FBVyxFQUFFLEVBQUMsSUFBSSxFQUFFLFVBQVUsRUFBQzs7a0JBRXpDLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUVMLEtBQUs7O2tCQUVMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgQWZ0ZXJWaWV3SW5pdCwgSW5wdXQsIE9uRGVzdHJveSwgSG9zdEJpbmRpbmcgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ3JjLXJlbmRlci1jb250YWluZXInLFxuXHR0ZW1wbGF0ZTogYDxkaXYgW25nQ2xhc3NdPVwiY2xhc3NDb250YWluZXJcIiAjY29udGFpbmVyPjwvZGl2PmAsXG5cdHN0eWxlczogWycucmVhY3QtY29ubmVjdG9yIHsgZGlzcGxheTpibG9jazsgfSddXG59KVxuZXhwb3J0IGNsYXNzIFJlYWN0Q29ubmVjdG9yQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcblxuXHRASG9zdEJpbmRpbmcoJ2NsYXNzJykgY2xhc3MgPSAncmVhY3QtY29ubmVjdG9yJztcblxuXHRAVmlld0NoaWxkKCdjb250YWluZXInLCB7cmVhZDogRWxlbWVudFJlZn0pIHByaXZhdGUgX2NvbnRhaW5lclJlZjogRWxlbWVudFJlZjtcblxuXHRASW5wdXQoKSByZWFjdENvbXBvbmVudFJlZjogYW55O1xuXG5cdEBJbnB1dCgpIHByb3BzOiB7W2tleTogc3RyaW5nXTogYW55fSB8IHVuZGVmaW5lZDtcblxuXHRASW5wdXQoKSBldmVudHM6IHtba2V5OiBzdHJpbmddOiAoKSA9PiBhbnl9IHwgdW5kZWZpbmVkO1xuXG5cdEBJbnB1dCgpIGNsYXNzQ29udGFpbmVyOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cblx0Y29uc3RydWN0b3IoKSB7IH1cblxuXHRuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG5cdFx0dGhpcy5yZW5kZXIoKTtcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRpZiAodGhpcy5yZWFjdENvbXBvbmVudFJlZiAmJiB0aGlzLl9jb250YWluZXJSZWYpIHtcblx0XHRcdFJlYWN0RE9NLnJlbmRlcihSZWFjdC5jcmVhdGVFbGVtZW50KHRoaXMucmVhY3RDb21wb25lbnRSZWYsIHsuLi50aGlzLnByb3BzIHx8IHt9LCAuLi50aGlzLmV2ZW50cyB8fCB7fX0pLCB0aGlzLl9jb250YWluZXJSZWYubmF0aXZlRWxlbWVudCk7XG5cdFx0fVxuXHR9XG5cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0UmVhY3RET00udW5tb3VudENvbXBvbmVudEF0Tm9kZSh0aGlzLl9jb250YWluZXJSZWYubmF0aXZlRWxlbWVudCk7XG5cdH1cblxufVxuIl19