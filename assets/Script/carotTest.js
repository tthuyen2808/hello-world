// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
const leftPadding = 20;
const boardSize = 600;
const cellPading = 1;
const soHang = 20;
const doRong = boardSize / soHang;
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
        caroArray:[],
        drawNode: cc.Node
    },

    // LIFE-CYCLE CALLBACKS:

     onLoad () {
        this.drawItem(20);
        this.caroArray = [
            [0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0],
            [0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0],
            [0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0],
            [0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0],
            [0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0],
            [0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0],
            [0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0],
            [0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0],
            [0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0],
            [0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0],
            [0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0],
            [0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0],
            [0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0],
            [0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0],
            [0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0],
            [0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0],
            [0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0],
            [0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0],
            [0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0],
            [0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0]
        ];
        var self = this;
        this.drawNode.on(cc.Node.EventType.TOUCH_START, function (event) {
            var x = event.getLocationX();
            var y = event.getLocationY();
            var position = self.drawNode.convertToNodeSpaceAR(cc.v2(x, y));
            var deltaX = Math.round(position.x - (position.x % doRong) + doRong/2);
            var deltaY = Math.round(position.y - (position.y % doRong) + doRong/2);
            var vitri = self.tinhHangCot(deltaX,deltaY);
            console.log("vitri" + vitri.hang + "," + vitri.cot);

        });
        this.drawNode.on(cc.Node.EventType.TOUCH_END, function (event) {
        });
    },

     drawItem(soHang) {
        var g = this.drawNode.getComponent(cc.Graphics);
        g.lineWidth = 1;
        g.strokeColor.fromHEX('#000000');
        for (var hang = 0; hang < soHang; hang++) {
            for (var cot = 0; cot < soHang ; cot++) {
                g.roundRect(leftPadding + hang * doRong, leftPadding + cellPading + doRong * cot, doRong - cellPading * 2, doRong - cellPading * 2, 0);
            }
        }
        g.fill();
        for (var x = 0; x < soHang; x++) {
            for (var y = 0; y < soHang; y++) {
                g.strokeColor.fromHEX('#000000');
                g.roundRect(leftPadding + cellPading + x * doRong, leftPadding + cellPading + doRong * y, doRong - cellPading * 2, doRong - cellPading * 2, 0);
                g.stroke();
            }
        }   
},

    tinhHangCot(x, y) {
        var hang = Math.floor((x - leftPadding) / doRong);
        var cot = Math.floor((y - leftPadding - cellPading) / doRong);
        var vitri = new Object();
            
    },

     check5Square(startRow, startColumn, value) {
        var count = 0;
        // check hàng Chéo từ trên xuống
        for (var i = 0; i < 5; i++) {
            // o = (i,i) -> Ex: o = (2,2), (3,3), (4,4)
            if(this.caroArray[startRow + i][startColumn + i] == value) {
                count++;
            }
            if (count == 5) {
            var result = new Object();
            result.type = "CheoXuong";
            result.startRow = startRow;
            result.startColumn = startColumn;
            return result;
        }
        }
       
       // check hàng Chéo từ dưới lên
         count = 0;
         for (var i = 0; i < 5; i++) {
             if (this.caroArray[startRow + 4 - i][startColumn + i] == value) {
                 count++;
             }
         }
         if (count == 5) {
             var result = new Object();
             result.type = "CheoLen";
             result.startRow = startRow;
             result.startColumn = startColumn;
             return result;
         }

         // check hàng Ngang
        
         for (var i = startRow; i < startRow + 5; i++) {
            count = 0; //reset lại biến đếm sau mỗi dòng for
            for (var j = startColumn; j < startColumn + 5; j++) {
                if (this.caroArray[i][j] == value) {
                    count++;
                }
            }
            if (count == 5) {
                console.log("Win Ngang");
                var result = new Object();
                result.type = "Ngang";
                result.startRow = i;
                result.startColumn = startColumn;
                return result;
            }
        }
        // check hàng Dọc
       for (var i = startColumn; i < startColumn + 5; i++) {
            count = 0; //reset lại biến đếm sau mỗi dòng for
            for (var j = startRow; j < startRow + 5; j++) {
                if (this.caroArray[j][i] == value) {
                    count++;
                }
            }
            if (count == 5) {
                var result = new Object();
                result.type = "Doc";
                result.startRow = startRow;
                result.startColumn = i;
                return result;
            }
        } 
        return null;
    },
    checkAll() {
        var len = this.caroArray.length;
        for(var i = 0; i <= len - 5 ; i++) {
            for(var j = 0; j <= len - 5; j++){
                var result1 = this.check5Square(i,j,1);
                if(result1 != null) {
                    console.log("1 win");
                   return;
                } else {
                    var result2 = this.check5Square(i,j,2);
                    if(result2 != null) {
                        console.log("2 win");
                    return;
                    }
                }
               
            }
        }
        console.log("chua win");
    }

  //  start () {},

    // update (dt) {},
});
