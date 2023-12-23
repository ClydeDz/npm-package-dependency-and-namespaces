export interface IPackageA {
    propertyOne: string;
}

export const sayHello = (props: IPackageA) => {
    console.log("hello from package a", props.propertyOne);
}

