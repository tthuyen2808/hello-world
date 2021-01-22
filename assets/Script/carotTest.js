// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
const leftPadding = 20;
const boardSize = 600;
const cellPading = 0;
const soHang = 10;
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
        caroArray: [],
        drawNode: cc.Node,
        user: -1,
        labelX: cc.Node,
        labelO: cc.Node
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.drawItem(soHang);
        this.caroArray = [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ];
        var self = this;
        this.drawNode.on(cc.Node.EventType.TOUCH_START, function (event) {
            var x = event.getLocationX();
            var y = event.getLocationY();
            var position = self.drawNode.convertToNodeSpaceAR(cc.v2(x, y));
            console.log(position.x + "," + position.y + ".." + doRong);
            var hang = Math.floor(position.x / doRong);
            var cot = Math.floor(position.y / doRong);
            var midPointX = doRong * hang + 1 / 2 * doRong;
            var midPointY = doRong * cot + 1 / 2 * doRong;
            console.log(midPointX + "-" + midPointY);
            self.drawCycle(midPointX,midPointY);
            /*var deltaX = Math.round(position.x - (position.x % doRong) + doRong/2);
            var deltaY = Math.round(position.y - (position.y % doRong) + doRong/2);
            var vitri = self.tinhHangCot(deltaX,deltaY);
            console.log("hang: " + vitri.hang + "- cot: " + vitri.cot);
            if(self.user % 2 == 0) {
                self.caroArray[vitri.hang][vitri.cot] = "1";
            } else {
                self.caroArray[vitri.hang][vitri.cot] = "2";
            }*/
        });
        this.drawNode.on(cc.Node.EventType.TOUCH_END, function (event) {
            self.user = self.user + 1;
        });
    },


    drawItem(soHang) {
        var g = this.drawNode.getComponent(cc.Graphics);
        g.lineWidth = 4;
        g.strokeColor.fromHEX('#ff0000');
        /*      for (var hang = 0; hang < soHang; hang++) {
                  for (var cot = 0; cot < soHang ; cot++) {
                      g.roundRect(hang * doRong, doRong * cot, doRong, doRong, 0);
                  }
              }
              g.fill();
              for (var x = 0; x < soHang; x++) {
                  for (var y = 0; y < soHang; y++) {
                      g.strokeColor.fromHEX('#000000');
                      g.roundRect(leftPadding + cellPading + x * doRong, leftPadding + cellPading + doRong * y, doRong - cellPading * 2, doRong - cellPading * 2, 0);
                      g.stroke();
                  }
              }   */
        g.roundRect(0, 0, boardSize, boardSize, 0);
        console.log("drawItem");
        //g.stroke();
        //Vẽ đường line ngang
        for (var i = 0; i < soHang; i++) {
            g.moveTo(0, i * doRong);
            g.lineTo(boardSize, i * doRong);
        }
        // Vẽ đường dọc
        for (var i = 0; i < soHang; i++) {
            g.moveTo(i * doRong, 0);
            g.lineTo(i * doRong, boardSize);
        }
        g.stroke();
        //
    },
    drawCycle(x,y) {
        var g = this.drawNode.getComponent(cc.Graphics);
        g.lineWidth = 4;
        g.fillColor.fromHEX('#ff0000');
        g.circle(x,y,10);
        g.fill();
    },

    addLabel(x, y) {

        if (this.user % 2 == 0) {
            var labelX = cc.instantiate(this.labelX);
            labelX.parent = this.drawNode;
            labelX.setPosition(x, y);
        } else {
            var labelO = cc.instantiate(this.labelO);
            labelO.parent = this.drawNode;
            labelO.setPosition(x, y);
        }
    },

    tinhHangCot(x, y) {
        var cot = Math.floor((x - leftPadding) / doRong);
        var hang = Math.floor((y - leftPadding - cellPading) / doRong);
        var vitri = new Object();
        var len = this.caroArray.length;
        vitri.hang = len - 1 - hang;
        vitri.cot = cot;
        return vitri;
    },

    check5Square(startRow, startColumn, value) {
        var count = 0;
        // check hàng Chéo từ trên xuống
        for (var i = 0; i < 5; i++) {
            // o = (i,i) -> Ex: o = (2,2), (3,3), (4,4)
            if (this.caroArray[startRow + i][startColumn + i] == value) {
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
        for (var i = 0; i <= len - 5; i++) {
            for (var j = 0; j <= len - 5; j++) {
                var result1 = this.check5Square(i, j, 1);
                if (result1 != null) {
                    console.log("1 win");
                    return;
                } else {
                    var result2 = this.check5Square(i, j, 2);
                    if (result2 != null) {
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
