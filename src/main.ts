// only ever import this once in the app
import "reflect-metadata"

import { container } from "./ioc/inversify.config";
import { ITestClass1 } from "./ITestClass1";
import { TYPES } from "./ioc/types";

const testClass1 = container.get<ITestClass1>(TYPES.ITest1)
//const test1: Test1 = new Test1()

console.log('@@@ ' + testClass1.doStuff())