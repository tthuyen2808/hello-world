module.exports = {
  levelData: [
  {   arrayPain:
    [
      new cc.Vec2(100, 100),
      new cc.Vec2(100, 480),
      new cc.Vec2(510, 480),
     // new cc.Vec2(510, 100),
    ],
    destsArray:
    [
      [
        { end: 1, isDraw: false },
        { end: 2, isDraw: false },
      ],
      [
        { end: 0, isDraw: false },
        { end: 2, isDraw: false },
      ],
     [
        { end: 0, isDraw: false },
        { end: 1, isDraw: false },
      ]
     ]
    },

    {   arrayPain:
      [
        new cc.Vec2(100, 100),
        new cc.Vec2(100, 480),
        new cc.Vec2(510, 480),
        new cc.Vec2(510, 100),
      ],
      destsArray:
      [
        [
          { end: 1, isDraw: false },
          { end: 3, isDraw: false },
        ],
        [
          { end: 0, isDraw: false },
          { end: 2, isDraw: false },
        ],
       [
          { end: 1, isDraw: false },
          { end: 3, isDraw: false },
        ],
        [
          { end: 0, isDraw: false },
          { end: 2, isDraw: false },
        ]
       ]
      }
    
    ]
};