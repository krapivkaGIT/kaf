var APP_DATA = {
  "scenes": [
    {
      "id": "0-",
      "name": "двері",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.24597317500219873,
        "pitch": 0.05198579159266892,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.6168123296116566,
          "pitch": 0.24646257937889438,
          "rotation": 0,
          "target": "2-"
        },
        {
          "yaw": -0.16824232871290334,
          "pitch": 0.3140878620015819,
          "rotation": 6.283185307179586,
          "target": "1-"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.28481733662943576,
          "pitch": 0.06115208846562048,
          "title": "Вітаємо !!!",
          "text": "Це унікальна розробка для 3D&nbsp; візуалізації музею та його експонатів на Кафедрі Бджільництва в НУБІП України<div><br></div><div><br></div>"
        }
      ]
    },
    {
      "id": "1-",
      "name": "ліфт",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.06300237864888558,
          "pitch": 0.41676534960087963,
          "rotation": 0,
          "target": "2-"
        },
        {
          "yaw": 2.833330238790566,
          "pitch": 0.4324369917695794,
          "rotation": 0,
          "target": "0-"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.276360113202072,
          "pitch": -0.03456510321464279,
          "title": "Інфо",
          "text": "Не зважайте на якість і ламані зображення , це виникло через відсутність штатива , або іншого професійного обладнання...<div><br></div><div><br></div>"
        }
      ]
    },
    {
      "id": "2-",
      "name": "коридор",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.503819180629389,
          "pitch": 0.5000514703143342,
          "rotation": 0,
          "target": "0-"
        },
        {
          "yaw": -1.5673773583441868,
          "pitch": 0.20710877316954424,
          "rotation": 0,
          "target": "1-"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.21993028957115968,
          "pitch": -0.21630643419481466,
          "title": "Інфо",
          "text": "На жаль тут немає можливості додати окреме зображення експонату ,&nbsp;<br>Також не можливо додати окрему 3Д модель експонату ...<div><br></div><div><br></div>"
        }
      ]
    }
  ],
  "name": "Demo-koridor",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
