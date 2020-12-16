// @ts-ignore
import debounce from 'lodash/debounce';

type onResize = (e: any, isMobile: boolean, isTablet: boolean) => void;

export const defaultPhoneWidth = 479;

/**
 * Use to handle window resize event
 *
 * @example
 * const onResize = (e,isMobile, isTablet)=>{...handle resize}
 * const wr = new WindowResponse(onResize,150);
 * wr.destroy(); // unsubscribe from event
 */
export class WindowResponse {
    _config: {phoneWidth: number, tabletWidth: number};
    _onResizeCb = (e : any, isMobile : boolean, isTablet : boolean) => {};
    _debounceResize : (e: any) => void = () => {};

    /**
     * @param onResizeCb
     * @param debounceTime
     * @param config
     */
    constructor(
        onResizeCb : onResize,
        debounceTime: number = 100,
        config: {phoneWidth: number, tabletWidth: number} = {phoneWidth: defaultPhoneWidth, tabletWidth: 1000}
    ) {
        this._config = config;
        this.init(onResizeCb, debounceTime);
    }

    /**
     * @param onResizeCb
     * @param debounceTime
     */
    init(onResizeCb: onResize, debounceTime: number) {
        this._onResizeCb = onResizeCb;
        this._debounceResize = debounce(this._onResize, debounceTime);

        this._onResizeCb(null, this.isMobile(), this.isTablet());
        window.addEventListener('resize', this._debounceResize);
    }

    _onResize = (e: any) => {
        this._onResizeCb(e, this.isMobile(), this.isTablet());
    };

    isMobile(): boolean {
        return window.innerWidth <= this._config.phoneWidth;
    }

    static isMobile(): boolean {
        return window.innerWidth <= defaultPhoneWidth;
    }

    isTablet(): boolean {
        return window.innerWidth <= this._config.tabletWidth;
    }

    destroy() {
        window.removeEventListener('resize', this._debounceResize);
    }
}
