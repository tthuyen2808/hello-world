// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
const bankinh = 20;
cc.Class({
    extends: cc.Component,

    properties: {
        drawNode: cc.Node,
        points: [cc.Vec2],
        lines: [],
        pointStart: cc.Vec2,
        startIndex: -1,
        endIndex: -1,
        titleRichText: cc.RichText,
        flag: true,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        var self = this;
        this.drawNode.on(cc.Node.EventType.TOUCH_START, function (event) {
            var x = event.getLocationX();
            var y = event.getLocationY();
            var position = self.drawNode.convertToNodeSpaceAR(cc.v2(x, y));
            self.pointStart = new cc.Vec2(position.x, position.y);
            if(self.flag == true) {
                var point = new Object();
                point.x = Math.round(self.pointStart.x);
                point.y = Math.round(self.pointStart.y);
                self.points.push(point);
                self.drawCycle(point.x, point.y);
            } else {
                var len = self.points.length;
                for(var i = 0; i < len; i++) {
                    if(self.tinhKC(self.pointStart, self.points[i]) < bankinh) {
                        self.startIndex = i;
                        break;
                    }
                }
            }
        });
        this.drawNode.on(cc.Node.EventType.TOUCH_END, function (event) {
            var x = event.getLocationX();
            var y = event.getLocationY();
            var positionEnd = self.drawNode.convertToNodeSpaceAR(cc.v2(x,y));
            if(self.startIndex == -1) return;
            if(self.flag == false) {
                var len = self.points.length;
                for(var i = 0; i < len; i++) {
                    if(self.tinhKC(positionEnd, self.points[i]) < bankinh) {
                        self.endIndex = i;
                        var line = new Object();
                        line.start = self.startIndex;
                        line.end = self.endIndex;
                        self.drawLine(line.start,line.end);
                        self.lines.push(line);
                        self.startIndex = -1;
                        self.endIndex = -1;
                        break;
                    }
                }
            }
        });
    },
    xuatMang() {
        var result = new Object();
        result.points = this.points;
        result.lines = this.lines;
        this.titleRichText.string = JSON.stringify(result);
        console.log(JSON.stringify(result));
    },
    chooseLines() {
        this.flag = false;
        console.log("chooseLines");
    },
    choosePoints() {
        this.flag = true;
        console.log("choosePoints");
    },
    tinhKC(a, b) {
        var deltaX = Math.abs(a.x - b.x);
        var deltaY = Math.abs(a.y - b.y);
        return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    },
    drawLine(startIndex, endIndex){
        var g = this.drawNode.getComponent(cc.Graphics);
        g.lineWidth = 10;
        g.strokeColor.fromHEX("#261AB2");
        g.moveTo(this.points[startIndex].x, this.points[startIndex].y);
        g.lineTo(this.points[endIndex].x, this.points[endIndex].y);
        g.stroke();
    },
    drawCycle(x,y) {
        var g = this.drawNode.getComponent(cc.Graphics);
        g.lineWidth = 10;
        g.fillColor.fromHEX("#261AB2");
        g.circle(x, y, bankinh);
        g.fill();
    },
    sortMang() {
        this.lines.sort(function (a, b) {
            return a.start - b.start;
          });
        this.xuatMang();
    },
    clearData() {
        var g = this.drawNode.getComponent(cc.Graphics);
        g.clear();
        this.lines = [];
        this.points = [];
    }


   // start () {},

    // update (dt) {},
});
