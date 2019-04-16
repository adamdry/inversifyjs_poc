import { Container } from "inversify"
import { TYPES } from "./types"
import { ITestClass1 } from "./../ITestClass1"
import { TestClass1 } from "./../TestClass1"

const container = new Container()

container.bind<ITestClass1>(TYPES.ITest1).to(TestClass1)

export { container }