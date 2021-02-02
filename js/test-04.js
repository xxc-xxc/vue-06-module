// 按需导入
import {num, fn as printFn, myName} from "./test-03"
// 同时导入默认导出成员以及按需导出的成员
import /* test, */ {num, fn as printFn, myName} from "./test-03"