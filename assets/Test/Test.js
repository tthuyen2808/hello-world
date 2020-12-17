// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
const boardSize = 640;
const leftPadding = 10;
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
        startPoint: cc.vec2,
        deltaPoint: cc.vec2,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        self = this;
        this.drawNode.on(
            cc.Node.EventType.TOUCH_START,
            function (event) {
               // var vecStart = self.drawNode.convertToNodeSpaceAR(cc.v2(x, y));
                cc.log("start: "+ event.getLocation());
                self.startPoint = event.getLocation();
            },
          );
          this.drawNode.on(
            cc.Node.EventType.TOUCH_END,
            function (event) {
                var location = event.getLocation();
                cc.log("end: " + location);    
                var deltaX = location.x - self.startPoint.x;
                var deltaY = location.y - self.startPoint.y;
                cc.log(deltaX + "," + deltaY);
                self.deltaPoint = new cc.Vec2(deltaX, deltaY);
                self.checkDirection(deltaX,deltaY);
             //   var vecEnd = self.drawNode.convertToNodeSpaceAR(cc.v2(x, y));
            },
          );
          this.drawBackground();
    },
    drawBackground() {
        var g = this.drawNode.getComponent(cc.Graphics);
        g.lineWidth = 10;
        g.strokeColor.fromHEX("#ff0000");
        g.rect(leftPadding/2, leftPadding/2, boardSize - (leftPadding), boardSize - (leftPadding));
        g.stroke(); 
    },

    //start () {},

    //update (dt) {},
    checkDirection(x,y) {
        if (Math.abs(x) < 10 || Math.abs(y) < 10) return;
        if(Math.abs(x) < Math.abs(y) ){
            if(y > 0) {
                cc.log("Up");
            } else {
                cc.log("Down");
            }
        }
        else {
            if(x > 0) {
                cc.log("Right");
            } else {
                cc.log("Left");
            }
        }
    }
});
