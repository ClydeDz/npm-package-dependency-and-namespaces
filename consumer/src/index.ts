import { sayHello, IPackageA } from "package-a";

const props: IPackageA = {
    propertyOne: "hello world",
    propertyTwo: "bye bye"
}

sayHello(props)