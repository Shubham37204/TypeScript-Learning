//arryas
var arr: [] = [] //var arr = []?<-both are same
var arr1: number[] = [1, 2]
var arr11: number[][] = [[1, 2], [1, 2]] //<-- 2d array

var arr2: string[] = ['hello']
var arr3: string[][] = [['hello'], ['shubham']] //2d array of  string

var arr4 = [['hello', 1], ['shubham'], 1]  //2d arry of number and string

//tuples
const coord: [number, number] = [1, 2]//first and seconds values both are number
const coord1: [number, string] = [1, 'shubham']

//Tuple array or Array of tuple
const coor2: [number, number][] = [
    [1, 2], [3, 4]
] //first and seconds values both are number but in form of array

const coord3: [number, number[]][] = [
    [1, [1, 2]],
    [2, [-1, -2]]
]
