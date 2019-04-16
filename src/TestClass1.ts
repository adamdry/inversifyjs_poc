import { ITestClass1 } from "./ITestClass1";
import { injectable } from "inversify";

@injectable()
export class TestClass1 implements ITestClass1 {

    //@inject(TYPES.IUserLister) private userLister: IUserLister

    public doStuff(): string {
        //return this.userLister.listUsers('1')
        return 'blah2'
    }

}