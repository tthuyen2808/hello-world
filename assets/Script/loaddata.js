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
    contentRichText: cc.RichText,
  },

  // LIFE-CYCLE CALLBACKS:

  onLoad () {
    this.loadText();
  },

  start() { },
  // update (dt) {},

  loadText() {
    /* var context = this;
     var url = "https://tuviphongthuy.net/data/tuvituan/dau_7122020.txt ";
     //this.testNumber.string = url;
     cc.loader.loadRes(url, function (err, file) {
        var text = file.text;
        //console.log("text..."+text);
        context.content.string = text;
     }); */
     var remoteUrl = "https://tuviphongthuy.net/data/tuvituan/dau_7122020.txt";
     cc.assetManager.loadRemote(remoteUrl, function (err, textAsset) {
         // use string to do something
         console.log(err.message);
     });


  },
});
