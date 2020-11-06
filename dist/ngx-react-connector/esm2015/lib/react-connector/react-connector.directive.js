import { Directive, Input } from '@angular/core';
import { get } from 'lodash';
import { ReactConnectorComponent } from './react-connector.component';
import * as i0 from "@angular/core";
export class ReactConnectorDirective {
    constructor(_viewContainerRef, _componentFactoryResolver, _injector) {
        this._viewContainerRef = _viewContainerRef;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._injector = _injector;
    }
    ngOnInit() {
        this.render();
    }
    ngOnChanges(changes) {
        const propChange = !get(changes, 'reactProps.firstChange', true);
        const eventsChange = !get(changes, 'reactEvents.firstChange', true);
        const classContainerChange = !get(changes, 'reactClassContainer.firstChange', true);
        if (propChange || eventsChange || classContainerChange) {
            this._updateComponent();
        }
    }
    isClassComponent(component) {
        return (typeof component === 'function' && !!component.prototype.isReactComponent);
    }
    isFunctionComponent(component) {
        const componentString = String(component);
        return (typeof component === 'function' && !!componentString.match(/React([^\.]+)?\.createElement/ig));
    }
    isReactComponent(component) {
        return (this.isClassComponent(component) ||
            this.isFunctionComponent(component));
    }
    render() {
        const isReactComponent = this.isReactComponent(this.reactConnectorComponent);
        if (isReactComponent && this._viewContainerRef) {
            this._viewContainerRef.clear();
            const componentFactory = this._componentFactoryResolver.resolveComponentFactory(ReactConnectorComponent);
            const componentComponentRef = componentFactory.create(this._injector);
            this._componentRef = componentComponentRef.instance;
            this._componentRef.reactComponentRef = this.reactConnectorComponent;
            this._componentRef.props = this.reactProps || undefined;
            this._componentRef.events = this.reactEvents || undefined;
            this._componentRef.classContainer = this.reactClassContainer || undefined;
            this._viewContainerRef.insert(componentComponentRef.hostView);
        }
        else {
            console.error('Invalid react component ref:', this.reactConnectorComponent);
        }
    }
    _updateComponent() {
        this._componentRef.props = this.reactProps || undefined;
        this._componentRef.events = this.reactEvents || undefined;
        this._componentRef.classContainer = this.reactClassContainer || undefined;
        this._componentRef.render();
    }
}
ReactConnectorDirective.ɵfac = function ReactConnectorDirective_Factory(t) { return new (t || ReactConnectorDirective)(i0.ɵɵdirectiveInject(i0.ViewContainerRef), i0.ɵɵdirectiveInject(i0.ComponentFactoryResolver), i0.ɵɵdirectiveInject(i0.Injector)); };
ReactConnectorDirective.ɵdir = i0.ɵɵdefineDirective({ type: ReactConnectorDirective, selectors: [["", "reactConnectorComponent", ""]], inputs: { reactConnectorComponent: "reactConnectorComponent", reactProps: "reactProps", reactEvents: "reactEvents", reactClassContainer: "reactClassContainer" }, features: [i0.ɵɵNgOnChangesFeature] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(ReactConnectorDirective, [{
        type: Directive,
        args: [{
                selector: '[reactConnectorComponent]'
            }]
    }], function () { return [{ type: i0.ViewContainerRef }, { type: i0.ComponentFactoryResolver }, { type: i0.Injector }]; }, { reactConnectorComponent: [{
            type: Input,
            args: ['reactConnectorComponent']
        }], reactProps: [{
            type: Input
        }], reactEvents: [{
            type: Input
        }], reactClassContainer: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhY3QtY29ubmVjdG9yLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1yZWFjdC1jb25uZWN0b3IvIiwic291cmNlcyI6WyJsaWIvcmVhY3QtY29ubmVjdG9yL3JlYWN0LWNvbm5lY3Rvci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBb0MsS0FBSyxFQUF3RCxNQUFNLGVBQWUsQ0FBQztBQUN6SSxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBRTdCLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDOztBQUt0RSxNQUFNLE9BQU8sdUJBQXVCO0lBWW5DLFlBQ1MsaUJBQW1DLEVBQ25DLHlCQUFtRCxFQUNuRCxTQUFtQjtRQUZuQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQWtCO1FBQ25DLDhCQUF5QixHQUF6Qix5QkFBeUIsQ0FBMEI7UUFDbkQsY0FBUyxHQUFULFNBQVMsQ0FBVTtJQUN4QixDQUFDO0lBRUwsUUFBUTtRQUNQLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNmLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDakMsTUFBTSxVQUFVLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLHdCQUF3QixFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2pFLE1BQU0sWUFBWSxHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNwRSxNQUFNLG9CQUFvQixHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNwRixJQUFJLFVBQVUsSUFBSSxZQUFZLElBQUksb0JBQW9CLEVBQUU7WUFDdkQsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7U0FDeEI7SUFDRixDQUFDO0lBRUQsZ0JBQWdCLENBQUMsU0FBUztRQUN6QixPQUFPLENBQUMsT0FBTyxTQUFTLEtBQUssVUFBVSxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDcEYsQ0FBQztJQUVELG1CQUFtQixDQUFDLFNBQVM7UUFDNUIsTUFBTSxlQUFlLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzFDLE9BQU8sQ0FBQyxPQUFPLFNBQVMsS0FBSyxVQUFVLElBQUksQ0FBQyxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsaUNBQWlDLENBQUMsQ0FBQyxDQUFDO0lBQ3hHLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxTQUFTO1FBQ3pCLE9BQU8sQ0FDTixJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsQ0FDbkMsQ0FBQztJQUNILENBQUM7SUFFRCxNQUFNO1FBQ0wsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLENBQUM7UUFDN0UsSUFBSSxnQkFBZ0IsSUFBSSxJQUFJLENBQUMsaUJBQWlCLEVBQUU7WUFDL0MsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssRUFBRSxDQUFDO1lBQy9CLE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLHlCQUF5QixDQUFDLHVCQUF1QixDQUFDLHVCQUF1QixDQUFDLENBQUM7WUFDekcsTUFBTSxxQkFBcUIsR0FBRyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3RFLElBQUksQ0FBQyxhQUFhLEdBQUcscUJBQXFCLENBQUMsUUFBUSxDQUFDO1lBQ3BELElBQUksQ0FBQyxhQUFhLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLHVCQUF1QixDQUFDO1lBQ3BFLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLElBQUksU0FBUyxDQUFDO1lBQ3hELElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxXQUFXLElBQUksU0FBUyxDQUFDO1lBQzFELElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsSUFBSSxTQUFTLENBQUM7WUFDMUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUM5RDthQUFNO1lBQ04sT0FBTyxDQUFDLEtBQUssQ0FBQyw4QkFBOEIsRUFBRSxJQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FBQztTQUM1RTtJQUNGLENBQUM7SUFFRCxnQkFBZ0I7UUFDZixJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxJQUFJLFNBQVMsQ0FBQztRQUN4RCxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxJQUFJLFNBQVMsQ0FBQztRQUMxRCxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsbUJBQW1CLElBQUksU0FBUyxDQUFDO1FBQzFFLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDN0IsQ0FBQzs7OEZBckVXLHVCQUF1Qjs0REFBdkIsdUJBQXVCO2tEQUF2Qix1QkFBdUI7Y0FIbkMsU0FBUztlQUFDO2dCQUNWLFFBQVEsRUFBRSwyQkFBMkI7YUFDckM7O2tCQUdDLEtBQUs7bUJBQUMseUJBQXlCOztrQkFFL0IsS0FBSzs7a0JBRUwsS0FBSzs7a0JBRUwsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgT25Jbml0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMsIElucHV0LCBWaWV3Q29udGFpbmVyUmVmLCBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBnZXQgfSBmcm9tICdsb2Rhc2gnO1xuXG5pbXBvcnQgeyBSZWFjdENvbm5lY3RvckNvbXBvbmVudCB9IGZyb20gJy4vcmVhY3QtY29ubmVjdG9yLmNvbXBvbmVudCc7XG5cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ1tyZWFjdENvbm5lY3RvckNvbXBvbmVudF0nXG59KVxuZXhwb3J0IGNsYXNzIFJlYWN0Q29ubmVjdG9yRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuXG5cdEBJbnB1dCgncmVhY3RDb25uZWN0b3JDb21wb25lbnQnKSByZWFjdENvbm5lY3RvckNvbXBvbmVudDogYW55O1xuXG5cdEBJbnB1dCgpIHJlYWN0UHJvcHM6IHsgW2tleTogc3RyaW5nXTogYW55IH07XG5cblx0QElucHV0KCkgcmVhY3RFdmVudHM6IHsgW2tleTogc3RyaW5nXTogKCkgPT4gYW55IH07XG5cblx0QElucHV0KCkgcmVhY3RDbGFzc0NvbnRhaW5lcjogc3RyaW5nO1xuXG5cdHByaXZhdGUgX2NvbXBvbmVudFJlZjogUmVhY3RDb25uZWN0b3JDb21wb25lbnQ7XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSBfdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcblx0XHRwcml2YXRlIF9jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcblx0XHRwcml2YXRlIF9pbmplY3RvcjogSW5qZWN0b3Jcblx0KSB7IH1cblxuXHRuZ09uSW5pdCgpIHtcblx0XHR0aGlzLnJlbmRlcigpO1xuXHR9XG5cblx0bmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuXHRcdGNvbnN0IHByb3BDaGFuZ2UgPSAhZ2V0KGNoYW5nZXMsICdyZWFjdFByb3BzLmZpcnN0Q2hhbmdlJywgdHJ1ZSk7XG5cdFx0Y29uc3QgZXZlbnRzQ2hhbmdlID0gIWdldChjaGFuZ2VzLCAncmVhY3RFdmVudHMuZmlyc3RDaGFuZ2UnLCB0cnVlKTtcblx0XHRjb25zdCBjbGFzc0NvbnRhaW5lckNoYW5nZSA9ICFnZXQoY2hhbmdlcywgJ3JlYWN0Q2xhc3NDb250YWluZXIuZmlyc3RDaGFuZ2UnLCB0cnVlKTtcblx0XHRpZiAocHJvcENoYW5nZSB8fCBldmVudHNDaGFuZ2UgfHwgY2xhc3NDb250YWluZXJDaGFuZ2UpIHtcblx0XHRcdHRoaXMuX3VwZGF0ZUNvbXBvbmVudCgpO1xuXHRcdH1cblx0fVxuXG5cdGlzQ2xhc3NDb21wb25lbnQoY29tcG9uZW50KTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuICh0eXBlb2YgY29tcG9uZW50ID09PSAnZnVuY3Rpb24nICYmICEhY29tcG9uZW50LnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KTtcblx0fVxuXG5cdGlzRnVuY3Rpb25Db21wb25lbnQoY29tcG9uZW50KTogYm9vbGVhbiB7XG5cdFx0Y29uc3QgY29tcG9uZW50U3RyaW5nID0gU3RyaW5nKGNvbXBvbmVudCk7XG5cdFx0cmV0dXJuICh0eXBlb2YgY29tcG9uZW50ID09PSAnZnVuY3Rpb24nICYmICEhY29tcG9uZW50U3RyaW5nLm1hdGNoKC9SZWFjdChbXlxcLl0rKT9cXC5jcmVhdGVFbGVtZW50L2lnKSk7XG5cdH1cblxuXHRpc1JlYWN0Q29tcG9uZW50KGNvbXBvbmVudCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiAoXG5cdFx0XHR0aGlzLmlzQ2xhc3NDb21wb25lbnQoY29tcG9uZW50KSB8fFxuXHRcdFx0dGhpcy5pc0Z1bmN0aW9uQ29tcG9uZW50KGNvbXBvbmVudClcblx0XHQpO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IGlzUmVhY3RDb21wb25lbnQgPSB0aGlzLmlzUmVhY3RDb21wb25lbnQodGhpcy5yZWFjdENvbm5lY3RvckNvbXBvbmVudCk7XG5cdFx0aWYgKGlzUmVhY3RDb21wb25lbnQgJiYgdGhpcy5fdmlld0NvbnRhaW5lclJlZikge1xuXHRcdFx0dGhpcy5fdmlld0NvbnRhaW5lclJlZi5jbGVhcigpO1xuXHRcdFx0Y29uc3QgY29tcG9uZW50RmFjdG9yeSA9IHRoaXMuX2NvbXBvbmVudEZhY3RvcnlSZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShSZWFjdENvbm5lY3RvckNvbXBvbmVudCk7XG5cdFx0XHRjb25zdCBjb21wb25lbnRDb21wb25lbnRSZWYgPSBjb21wb25lbnRGYWN0b3J5LmNyZWF0ZSh0aGlzLl9pbmplY3Rvcik7XG5cdFx0XHR0aGlzLl9jb21wb25lbnRSZWYgPSBjb21wb25lbnRDb21wb25lbnRSZWYuaW5zdGFuY2U7XG5cdFx0XHR0aGlzLl9jb21wb25lbnRSZWYucmVhY3RDb21wb25lbnRSZWYgPSB0aGlzLnJlYWN0Q29ubmVjdG9yQ29tcG9uZW50O1xuXHRcdFx0dGhpcy5fY29tcG9uZW50UmVmLnByb3BzID0gdGhpcy5yZWFjdFByb3BzIHx8IHVuZGVmaW5lZDtcblx0XHRcdHRoaXMuX2NvbXBvbmVudFJlZi5ldmVudHMgPSB0aGlzLnJlYWN0RXZlbnRzIHx8IHVuZGVmaW5lZDtcblx0XHRcdHRoaXMuX2NvbXBvbmVudFJlZi5jbGFzc0NvbnRhaW5lciA9IHRoaXMucmVhY3RDbGFzc0NvbnRhaW5lciB8fCB1bmRlZmluZWQ7XG5cdFx0XHR0aGlzLl92aWV3Q29udGFpbmVyUmVmLmluc2VydChjb21wb25lbnRDb21wb25lbnRSZWYuaG9zdFZpZXcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKCdJbnZhbGlkIHJlYWN0IGNvbXBvbmVudCByZWY6JywgdGhpcy5yZWFjdENvbm5lY3RvckNvbXBvbmVudCk7XG5cdFx0fVxuXHR9XG5cblx0X3VwZGF0ZUNvbXBvbmVudCgpIHtcblx0XHR0aGlzLl9jb21wb25lbnRSZWYucHJvcHMgPSB0aGlzLnJlYWN0UHJvcHMgfHwgdW5kZWZpbmVkO1xuXHRcdHRoaXMuX2NvbXBvbmVudFJlZi5ldmVudHMgPSB0aGlzLnJlYWN0RXZlbnRzIHx8IHVuZGVmaW5lZDtcblx0XHR0aGlzLl9jb21wb25lbnRSZWYuY2xhc3NDb250YWluZXIgPSB0aGlzLnJlYWN0Q2xhc3NDb250YWluZXIgfHwgdW5kZWZpbmVkO1xuXHRcdHRoaXMuX2NvbXBvbmVudFJlZi5yZW5kZXIoKTtcblx0fVxuXG59XG4iXX0=