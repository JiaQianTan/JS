(function(name,data){
 if(typeof onTileMapLoaded === 'undefined') {
  if(typeof TileMaps === 'undefined') TileMaps = {};
  TileMaps[name] = data;
 } else {
  onTileMapLoaded(name,data);
 }
 if(typeof module === 'object' && module && module.exports) {
  module.exports = data;
 }})("level3",
{ "compressionlevel":-1,
 "height":20,
 "infinite":false,
 "layers":[
        {
         "data":[712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712,
            712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712,
            712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712,
            712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712,
            712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712,
            712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712,
            712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712,
            712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712,
            712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712,
            712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712,
            712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712,
            712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712,
            712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712,
            712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712,
            712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712,
            712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712,
            712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712,
            712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712,
            712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712,
            712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712, 712],
         "height":20,
         "id":2,
         "name":"floorLayer",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":20,
         "x":0,
         "y":0
        }, 
        {
         "data":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         "height":20,
         "id":7,
         "name":"walkLayer",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":20,
         "x":0,
         "y":0
        }, 
        {
         "data":[766, 766, 766, 766, 766, 766, 766, 766, 766, 766, 766, 766, 766, 766, 766, 766, 766, 766, 766, 766,
            766, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 766,
            766, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 766,
            766, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 766,
            766, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            766, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            766, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            766, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            766, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            766, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 766,
            766, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 766,
            766, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 766,
            766, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 766,
            766, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 766,
            766, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 766,
            766, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 766,
            766, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 766,
            766, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 766,
            766, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 766,
            766, 766, 766, 766, 766, 766, 766, 766, 766, 766, 766, 766, 766, 766, 766, 766, 766, 766, 766, 766],
         "height":20,
         "id":6,
         "name":"wallLayer",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":20,
         "x":0,
         "y":0
        }, 
        {
         "data":[1135, 1136, 1135, 1136, 1135, 1136, 1135, 1136, 1135, 1136, 1135, 1136, 1135, 1136, 1135, 1136, 1135, 1136, 1135, 1136,
            1151, 1152, 1151, 1152, 1151, 1152, 1151, 1152, 1151, 1152, 1151, 1152, 1151, 1152, 1151, 1152, 1151, 1152, 1151, 1152,
            1135, 1136, 1135, 1136, 1135, 1136, 1135, 1136, 1134, 0, 0, 0, 0, 1136, 1135, 1136, 1135, 1136, 1135, 1136,
            1151, 1152, 1151, 1152, 1151, 1152, 1151, 1134, 1150, 0, 0, 0, 0, 0, 1151, 1152, 1151, 1152, 1151, 1152,
            909, 909, 909, 909, 909, 909, 909, 1150, 0, 0, 0, 0, 0, 0, 909, 909, 909, 909, 909, 909,
            909, 909, 909, 909, 909, 989, 990, 991, 909, 909, 0, 0, 0, 0, 909, 909, 909, 1037, 1038, 909,
            909, 909, 909, 909, 909, 1005, 1006, 1007, 909, 0, 0, 0, 909, 909, 909, 909, 909, 1053, 1054, 909,
            927, 928, 929, 909, 909, 909, 909, 909, 909, 909, 909, 909, 909, 909, 909, 909, 909, 909, 909, 909,
            943, 944, 945, 909, 909, 909, 909, 909, 909, 909, 909, 909, 909, 909, 909, 909, 909, 927, 928, 929,
            1058, 909, 909, 909, 909, 909, 909, 909, 909, 909, 909, 909, 909, 909, 909, 909, 909, 943, 944, 945,
            909, 909, 909, 909, 909, 909, 909, 909, 909, 909, 909, 909, 909, 909, 909, 909, 909, 909, 909, 909,
            909, 909, 909, 909, 909, 909, 909, 909, 909, 909, 909, 909, 909, 909, 909, 909, 909, 909, 1105, 1106,
            909, 927, 928, 929, 909, 909, 909, 909, 909, 909, 909, 909, 909, 909, 909, 909, 909, 909, 1121, 1122,
            909, 943, 944, 945, 909, 909, 909, 909, 909, 909, 909, 909, 909, 909, 909, 909, 909, 909, 909, 909,
            909, 909, 909, 909, 909, 909, 909, 909, 909, 909, 909, 909, 909, 909, 909, 909, 1057, 1058, 909, 909,
            927, 928, 929, 909, 909, 909, 909, 909, 909, 909, 909, 909, 909, 909, 909, 909, 927, 928, 929, 909,
            943, 944, 945, 909, 909, 909, 909, 909, 909, 909, 909, 909, 909, 909, 909, 909, 943, 944, 945, 909,
            909, 909, 909, 909, 909, 909, 909, 909, 909, 909, 909, 909, 909, 909, 909, 909, 909, 909, 909, 909,
            909, 909, 909, 909, 909, 909, 909, 909, 909, 909, 909, 909, 909, 909, 909, 909, 909, 909, 909, 909,
            909, 909, 909, 909, 909, 909, 909, 909, 909, 909, 909, 909, 909, 909, 909, 909, 909, 909, 909, 909],
         "height":20,
         "id":3,
         "name":"treeLayer",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":20,
         "x":0,
         "y":0
        }, 
        {
         "data":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 1133, 1134, 1133, 1134, 1133, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 1133, 1149, 1150, 1149, 1150, 1149, 1133, 0, 0, 0, 0, 0, 0,
            1133, 1134, 1133, 1134, 1133, 1134, 1133, 1149, 0, 0, 0, 0, 0, 1149, 1133, 1134, 1133, 1134, 1133, 1134,
            1149, 1150, 1149, 1150, 1149, 1150, 1149, 0, 0, 0, 0, 0, 0, 0, 1149, 1150, 1149, 1150, 1149, 1150,
            1082, 1133, 1134, 0, 0, 1155, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1155, 0, 0, 0, 1080,
            1098, 1149, 1150, 0, 0, 0, 0, 0, 0, 0, 914, 914, 914, 0, 0, 0, 0, 0, 1133, 1134,
            1080, 1022, 1133, 1134, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1133, 1134, 1149, 1150,
            0, 1082, 1149, 1150, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1149, 1150, 1022, 0,
            0, 1098, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 927, 928, 929, 1080,
            1133, 1134, 1133, 1134, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 943, 944, 945, 0,
            1149, 1150, 1149, 1150, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1037, 1038, 0, 0, 1133, 1134,
            0, 1080, 1022, 1133, 1134, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1053, 1054, 1155, 0, 1149, 1082,
            0, 1080, 0, 1149, 1150, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1133, 1134, 1098,
            1133, 1134, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1149, 1150, 1080,
            1149, 1150, 1080, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1080, 1022, 1133, 1134,
            1082, 1133, 1134, 1078, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1149, 1150,
            1098, 1149, 1150, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1133, 1134, 1113, 1155,
            1133, 1134, 1022, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1149, 1150, 1133, 1134,
            1149, 1150, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1113, 1078, 1149, 1150],
         "height":20,
         "id":4,
         "name":"tree2Layer",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":20,
         "x":0,
         "y":0
        }, 
        {
         "data":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 905, 905, 906, 907, 908, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 921, 922, 923, 924, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 1037, 1038, 0, 0, 0, 0, 937, 938, 939, 940, 0, 0, 0, 1037, 1038, 0, 0,
            0, 0, 0, 1053, 1054, 1093, 0, 0, 0, 953, 954, 955, 956, 0, 1093, 1093, 1053, 1054, 0, 1095,
            0, 0, 0, 1095, 1037, 1038, 0, 0, 0, 969, 986, 987, 988, 0, 0, 0, 1095, 0, 0, 0,
            1095, 0, 0, 0, 1053, 1054, 0, 0, 0, 0, 1002, 1003, 1004, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 1093, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 1095, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1037, 1038, 0, 0, 1095,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1053, 1054, 1093, 0, 0,
            1038, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            1054, 1095, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 1037, 1038, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1093,
            0, 0, 1053, 1054, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1095, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1093,
            0, 0, 1095, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
         "height":20,
         "id":5,
         "name":"tree3Layer",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":20,
         "x":0,
         "y":0
        }],
 "nextlayerid":8,
 "nextobjectid":1,
 "orientation":"orthogonal",
 "renderorder":"right-down",
 "tiledversion":"1.10.2",
 "tileheight":32,
 "tilesets":[
        {
         "columns":18,
         "firstgid":1,
         "image":"floor3.jpg",
         "imageheight":1502,
         "imagewidth":564,
         "margin":0,
         "name":"floor3",
         "spacing":0,
         "tilecount":900,
         "tileheight":30,
         "tilewidth":30
        }, 
        {
         "columns":16,
         "firstgid":901,
         "image":"tree.png",
         "imageheight":512,
         "imagewidth":512,
         "margin":0,
         "name":"tree",
         "spacing":0,
         "tilecount":256,
         "tileheight":32,
         "tilewidth":32
        }],
 "tilewidth":32,
 "type":"map",
 "version":"1.10",
 "width":20
});