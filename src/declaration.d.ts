declare module "*.png";

declare module "*.png" {
    const value: any;
    export default value;
}

declare module "*.png" {
    const value: any;
    export = value;
}

declare module '*.svg' {
    const content: string;
    export default content;
}