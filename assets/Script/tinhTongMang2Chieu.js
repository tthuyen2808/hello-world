// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },


    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.array = [
            [0, 2, 0, 20, 0],
            [0, 2, 0, 1, 0],
            [2, 32, 5, 50, 0],
            [0, 4, 0, 0, 0],
            [0, 0, 7, 4, 0]
        ];
        var vitriRow = this.tinhHangLN();
        console.log("maxRow" + vitriRow.max + "-" + vitriRow.vtRow);
        var vitriColumn = this.tinhCotLN();
        console.log("maxColumn: " + vitriColumn.max + "-" + vitriColumn.vtColumn);
     /*   var a = 5;
        var b = 6;
        var temp = 0;
        console.log(a +","+ b);
        temp = a;
        a = b;
        b = temp;
        console.log(a +","+ b); */
        
    },
    // Xuất hàng, cột có tổng lớn nhất
    tinhHangLN() {
        console.log("tinhHangLN");

        var total = 0;
        var vtRow = 0;
        var max = 0;
        var result = new Object();
        var len = this.array.length;

        for(var i = 0; i < len; i++) {
            total = 0;
            for(var j = 0; j < this.array[i].length; j++) {
                total = total + this.array[i][j];
            }
            if(total >= max) {
                max = total;
                vtRow = i;
            }
        }
        result.max = max;
        result.vtRow = vtRow;
        return result;
    },

    tinhCotLN() {
        console.log("tinhCotLN");

        var total = 0;
        var vtColumn = 0;
        var max = 0;
        var len = this.array.length;
        var result = new Object();
        for (var i = 0; i < len; i++) {
            total = 0;
            for (var j = 0; j < this.array[i].length; j++) {
                total = total + this.array[j][i];
            }
            if(total >= max) {
                max = total;
                vtColumn = i;
            }
        }
        result.max = max;
        result.vtColumn = vtColumn;
        return result;
    },

   // start () {},

    // update (dt) {},
});
