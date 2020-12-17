// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
const leftPadding = 10;
const boardSize = 620;
const cellPading = 5;
var Settings = require("Settings");
cc.Class({
  extends: cc.Component,

  properties: {
    drawNode: cc.Node,
    xdiff: 0,
    ydiff: 0,
    score: 0,
    resultLabel: cc.Label,
    timeLabel: cc.Label,
    gameOver: false,
    gameOverSprite: cc.Sprite,
    rePlayButton: cc.Button,
  },

  // LIFE-CYCLE CALLBACKS:

  onLoad() {
    this.gameOverSprite.node.active = false;
    this.rePlayButton.node.active = false;
    this.score = 1;
    this.time = 10;
    this.count(this.time);
    this.paintBackground();
    this.drawItem(this.tinhSoHang());
    var self = this;
    this.drawNode.on(
      cc.Node.EventType.TOUCH_START,
      function (event) {
        if (this.gameOver == true) {
          return;
        }
        var doRong = boardSize / self.tinhSoHang();
        cc.log(event);
        var x = event.getLocationX();
        var y = event.getLocationY();
        var newVec2 = self.drawNode.convertToNodeSpaceAR(cc.v2(x, y));
        x = Math.floor(newVec2.x / doRong);
        y = Math.floor(newVec2.y / doRong);
        console.log(
          "x: " + x + "," + self.xdiff + "y: " + y + "," + self.ydiff
        );
        if (self.xdiff == x && self.ydiff == y) {
          console.log("Success!");
          self.score = self.score + 1;
          self.resultLabel.string = "Level: " + this.score;
          self.paintBackground();
          self.drawItem(self.tinhSoHang());
        }
        cc.log("score: " + self.score);
      },
      this
    );
  },
  paintBackground() {
    var g = this.drawNode.getComponent(cc.Graphics);
    //g.lineWidth = 10;
    g.fillColor.fromHEX("#DDDDDD");
    g.roundRect(leftPadding, leftPadding, boardSize, boardSize, 10);
    g.fill();
    var g = this.drawNode.getComponent(cc.Graphics);
    //g.lineWidth = 10;
    g.fillColor.fromHEX("#DDDDDD");
    g.roundRect(
      leftPadding - 2,
      leftPadding - 2,
      boardSize + 20,
      boardSize + 10,
      10
    );
    g.fill();
  },
  randomColor1() {
    var minC = 0;
    var maxC = 255;
    do {
      var r = minC + Math.random() * (maxC - minC);
      var rc = Math.floor(r);
      var gr = minC + Math.random() * (maxC - minC);
      var grc = Math.floor(gr);
      var b = minC + Math.random() * (maxC - minC);
      var bc = Math.floor(b);
    } while (rc > 220 && grc > 220 && bc > 220);
    cc.log("color: " + rc + "," + grc + "," + bc);
    return new cc.Color(rc, grc, bc);
  },
  randomColor() {
    var minC = 0;
    var maxC = Settings.mainColors.length;
    var index = Math.floor(minC + Math.random() * (maxC - minC));
    cc.log("color: " + Settings.mainColors[index]);
    return Settings.mainColors[index];
  },
  drawItem(soHang) {
    if (this.gameOver == true) {
      return;
    }
    var g = this.drawNode.getComponent(cc.Graphics);
    var doRong = boardSize / soHang;
    var mainColor = this.randomColor();
    g.fillColor = mainColor;
    for (var hang = 0; hang < soHang; hang++) {
      for (var cot = 0; cot < soHang; cot++) {
        g.roundRect(
          leftPadding + cellPading + hang * doRong,
          leftPadding + cellPading + doRong * cot,
          doRong - cellPading * 2,
          doRong - cellPading * 2,
          5
        );
      }
    }
    g.fill();
    var minC = 0;
    var maxC = soHang;
    var numberx = minC + Math.random() * (maxC - minC);
    var x = Math.floor(numberx);
    this.xdiff = x;
    var numbery = minC + Math.random() * (maxC - minC);
    var y = Math.floor(numbery);
    this.ydiff = y;
    cc.log("Vị trí: " + this.xdiff + "," + this.ydiff);
    var delta = 0.69 / this.score;
    g.fillColor.set(mainColor.lerp(cc.Color.WHITE, delta));
    g.roundRect(
      leftPadding + cellPading + x * doRong,
      leftPadding + cellPading + doRong * y,
      doRong - cellPading * 2,
      doRong - cellPading * 2,
      5
    );
    g.fill();
  },
  //start() {},
  count(time) {
    var self = this;
    self.callback = function () {
      if (time == 0) {
        self.gameOver = true;
        self.unschedule(self.callback);
        self.gameOver = true;
        self.gameOverSprite.node.active = true;
        self.rePlayButton.node.active = true;
      }
     if(time > 0) {time--;} else {
        self.timeLabel.string = 0 + "s";
     }
      self.timeLabel.string = time;
      console.log("Count:" + time);
    };
    cc.log("Count1:" + time);
    self.schedule(self.callback, 1);
  },
  tinhSoHang() {
    if (this.score >= 17) return 9;
    if (this.score >= 11) return 8;
    if (this.score >= 7) return 7;
    if (this.score >= 6) return 6;
    if (this.score == 5) return 5;
    return this.score + 1;
  },
  rePlay() {
    this.gameOverSprite.node.active = false;
    this.rePlayButton.node.active = false;
    this.gameOver = false;
    this.score = 1;
    this.count(31);
    this.paintBackground();
    this.drawItem(this.tinhSoHang());
    var self = this;
    this.drawNode.on(
      cc.Node.EventType.TOUCH_START,
      function (event) {
        if (this.gameOver == true) {
          return;
        }
        var doRong = boardSize / self.tinhSoHang();
        cc.log(event);
        var x = event.getLocationX();
        var y = event.getLocationY();
        var newVec2 = self.drawNode.convertToNodeSpaceAR(cc.v2(x, y));
        x = Math.floor(newVec2.x / doRong);
        y = Math.floor(newVec2.y / doRong);
        console.log(
          "x: " + x + "," + self.xdiff + "y: " + y + "," + self.ydiff
        );
        if (self.xdiff == x && self.ydiff == y) {
          console.log("Success!");
          self.score = self.score + 1;
          self.resultLabel.string = "Score: " + (this.score - 1);
          self.paintBackground();
          self.drawItem(self.tinhSoHang());
        }
        cc.log("scrore: " + self.score);
      },
      this
    );
  },
});
