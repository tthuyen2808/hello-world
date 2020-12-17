// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
const leftPadding = 10;
const boardSize = 620;
const cellPading = 1;
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

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.paintBackground();
        this.drawItem(8);
    },
    paintBackground() {
        cc.log("paintBackground");
        var g = this.drawNode.getComponent(cc.Graphics);
        //g.lineWidth = 10;
        g.fillColor.fromHEX('#000000');
        g.roundRect(leftPadding,leftPadding,boardSize,boardSize, 0);
        g.fill(); 
        cc.log("paintBackground");
        var g = this.drawNode.getComponent(cc.Graphics);
        //g.lineWidth = 10;
        g.fillColor.fromHEX('#000000');
        g.roundRect(leftPadding + 2,leftPadding + 2,boardSize,boardSize, 0);
        g.fill(); 
    },
    drawItem(soHang) {
        var g = this.drawNode.getComponent(cc.Graphics);
        var doRong = boardSize/soHang;
        g.fillColor.fromHEX('#FFFFFF');
        for(var hang = 0; hang < soHang; hang++) {
            for(var cot = 0; cot < soHang; cot++) {
                g.roundRect(leftPadding + cellPading +hang*doRong ,leftPadding + cellPading + doRong*cot,doRong-cellPading*2,doRong-cellPading*2, 0);
            }
        }
        g.fill();     
        
        var minC = 0;
        var maxC = soHang;
        for(var x = 0; x < soHang; x++) {
            for(var y = 0; y < soHang; y++) {
                if(x%2 == 0 && y%2 != 0 ) {
                    g.fillColor.fromHEX('#000000');
                    g.roundRect(leftPadding + cellPading +x*doRong ,leftPadding + cellPading + doRong*y,doRong-cellPading*2,doRong-cellPading*2, 0);
                    g.fill(); 
                } else if(x%2 != 0 && y%2 == 0) {
                    g.fillColor.fromHEX('#000000');
                    g.roundRect(leftPadding + cellPading +x*doRong ,leftPadding + cellPading + doRong*y,doRong-cellPading*2,doRong-cellPading*2, 0);
                    g.fill(); 
                }
            }
        }
    }
    //start () {},

    // update (dt) {},
});
