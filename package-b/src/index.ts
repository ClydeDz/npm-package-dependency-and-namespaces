export interface IPackageB {
    propertyTwo: string;
}

export const sayBye = (props: IPackageB) => {
    console.log("bye from package b", props.propertyTwo);
}

