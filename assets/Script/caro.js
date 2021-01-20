// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
const leftPadding = 10;
const boardSize = 600;
const cellPading = 1;
const soHang = 5;
const doRong = boardSize / soHang;
const bankinh = 5;
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
        drawNode: cc.Node,
        user: 0,
        index: -1,
        label: cc.Node
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.drawItem(soHang);
        var self = this;
        this.user = 0;

        this.array = [
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
            [0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0, 0,0,0,0,0],
        ];
        this.drawNode.on(cc.Node.EventType.TOUCH_START, function (event) {
            var x = event.getLocationX();
            var y = event.getLocationY();
            var position = self.drawNode.convertToNodeSpaceAR(cc.v2(x, y));
            var deltaX = Math.round(position.x - (position.x % doRong) + doRong/2);
            var deltaY = Math.round(position.y - (position.y % doRong) + doRong/2);
            var label = cc.instantiate(self.label);
          //  label.setPosition(position.x,position.y);
            console.log("label");
            label.parent = self.drawNode;
            label.setPosition(deltaX,deltaY);
                    /*    var vitri = self.tinhHangCot(position.x, position.y);
            for (var i = 0; i < self.array.length; i++) {
                if(vitri.cot == self.array[i].column && vitri.hang == self.array[i].row) {
                    self.index = i;
                    self.DaChon(position.x,position.y);
                    self.array[i].isDraw = true;
                }
            } */
        });
        this.drawNode.on(cc.Node.EventType.TOUCH_END, function (event) {
            self.user++;
        });
    },
    addLabel(x,y) {
        var label = cc.instantiate(this.label);
        label.parent = this.drawNode;
        label = label.node.setPosition(x,y);
        console.log("addLabel");
    },
    DaChon(x,y) {
        if(this.user % 2 == 0) {
            this.array[self.index].user = "1";
            this.drawCycle(x,y);
        } else {
            this.array[self.index].user = "2";
            this.drawX(x,y);   
        }
    },
    drawCycle(x,y) {
        var g = this.drawNode.getComponent(cc.Graphics);
        g.strokeColor.fromHEX('#FF0000');
        g.circle(x, y, bankinh);
        g.stroke();
    },
    drawX(x, y) {
        var g = this.drawNode.getComponent(cc.Graphics);
       g.strokeColor.fromHEX('#000000');
       g.moveTo(x, y);
        var x1 = x + 10;
        var y1 = y  + 10;
        g.lineTo(x1,y1);
        g.lineTo(-x,-y);
        g.stroke();
    },
    checkChoosen(column,row) {
        var hadCheck = false;
        for(var i = 0; i < this.array.hang; i ++) {
            for (var j = 0; j < this.array.cot; j++) {
                if(column == i && row == j) {
                    hadCheck = true;
                    break;
                } 
                if(hadCheck == true) {
                    break;
                }
            }
        }
        return hadCheck; 
    },
    ktraHangDoc(array) {
        console.log("ktraHangDoc");
    },
    ktraHangNgang(array) {
        console.log("ktraHangNgang");
    },
    ktraDuongCheo(array) {
        console.log("ktraDuongCheo");
    },
    tinhHangCot(x,y) {
        var vitri = new Object();
        var hang = Math.floor((x - leftPadding)/doRong);
        var cot = Math.floor((y - leftPadding - cellPading)/doRong);
        vitri.hang = hang;
        vitri.cot = cot;
        return vitri;
    },
    drawItem(soHang) {
        var g = this.drawNode.getComponent(cc.Graphics);
        g.lineWidth = 5;
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
}
    //start () {},

    // update (dt) {},
});
