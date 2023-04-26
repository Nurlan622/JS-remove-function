let obj = {
    arr: [1, 4, 5, 6, 7, 3, 55],
    remove: function() {
        return this.arr[this.arr.length--]
    }
}
console.log(obj);
obj.remove()
console.log(obj.arr);