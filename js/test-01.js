// 默认导出
/* 
    export default {
        成员A,
        成员B,
        ...
    }
*/
/* 
    在一个模块中，只允许使用export default向外默认暴露一次成员。
    在一个模块中，没有向外暴露成员，其他模块引入该模块时将会得到一个空对象。
*/
let num = 10;
export default {
    num
}