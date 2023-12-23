import { sayHello, IPackageA } from "package-a";

const props: IPackageA = {
    propertyOne: "hello world"
}

sayHello(props)