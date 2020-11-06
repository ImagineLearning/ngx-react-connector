import { Directive, Input } from '@angular/core';
import { get } from 'lodash';
import { ReactConnectorComponent } from './react-connector.component';
import * as i0 from "@angular/core";
var ReactConnectorDirective = /** @class */ (function () {
    function ReactConnectorDirective(_viewContainerRef, _componentFactoryResolver, _injector) {
        this._viewContainerRef = _viewContainerRef;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._injector = _injector;
    }
    ReactConnectorDirective.prototype.ngOnInit = function () {
        this.render();
    };
    ReactConnectorDirective.prototype.ngOnChanges = function (changes) {
        var propChange = !get(changes, 'reactProps.firstChange', true);
        var eventsChange = !get(changes, 'reactEvents.firstChange', true);
        var classContainerChange = !get(changes, 'reactClassContainer.firstChange', true);
        if (propChange || eventsChange || classContainerChange) {
            this._updateComponent();
        }
    };
    ReactConnectorDirective.prototype.isClassComponent = function (component) {
        return (typeof component === 'function' && !!component.prototype.isReactComponent);
    };
    ReactConnectorDirective.prototype.isFunctionComponent = function (component) {
        var componentString = String(component);
        return (typeof component === 'function' && !!componentString.match(/React([^\.]+)?\.createElement/ig));
    };
    ReactConnectorDirective.prototype.isReactComponent = function (component) {
        return (this.isClassComponent(component) ||
            this.isFunctionComponent(component));
    };
    ReactConnectorDirective.prototype.render = function () {
        var isReactComponent = this.isReactComponent(this.reactConnectorComponent);
        if (isReactComponent && this._viewContainerRef) {
            this._viewContainerRef.clear();
            var componentFactory = this._componentFactoryResolver.resolveComponentFactory(ReactConnectorComponent);
            var componentComponentRef = componentFactory.create(this._injector);
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
    };
    ReactConnectorDirective.prototype._updateComponent = function () {
        this._componentRef.props = this.reactProps || undefined;
        this._componentRef.events = this.reactEvents || undefined;
        this._componentRef.classContainer = this.reactClassContainer || undefined;
        this._componentRef.render();
    };
    ReactConnectorDirective.ɵfac = function ReactConnectorDirective_Factory(t) { return new (t || ReactConnectorDirective)(i0.ɵɵdirectiveInject(i0.ViewContainerRef), i0.ɵɵdirectiveInject(i0.ComponentFactoryResolver), i0.ɵɵdirectiveInject(i0.Injector)); };
    ReactConnectorDirective.ɵdir = i0.ɵɵdefineDirective({ type: ReactConnectorDirective, selectors: [["", "reactConnectorComponent", ""]], inputs: { reactConnectorComponent: "reactConnectorComponent", reactProps: "reactProps", reactEvents: "reactEvents", reactClassContainer: "reactClassContainer" }, features: [i0.ɵɵNgOnChangesFeature] });
    return ReactConnectorDirective;
}());
export { ReactConnectorDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhY3QtY29ubmVjdG9yLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1yZWFjdC1jb25uZWN0b3IvIiwic291cmNlcyI6WyJsaWIvcmVhY3QtY29ubmVjdG9yL3JlYWN0LWNvbm5lY3Rvci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBb0MsS0FBSyxFQUF3RCxNQUFNLGVBQWUsQ0FBQztBQUN6SSxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBRTdCLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDOztBQUV0RTtJQWVDLGlDQUNTLGlCQUFtQyxFQUNuQyx5QkFBbUQsRUFDbkQsU0FBbUI7UUFGbkIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFrQjtRQUNuQyw4QkFBeUIsR0FBekIseUJBQXlCLENBQTBCO1FBQ25ELGNBQVMsR0FBVCxTQUFTLENBQVU7SUFDeEIsQ0FBQztJQUVMLDBDQUFRLEdBQVI7UUFDQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDZixDQUFDO0lBRUQsNkNBQVcsR0FBWCxVQUFZLE9BQXNCO1FBQ2pDLElBQU0sVUFBVSxHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNqRSxJQUFNLFlBQVksR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDcEUsSUFBTSxvQkFBb0IsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDcEYsSUFBSSxVQUFVLElBQUksWUFBWSxJQUFJLG9CQUFvQixFQUFFO1lBQ3ZELElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1NBQ3hCO0lBQ0YsQ0FBQztJQUVELGtEQUFnQixHQUFoQixVQUFpQixTQUFTO1FBQ3pCLE9BQU8sQ0FBQyxPQUFPLFNBQVMsS0FBSyxVQUFVLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUNwRixDQUFDO0lBRUQscURBQW1CLEdBQW5CLFVBQW9CLFNBQVM7UUFDNUIsSUFBTSxlQUFlLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzFDLE9BQU8sQ0FBQyxPQUFPLFNBQVMsS0FBSyxVQUFVLElBQUksQ0FBQyxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsaUNBQWlDLENBQUMsQ0FBQyxDQUFDO0lBQ3hHLENBQUM7SUFFRCxrREFBZ0IsR0FBaEIsVUFBaUIsU0FBUztRQUN6QixPQUFPLENBQ04sSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQztZQUNoQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsU0FBUyxDQUFDLENBQ25DLENBQUM7SUFDSCxDQUFDO0lBRUQsd0NBQU0sR0FBTjtRQUNDLElBQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1FBQzdFLElBQUksZ0JBQWdCLElBQUksSUFBSSxDQUFDLGlCQUFpQixFQUFFO1lBQy9DLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUMvQixJQUFNLGdCQUFnQixHQUFHLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyx1QkFBdUIsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1lBQ3pHLElBQU0scUJBQXFCLEdBQUcsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUN0RSxJQUFJLENBQUMsYUFBYSxHQUFHLHFCQUFxQixDQUFDLFFBQVEsQ0FBQztZQUNwRCxJQUFJLENBQUMsYUFBYSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyx1QkFBdUIsQ0FBQztZQUNwRSxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxJQUFJLFNBQVMsQ0FBQztZQUN4RCxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxJQUFJLFNBQVMsQ0FBQztZQUMxRCxJQUFJLENBQUMsYUFBYSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsbUJBQW1CLElBQUksU0FBUyxDQUFDO1lBQzFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMscUJBQXFCLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDOUQ7YUFBTTtZQUNOLE9BQU8sQ0FBQyxLQUFLLENBQUMsOEJBQThCLEVBQUUsSUFBSSxDQUFDLHVCQUF1QixDQUFDLENBQUM7U0FDNUU7SUFDRixDQUFDO0lBRUQsa0RBQWdCLEdBQWhCO1FBQ0MsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsSUFBSSxTQUFTLENBQUM7UUFDeEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsSUFBSSxTQUFTLENBQUM7UUFDMUQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixJQUFJLFNBQVMsQ0FBQztRQUMxRSxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQzdCLENBQUM7a0dBckVXLHVCQUF1QjtnRUFBdkIsdUJBQXVCO2tDQVJwQztDQStFQyxBQTFFRCxJQTBFQztTQXZFWSx1QkFBdUI7a0RBQXZCLHVCQUF1QjtjQUhuQyxTQUFTO2VBQUM7Z0JBQ1YsUUFBUSxFQUFFLDJCQUEyQjthQUNyQzs7a0JBR0MsS0FBSzttQkFBQyx5QkFBeUI7O2tCQUUvQixLQUFLOztrQkFFTCxLQUFLOztrQkFFTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBPbkluaXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcywgSW5wdXQsIFZpZXdDb250YWluZXJSZWYsIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGdldCB9IGZyb20gJ2xvZGFzaCc7XG5cbmltcG9ydCB7IFJlYWN0Q29ubmVjdG9yQ29tcG9uZW50IH0gZnJvbSAnLi9yZWFjdC1jb25uZWN0b3IuY29tcG9uZW50JztcblxuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnW3JlYWN0Q29ubmVjdG9yQ29tcG9uZW50XSdcbn0pXG5leHBvcnQgY2xhc3MgUmVhY3RDb25uZWN0b3JEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG5cblx0QElucHV0KCdyZWFjdENvbm5lY3RvckNvbXBvbmVudCcpIHJlYWN0Q29ubmVjdG9yQ29tcG9uZW50OiBhbnk7XG5cblx0QElucHV0KCkgcmVhY3RQcm9wczogeyBba2V5OiBzdHJpbmddOiBhbnkgfTtcblxuXHRASW5wdXQoKSByZWFjdEV2ZW50czogeyBba2V5OiBzdHJpbmddOiAoKSA9PiBhbnkgfTtcblxuXHRASW5wdXQoKSByZWFjdENsYXNzQ29udGFpbmVyOiBzdHJpbmc7XG5cblx0cHJpdmF0ZSBfY29tcG9uZW50UmVmOiBSZWFjdENvbm5lY3RvckNvbXBvbmVudDtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIF92aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxuXHRcdHByaXZhdGUgX2NvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuXHRcdHByaXZhdGUgX2luamVjdG9yOiBJbmplY3RvclxuXHQpIHsgfVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdHRoaXMucmVuZGVyKCk7XG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG5cdFx0Y29uc3QgcHJvcENoYW5nZSA9ICFnZXQoY2hhbmdlcywgJ3JlYWN0UHJvcHMuZmlyc3RDaGFuZ2UnLCB0cnVlKTtcblx0XHRjb25zdCBldmVudHNDaGFuZ2UgPSAhZ2V0KGNoYW5nZXMsICdyZWFjdEV2ZW50cy5maXJzdENoYW5nZScsIHRydWUpO1xuXHRcdGNvbnN0IGNsYXNzQ29udGFpbmVyQ2hhbmdlID0gIWdldChjaGFuZ2VzLCAncmVhY3RDbGFzc0NvbnRhaW5lci5maXJzdENoYW5nZScsIHRydWUpO1xuXHRcdGlmIChwcm9wQ2hhbmdlIHx8IGV2ZW50c0NoYW5nZSB8fCBjbGFzc0NvbnRhaW5lckNoYW5nZSkge1xuXHRcdFx0dGhpcy5fdXBkYXRlQ29tcG9uZW50KCk7XG5cdFx0fVxuXHR9XG5cblx0aXNDbGFzc0NvbXBvbmVudChjb21wb25lbnQpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gKHR5cGVvZiBjb21wb25lbnQgPT09ICdmdW5jdGlvbicgJiYgISFjb21wb25lbnQucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQpO1xuXHR9XG5cblx0aXNGdW5jdGlvbkNvbXBvbmVudChjb21wb25lbnQpOiBib29sZWFuIHtcblx0XHRjb25zdCBjb21wb25lbnRTdHJpbmcgPSBTdHJpbmcoY29tcG9uZW50KTtcblx0XHRyZXR1cm4gKHR5cGVvZiBjb21wb25lbnQgPT09ICdmdW5jdGlvbicgJiYgISFjb21wb25lbnRTdHJpbmcubWF0Y2goL1JlYWN0KFteXFwuXSspP1xcLmNyZWF0ZUVsZW1lbnQvaWcpKTtcblx0fVxuXG5cdGlzUmVhY3RDb21wb25lbnQoY29tcG9uZW50KTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIChcblx0XHRcdHRoaXMuaXNDbGFzc0NvbXBvbmVudChjb21wb25lbnQpIHx8XG5cdFx0XHR0aGlzLmlzRnVuY3Rpb25Db21wb25lbnQoY29tcG9uZW50KVxuXHRcdCk7XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0Y29uc3QgaXNSZWFjdENvbXBvbmVudCA9IHRoaXMuaXNSZWFjdENvbXBvbmVudCh0aGlzLnJlYWN0Q29ubmVjdG9yQ29tcG9uZW50KTtcblx0XHRpZiAoaXNSZWFjdENvbXBvbmVudCAmJiB0aGlzLl92aWV3Q29udGFpbmVyUmVmKSB7XG5cdFx0XHR0aGlzLl92aWV3Q29udGFpbmVyUmVmLmNsZWFyKCk7XG5cdFx0XHRjb25zdCBjb21wb25lbnRGYWN0b3J5ID0gdGhpcy5fY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KFJlYWN0Q29ubmVjdG9yQ29tcG9uZW50KTtcblx0XHRcdGNvbnN0IGNvbXBvbmVudENvbXBvbmVudFJlZiA9IGNvbXBvbmVudEZhY3RvcnkuY3JlYXRlKHRoaXMuX2luamVjdG9yKTtcblx0XHRcdHRoaXMuX2NvbXBvbmVudFJlZiA9IGNvbXBvbmVudENvbXBvbmVudFJlZi5pbnN0YW5jZTtcblx0XHRcdHRoaXMuX2NvbXBvbmVudFJlZi5yZWFjdENvbXBvbmVudFJlZiA9IHRoaXMucmVhY3RDb25uZWN0b3JDb21wb25lbnQ7XG5cdFx0XHR0aGlzLl9jb21wb25lbnRSZWYucHJvcHMgPSB0aGlzLnJlYWN0UHJvcHMgfHwgdW5kZWZpbmVkO1xuXHRcdFx0dGhpcy5fY29tcG9uZW50UmVmLmV2ZW50cyA9IHRoaXMucmVhY3RFdmVudHMgfHwgdW5kZWZpbmVkO1xuXHRcdFx0dGhpcy5fY29tcG9uZW50UmVmLmNsYXNzQ29udGFpbmVyID0gdGhpcy5yZWFjdENsYXNzQ29udGFpbmVyIHx8IHVuZGVmaW5lZDtcblx0XHRcdHRoaXMuX3ZpZXdDb250YWluZXJSZWYuaW5zZXJ0KGNvbXBvbmVudENvbXBvbmVudFJlZi5ob3N0Vmlldyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoJ0ludmFsaWQgcmVhY3QgY29tcG9uZW50IHJlZjonLCB0aGlzLnJlYWN0Q29ubmVjdG9yQ29tcG9uZW50KTtcblx0XHR9XG5cdH1cblxuXHRfdXBkYXRlQ29tcG9uZW50KCkge1xuXHRcdHRoaXMuX2NvbXBvbmVudFJlZi5wcm9wcyA9IHRoaXMucmVhY3RQcm9wcyB8fCB1bmRlZmluZWQ7XG5cdFx0dGhpcy5fY29tcG9uZW50UmVmLmV2ZW50cyA9IHRoaXMucmVhY3RFdmVudHMgfHwgdW5kZWZpbmVkO1xuXHRcdHRoaXMuX2NvbXBvbmVudFJlZi5jbGFzc0NvbnRhaW5lciA9IHRoaXMucmVhY3RDbGFzc0NvbnRhaW5lciB8fCB1bmRlZmluZWQ7XG5cdFx0dGhpcy5fY29tcG9uZW50UmVmLnJlbmRlcigpO1xuXHR9XG5cbn1cbiJdfQ==