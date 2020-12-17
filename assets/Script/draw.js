// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
const boardSize = 600;
const leftPadding = 10;
const bankinh = 20;
var data = require("data");
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
    boardNode: cc.Node,
    drawNode: cc.Node,
    overNode: cc.Node,
    painting: false,
    destsArray: [cc.Vec2],
    arrayPain: [cc.Vec2],
    win: false,
    index: -1,
    level: 0,
  },

  // LIFE-CYCLE CALLBACKS:

  onLoad() {
    this.overNode.active = false;
    this.level = 0;
    this.newLevel();
      var self = this;
  this.drawNode.on(cc.Node.EventType.TOUCH_START, function (event) {
      if (self.win == true) return;
      var x = event.getLocationX();
      var y = event.getLocationY();
      var newVec2 = self.drawNode.convertToNodeSpaceAR(cc.v2(x, y));
      if (self.index == -1) {
        for (var i = 0; i < self.arrayPain.length; i++) {
          var kc = self.tinhKC(self.arrayPain[i], newVec2);
          console.log("kc" + i + ":" + kc);
          if (kc <= bankinh) {
            self.index = [i];
            console.log("index: " + self.index);
            break;
          }
        }
      } else {
      }
      cc.log(newVec2.x + "," + newVec2.y);
    });
 this.drawNode.on(cc.Node.EventType.TOUCH_CANCEL, function (event) {
      if (self.checkWin() == true) return;
      if (self.index == -1) return;
      //  console.log(".....draw");
      var x = event.getLocationX();
      var y = event.getLocationY();
      var vec2 = self.drawNode.convertToNodeSpaceAR(cc.v2(x, y));
      console.log("cancel....... " + vec2.x + ", " + vec2.y);
      self.clearLine();
    });
      this.drawNode.on(cc.Node.EventType.TOUCH_MOVE, function (event) {
      if (self.checkWin() == true) return;
      if (self.index == -1) return;
      var x = event.getLocationX();
      var y = event.getLocationY();
      var pointMove = self.drawNode.convertToNodeSpaceAR(cc.v2(x, y));
      self.drawLine(pointMove);
      if (self.index == -1) return;
      var diemGoc = self.arrayPain[self.index];
      console.log("diemGoc" + diemGoc);
      var hadFound = false;
      for (var i = 0; i < self.destsArray[self.index].length; i++) {
        var point = self.arrayPain[self.destsArray[self.index][i].end];
        var kc = self.tinhKC(point, pointMove);
        if (kc <= bankinh) {
          if(self.checkDaVe(self.index, self.destsArray[self.index][i].end) == false) {
          self.drawLineNew(diemGoc, point);
          self.drawCycles();
          self.destsArray[self.index][i].isDraw = true;
          var temp = self.destsArray[self.index][i].end;
          for (var j = 0; j < self.destsArray[temp].length; j++) {
            if (self.index == self.destsArray[temp][j].end) {
              self.destsArray[temp][j].isDraw = true;
              break;
            }
          }
          self.index = self.destsArray[self.index][i].end;
          hadFound = true;
          if (self.checkWin()) {
            console.log("...........win");
            self.overNode.active = true;
          }
          break;
        }
        if (hadFound == false) {
          self.clearLine();
        }
      }
    }
    });
    this.drawNode.on(cc.Node.EventType.TOUCH_END, function (event) {
    self.clearLine();
    }); 
  },
  newLevel() {
    console.log("level: " + this.level);

    this.clearAll();
    this.arrayPain = data.levelData[this.level].arrayPain;
    this.destsArray = data.levelData[this.level].destsArray;
    this.drawWall();
    this.drawHideLine();
    this.drawCycles();
  },
  drawWall() {
    var g = this.boardNode.getComponent(cc.Graphics);
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

  drawCycles() {
    var g = this.boardNode.getComponent(cc.Graphics);
    g.lineWidth = 1;
    g.fillColor.fromHEX("#ff0000");
    if(this.arrayPain != null) {
      for (var i = 0; i < this.arrayPain.length; i++) {
        g.circle(this.arrayPain[i].x, this.arrayPain[i].y, bankinh);
      }
      g.fill();
    } else {
      console.log("null");
    }

  },

  drawLine(vec2) {
    var g = this.drawNode.getComponent(cc.Graphics);
    g.clear();
    g.lineWidth = 10;
    g.strokeColor.fromHEX("#ff0000");
    var position = this.arrayPain[this.index];
    g.moveTo(position.x, position.y);
    g.lineTo(vec2.x, vec2.y);
    g.stroke();
  },
  drawLineNew(p1, p2) {
    var g = this.boardNode.getComponent(cc.Graphics);
    g.lineWidth = 10;
    g.strokeColor.fromHEX("#ff0000");
    g.moveTo(p1.x, p1.y);
    g.lineTo(p2.x, p2.y);
    g.stroke();
  },
  drawHideLine() {
    var g = this.boardNode.getComponent(cc.Graphics);
    g.lineWidth = 5;
    g.strokeColor.fromHEX("#cccccc");
    for (var i = 0; i < this.destsArray.length; i++) {
      for (var j = 0; j < this.destsArray[i].length; j++) {
        var begin = this.arrayPain[i];
        var end = this.arrayPain[this.destsArray[i][j].end];
        g.moveTo(begin.x, begin.y);
        g.lineTo(end.x, end.y);
        g.stroke();
      }
    }
  },

  tinhKC(a, b) {
    cc.log(a.x + "," + a.y);
    var deltaX = Math.abs(a.x - b.x);
    var deltaY = Math.abs(a.y - b.y);
    return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
  },
  checkWin() {
    console.log(".....checkWin");
    var win = true;
    for (var i = 0; i < this.destsArray.length; i++) {
      for (var j = 0; j < this.destsArray[i].length; j++) {
        if (this.destsArray[i][j].isDraw == false) {
          win = false;
        }
      }
    }
    return win;
  },
  checkDaVe(start, end) {
    console.log("...checkDaVe: " + start + "................" + end);

    for(var i = 0;i< this.destsArray[start].length;i++){
      if(this.destsArray[start][i].end == end){
        if(this.destsArray[start][i].isDraw==true) return true;
      }
    }

    for(var i = 0;i< this.destsArray[end].length;i++){
      if(this.destsArray[end][i].end == end){
        if(this.destsArray[end][i].isDraw==true) return true;
      }
    }
    return false;
  },
  
  resetGame() {
    if(this.level <= this.arrayPain.length) {
      this.level++;
      console.log("level: " + this.level);
      this.newLevel();
    } else {
      console.log("endgame");
    }

  },
  clearLine() {
    var g = this.drawNode.getComponent(cc.Graphics);
    g.clear();
  },
  clearAll() {
    var g = this.drawNode.getComponent(cc.Graphics);
    g.clear();
    var graphics = this.boardNode.getComponent(cc.Graphics);
    graphics.clear();
  },
  //start () {},
  update (dt) { },
});
