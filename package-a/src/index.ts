import { IPackageB } from "package-b";

export interface IPackageA extends IPackageB {
    propertyOne: string;
}

export const sayHello = (props: IPackageA) => {
    console.log("hello from package a", props.propertyOne, props.propertyTwo);
}

