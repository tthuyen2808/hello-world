
// Quy ước: Đặt thứ tự của các điểm là trái trước. Nếu cùng cấp thì trên trước
module.exports = {
  levelData: [

   /* {
      arrayPain: [new cc.Vec2(100, 150)],
      destsArray: [
        [{ end: 1, isDraw: false },{ end: 2, isDraw: false },],
        [{ end: 0, isDraw: false },{ end: 2, isDraw: false },],
        [{ end: 0, isDraw: false },{ end: 1, isDraw: false },],
      ],
    }, */



    {
      arrayPain: [new cc.Vec2(100, 100), new cc.Vec2(100, 480), new cc.Vec2(510, 480)],
      destsArray: [
        [{ end: 1, isDraw: false}/*,{ end: 2, isDraw: false } */],
        [{ end: 0, isDraw: false },{ end: 2, isDraw: false },],
        [{ end: 0, isDraw: false, oneWay: true },{ end: 1, isDraw: false },],
      ],
    },

    {
      arrayPain: [ new cc.Vec2(100, 100),new cc.Vec2(100, 480),new cc.Vec2(510, 480),new cc.Vec2(510, 100),
      ],
      destsArray: [
        [{ end: 1, isDraw: false }, { end: 3, isDraw: false },],
        [{ end: 0, isDraw: false }, { end: 2, isDraw: false }],
        [{ end: 1, isDraw: false }, { end: 3, isDraw: false }],
        [{ end: 0, isDraw: false }, { end: 2, isDraw: false }],
      ],
    },
    {
      arrayPain: [ new cc.Vec2(320, 530),new cc.Vec2(80, 340),new cc.Vec2(530, 340),new cc.Vec2(440, 100),new cc.Vec2(150, 100), ],
      destsArray: [
        [{ end: 3, isDraw: false }, { end: 4, isDraw: false }],
        [{ end: 2, isDraw: false },{ end: 3, isDraw: false }],
        [{ end: 1, isDraw: false },{ end: 4, isDraw: false },],
        [{ end: 1, isDraw: false },{ end: 0, isDraw: false },],
        [{ end: 0, isDraw: false },{ end: 2, isDraw: false }],
      ],
    },
    {
      arrayPain: [new cc.Vec2(100, 350), new cc.Vec2(320, 500), new cc.Vec2(320, 350),new cc.Vec2(320, 180), new cc.Vec2(540, 350) ],
      destsArray: [
        [ { end: 1, isDraw: false },{ end: 2, isDraw: false }],
        [{ end: 0, isDraw: false },  { end: 2, isDraw: false }, { end: 4, isDraw: false } ],
        [{ end: 0, isDraw: false },  { end: 1, isDraw: false }, { end: 3, isDraw: false },{ end: 4, isDraw: false } ],
        [{ end: 2, isDraw: false }],
        [{ end: 1, isDraw: false }, { end: 2, isDraw: false }],
      ],
    }, 
    {
      arrayPain: [new cc.Vec2(300, 520), new cc.Vec2(100, 380), new cc.Vec2(480, 380), new cc.Vec2(100, 120), new cc.Vec2(480, 120) ],
      destsArray: [
        [ { end: 1, isDraw: false }, { end: 2, isDraw: false }],
        [{ end: 0, isDraw: false },{ end: 2, isDraw: false },{ end: 3, isDraw: false } ],
        [{ end: 1, isDraw: false }, { end: 0, isDraw: false }, { end: 4, isDraw: false } ],
        [{ end: 1, isDraw: false },{ end: 4, isDraw: false }],
        [{ end: 2, isDraw: false },{ end: 3, isDraw: false } ],
      ],
    },

    { 
      arrayPain: [new cc.Vec2(150, 100),new cc.Vec2(150, 480), new cc.Vec2(450, 480),new cc.Vec2(450, 100),new cc.Vec2(450, 340),new cc.Vec2(300, 340),new cc.Vec2(300, 480) ],
      destsArray: [
        [ { end: 1, isDraw: false },{ end: 3, isDraw: false },{ end: 4, isDraw: false }],
        [ { end: 0, isDraw: false }, { end: 6, isDraw: false }],
       [ { end: 4, isDraw: false }, { end: 6, isDraw: false } ],
       [{ end: 4, isDraw: false }, { end: 0, isDraw: false } ],
       [{ end: 5, isDraw: false }, { end: 2, isDraw: false }, { end: 0, isDraw: false },{ end: 3, isDraw: false } ],
       [{ end: 6, isDraw: false }, { end: 4, isDraw: false } ],
       [ { end: 1, isDraw: false }, { end: 2, isDraw: false }, { end: 5, isDraw: false }]],
    }, 

    {
      arrayPain: [new cc.Vec2(100, 500), new cc.Vec2(100, 100), new cc.Vec2(300, 400), new cc.Vec2(500, 500), new cc.Vec2(500, 100)],
      destsArray: [
        [{ end: 1, isDraw: false },{ end: 2, isDraw: false },],
        [{ end: 0, isDraw: false },{ end: 2, isDraw: false },{ end: 4, isDraw: false }],
        [{ end: 0, isDraw: false },{ end: 1, isDraw: false }, { end: 3, isDraw: false },{ end: 4, isDraw: false }],
        [{ end: 2, isDraw: false },{ end: 4, isDraw: false }],
        [{ end: 1, isDraw: false },{ end: 2, isDraw: false }, { end: 3, isDraw: false }],
      ],
    },

    {
      arrayPain: [new cc.Vec2(100, 350), new cc.Vec2(150, 100), new cc.Vec2(300, 500), new cc.Vec2(300, 250), new cc.Vec2(500, 350), new cc.Vec2(450, 100) ],
      destsArray: [
        [{ end: 1, isDraw: false },{ end: 2, isDraw: false }, { end: 3, isDraw: false },  { end: 4, isDraw: false }],
        [{ end: 0, isDraw: false },{ end: 5, isDraw: false }],
        [{ end: 0, isDraw: false },{ end: 3, isDraw: false }, { end: 4, isDraw: false }],
        [{ end: 0, isDraw: false },{ end: 2, isDraw: false }, { end: 4, isDraw: false }],
        [{ end: 0, isDraw: false },{ end: 2, isDraw: false }, { end: 3, isDraw: false }, { end: 5, isDraw: false }],
        [{ end: 1, isDraw: false },{ end: 4, isDraw: false }],
      ],
    },
    {
      arrayPain: [new cc.Vec2(120, 420), new cc.Vec2(180, 100), new cc.Vec2(300, 500), new cc.Vec2(500, 420), new cc.Vec2(400, 100)],
      destsArray: [
        [{ end: 1, isDraw: false },{ end: 2, isDraw: false }],
        [{ end: 0, isDraw: false },{ end: 2, isDraw: false }, { end: 3, isDraw: false }, { end: 4, isDraw: false }],
        [{ end: 0, isDraw: false }, { end: 1, isDraw: false }, { end: 3, isDraw: false }, { end: 4, isDraw: false }],
        [{ end: 2, isDraw: false },{ end: 1, isDraw: false },{ end: 4, isDraw: false }],
        [{ end: 1, isDraw: false }, { end: 2, isDraw: false }, { end: 3, isDraw: false }],
      ],
    },
  
    {
      arrayPain: [new cc.Vec2(100, 550), new cc.Vec2(100, 350), new cc.Vec2(100, 50), new cc.Vec2(300, 350), new cc.Vec2(500, 550), new cc.Vec2(500, 350), new cc.Vec2(500, 50)],
      destsArray: [
        [{ end: 1, isDraw: false },{ end: 3, isDraw: false }],
        [{ end: 0, isDraw: false },{ end: 2, isDraw: false }, { end: 3, isDraw: false }],
        [{ end: 1, isDraw: false }, { end: 6, isDraw: false }],
        [{ end: 0, isDraw: false },{ end: 1, isDraw: false },{ end: 4, isDraw: false },{ end: 5, isDraw: false }],
        [{ end: 3, isDraw: false }, { end: 5, isDraw: false }],
        [{ end: 3, isDraw: false }, { end: 4, isDraw: false }, { end: 6, isDraw: false }],
        [{ end: 2, isDraw: false }, { end: 5, isDraw: false }],
      ],
    },
    {
      arrayPain: [new cc.Vec2(100, 350), new cc.Vec2(100, 200), new cc.Vec2(100, 50), new cc.Vec2(300, 500), new cc.Vec2(500, 350), new cc.Vec2(500, 200), new cc.Vec2(500, 50)],
      destsArray: [
        [{ end: 1, isDraw: false },{ end: 3, isDraw: false }, { end: 4, isDraw: false },{ end: 5, isDraw: false }],
        [{ end: 0, isDraw: false },{ end: 2, isDraw: false }, { end: 5, isDraw: false }],
        [{ end: 1, isDraw: false },{ end: 6, isDraw: false }],
        [{ end: 0, isDraw: false },{ end: 4, isDraw: false }],
        [{ end: 0, isDraw: false },{ end: 3, isDraw: false }, { end: 5, isDraw: false }],
        [{ end: 0, isDraw: false },{ end: 1, isDraw: false }, { end: 4, isDraw: false }, { end: 6, isDraw: false }],
        [{ end: 2, isDraw: false },{ end: 5, isDraw: false }],

      ],
    },

  ],
};
