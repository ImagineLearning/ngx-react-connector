import { ɵɵdefineComponent, ɵɵviewQuery, ElementRef, ɵɵqueryRefresh, ɵɵloadQuery, ɵɵclassMap, ɵɵelement, ɵɵproperty, ɵsetClassMetadata, Component, HostBinding, ViewChild, Input, ɵɵdirectiveInject, ViewContainerRef, ComponentFactoryResolver, Injector, ɵɵdefineDirective, ɵɵNgOnChangesFeature, Directive, ɵɵdefineInjectable, Injectable, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { get, merge } from 'lodash';
import { __assign } from 'tslib';
import { render, unmountComponentAtNode } from 'react-dom';
import { createElement } from 'react';
import { NgClass, CommonModule } from '@angular/common';

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
            render(createElement(this.reactComponentRef, __assign(__assign({}, this.props || {}), this.events || {})), this._containerRef.nativeElement);
        }
    };
    ReactConnectorComponent.prototype.ngOnDestroy = function () {
        unmountComponentAtNode(this._containerRef.nativeElement);
    };
    ReactConnectorComponent.ɵfac = function ReactConnectorComponent_Factory(t) { return new (t || ReactConnectorComponent)(); };
    ReactConnectorComponent.ɵcmp = ɵɵdefineComponent({ type: ReactConnectorComponent, selectors: [["rc-render-container"]], viewQuery: function ReactConnectorComponent_Query(rf, ctx) { if (rf & 1) {
            ɵɵviewQuery(_c0, true, ElementRef);
        } if (rf & 2) {
            var _t;
            ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._containerRef = _t.first);
        } }, hostVars: 2, hostBindings: function ReactConnectorComponent_HostBindings(rf, ctx) { if (rf & 2) {
            ɵɵclassMap(ctx.class);
        } }, inputs: { reactComponentRef: "reactComponentRef", props: "props", events: "events", classContainer: "classContainer" }, decls: 2, vars: 1, consts: [[3, "ngClass"], ["container", ""]], template: function ReactConnectorComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelement(0, "div", 0, 1);
        } if (rf & 2) {
            ɵɵproperty("ngClass", ctx.classContainer);
        } }, directives: [NgClass], styles: [".react-connector[_ngcontent-%COMP%] { display:block; }"] });
    return ReactConnectorComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(ReactConnectorComponent, [{
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
    ReactConnectorDirective.ɵfac = function ReactConnectorDirective_Factory(t) { return new (t || ReactConnectorDirective)(ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(ComponentFactoryResolver), ɵɵdirectiveInject(Injector)); };
    ReactConnectorDirective.ɵdir = ɵɵdefineDirective({ type: ReactConnectorDirective, selectors: [["", "reactConnectorComponent", ""]], inputs: { reactConnectorComponent: "reactConnectorComponent", reactProps: "reactProps", reactEvents: "reactEvents", reactClassContainer: "reactClassContainer" }, features: [ɵɵNgOnChangesFeature] });
    return ReactConnectorDirective;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(ReactConnectorDirective, [{
        type: Directive,
        args: [{
                selector: '[reactConnectorComponent]'
            }]
    }], function () { return [{ type: ViewContainerRef }, { type: ComponentFactoryResolver }, { type: Injector }]; }, { reactConnectorComponent: [{
            type: Input,
            args: ['reactConnectorComponent']
        }], reactProps: [{
            type: Input
        }], reactEvents: [{
            type: Input
        }], reactClassContainer: [{
            type: Input
        }] }); })();

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
    ReactConnectorService.ɵprov = ɵɵdefineInjectable({ token: ReactConnectorService, factory: ReactConnectorService.ɵfac });
    return ReactConnectorService;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(ReactConnectorService, [{
        type: Injectable
    }], null, null); })();

var ReactConnectorModule = /** @class */ (function () {
    function ReactConnectorModule() {
    }
    ReactConnectorModule.ɵmod = ɵɵdefineNgModule({ type: ReactConnectorModule });
    ReactConnectorModule.ɵinj = ɵɵdefineInjector({ factory: function ReactConnectorModule_Factory(t) { return new (t || ReactConnectorModule)(); }, providers: [
            ReactConnectorService
        ], imports: [[
                CommonModule
            ]] });
    return ReactConnectorModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(ReactConnectorModule, { declarations: [ReactConnectorComponent,
        ReactConnectorDirective], imports: [CommonModule], exports: [ReactConnectorDirective] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(ReactConnectorModule, [{
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

/*
 * Public API Surface of ngx-react-connector
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ReactConnectorDirective, ReactConnectorModule, ReactConnectorService };
//# sourceMappingURL=ngx-react-connector.js.map
