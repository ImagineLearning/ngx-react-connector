import { OnInit, OnChanges, SimpleChanges, ViewContainerRef, ComponentFactoryResolver, Injector } from '@angular/core';
import * as i0 from "@angular/core";
export declare class ReactConnectorDirective implements OnInit, OnChanges {
    private _viewContainerRef;
    private _componentFactoryResolver;
    private _injector;
    reactConnectorComponent: any;
    reactProps: {
        [key: string]: any;
    };
    reactEvents: {
        [key: string]: () => any;
    };
    reactClassContainer: string;
    private _componentRef;
    constructor(_viewContainerRef: ViewContainerRef, _componentFactoryResolver: ComponentFactoryResolver, _injector: Injector);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    isClassComponent(component: any): boolean;
    isFunctionComponent(component: any): boolean;
    isReactComponent(component: any): boolean;
    render(): void;
    _updateComponent(): void;
    static ɵfac: i0.ɵɵFactoryDef<ReactConnectorDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<ReactConnectorDirective, "[reactConnectorComponent]", never, { "reactConnectorComponent": "reactConnectorComponent"; "reactProps": "reactProps"; "reactEvents": "reactEvents"; "reactClassContainer": "reactClassContainer"; }, {}, never>;
}
