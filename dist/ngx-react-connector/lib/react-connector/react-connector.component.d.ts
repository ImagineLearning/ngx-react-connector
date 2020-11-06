import { AfterViewInit, OnDestroy } from '@angular/core';
import * as i0 from "@angular/core";
export declare class ReactConnectorComponent implements AfterViewInit, OnDestroy {
    class: string;
    private _containerRef;
    reactComponentRef: any;
    props: {
        [key: string]: any;
    } | undefined;
    events: {
        [key: string]: () => any;
    } | undefined;
    classContainer: string | undefined;
    constructor();
    ngAfterViewInit(): void;
    render(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDef<ReactConnectorComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ReactConnectorComponent, "rc-render-container", never, { "reactComponentRef": "reactComponentRef"; "props": "props"; "events": "events"; "classContainer": "classContainer"; }, {}, never, never>;
}
