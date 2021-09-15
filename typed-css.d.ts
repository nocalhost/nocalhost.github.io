declare module '*.module.scss' {
    const classes: { readonly [key: string]: string}
    export default classes
}

declare module '*.svg' {
    import React = require('react');
    export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
    const src: string;
    export default src;

}