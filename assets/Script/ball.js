// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
const boardSize = 640;
const leftPadding = 10;
const leftPoint = 30;
const rightPoint = 620;
const topPoint = 620;
const botPoint = 30;
const vUp = 100;
const vDown = 500;
const vLeft = 50;
const vRight = 600;

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
    cycleNode: cc.Node,
    drawNode: cc.Node,
    vanTocX: -1,
    vanTocY: -1,
    cyclePosition: cc.Vec2,
    oldPosition: cc.Vec2,
    startPoint: cc.vec2,
    xRandom: 0,
    yRandom: 0,
  },

  // LIFE-CYCLE CALLBACKS:

  onLoad() {
    // this.cycleNode.active = false;
   /* this.vanTocX = -100;
    this.vanTocY = -150; */
    this.vanTocX = -50;
    this.vanTocY = -100;

    this.drawWall();
    this.oldPosition = this.cycleNode.getPosition();
    var minC = 0;
    var maxC = 600;
    var numX = minC + Math.random() * (maxC - minC);
    var x0 = Math.floor(numX);
    var numY = minC + Math.random() * (maxC - minC);
    var y0 = Math.floor(numY);
    this.cyclePosition = new cc.Vec2(x0, y0);
    self = this;
    this.drawNode.on(cc.Node.EventType.TOUCH_START, function (event) {
      self.startPoint = event.getLocation();
    });
    this.drawNode.on(cc.Node.EventType.TOUCH_END, function (event) {
      var location = event.getLocation();
      cc.log("end: " + location);
      var deltaX = location.x - self.startPoint.x;
      var deltaY = location.y - self.startPoint.y;
      cc.log(deltaX + "," + deltaY);
      self.checkDirection(deltaX, deltaY);
    });
  },

  //   start () {},
  update(dt) {
   // this.moveBall(dt);
    // this.moveRandomBall(dt);
    //  this.removeLine();
    // this.removeLineRan();
    // this.drawLine();
  },
  moveBall(dt) {
    var position = this.cycleNode.getPosition();
    var x = position.x + this.vanTocX * dt;
    var y = position.y + this.vanTocY * dt;
    if (x <= leftPoint) {
      this.vanTocX = -this.vanTocX;
    }
    if (x > rightPoint) {
      this.vanTocX = -this.vanTocX;
    }
    if (y <= leftPoint) {
      this.vanTocY = -this.vanTocY;
    }
    if (y >= rightPoint) {
      this.vanTocY = -this.vanTocY;
    }
    this.cycleNode.setPosition(x, y);
  },
  removeLine() {
    var g = this.drawNode.getComponent(cc.Graphics);
    g.lineWidth = 7;
    g.strokeColor.fromHEX("#ffffff");
    g.moveTo(320, 500);
    g.lineTo(this.oldPosition.x, this.oldPosition.y);
    g.stroke();
  },
  removeLineRan() {
    var g = this.drawNode.getComponent(cc.Graphics);
    g.lineWidth = 7;
    g.strokeColor.fromHEX("#ffffff");
    var position = this.cycleNode.getPosition();
    g.moveTo(position.x, position.y);
    g.lineTo(this.oldPosition.x, this.oldPosition.y);
    g.stroke();
  },
  drawLine() {
    var g = this.drawNode.getComponent(cc.Graphics);
    g.lineWidth = 5;
    g.strokeColor.fromHEX("#ff0000");
    //g.moveTo(320, 500);
    var position = this.cycleNode.getPosition();
    g.lineTo(position.x, position.y);
    g.stroke();
    this.oldPosition = position;
  },
  drawWall() {
    var g = this.drawNode.getComponent(cc.Graphics);
    g.lineWidth = 10;
    g.strokeColor.fromHEX("#ff0000");
    g.rect(
      leftPadding / 2,
      leftPadding / 2,
      boardSize - leftPadding,
      boardSize - leftPadding
    );
    g.stroke();
  },

  checkDirection(x, y) {
    var position = this.cycleNode.getPosition();
    if (Math.abs(x) <= 10 && Math.abs(y) <= 10) return;
    if (Math.abs(x) < Math.abs(y)) {
      if (y > 0) {
        cc.log("Up");
      //  this.cycleNode.setPosition(position.x, position.y);
      var kcY = Math.abs(topPoint - position.y);
      var time = kcY/vUp;
      var action = cc.moveTo(time, position.x, topPoint);
      this.cycleNode.runAction(action);
      } else {
        cc.log("Down");
        var kcY = Math.abs(botPoint - position.y);
        var time = kcY/vDown;
       var action = cc.moveTo(time, position.x, botPoint);
       this.cycleNode.runAction(action);
      }
    } else {
      if (x > 0) {
       // this.cycleNode.setPosition(position.x, position.y);
        cc.log("Right");
        var kcX = Math.abs(rightPoint - position.x);
        var time = kcX/vRight;
        var action = cc.moveTo(time, vRight,position.y);
        this.cycleNode.runAction(action);
      } else {
        cc.log("Left");
       // this.cycleNode.setPosition(position.x, position.y);
       var kcX = Math.abs(leftPoint - position.x);
       var time = kcX/vLeft;
       var action = cc.moveTo(time, leftPoint, position.y);
       this.cycleNode.runAction(action);
      }
    }
  },
  

  /*drawBall(dt) {
    var position = this.cyclePosition.getPosition();
    var x = position.x + this.vanToc * dt;
    var y = position.y + this.vanToc * dt;
    if (y < 50) {
      this.vanToc = -this.vanToc;
    }
    if (y > 500) {
      this.vanToc = -this.vanToc;
    }
    // this.cycleNode.setPosition(position.x,y);
    var g = this.drawNode.getComponent(cc.Graphics);
    g.fillColor.fromHEX("#ff0000");
    g.circle(position.x, position.y, 5);
    g.stroke();
    g.fill();
  }, */
});
