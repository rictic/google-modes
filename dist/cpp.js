(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('codemirror'), require('codemirror-grammar-mode')) :
  typeof define === 'function' && define.amd ? define(['codemirror', 'codemirror-grammar-mode'], factory) :
  (factory(global.CodeMirror));
}(this, (function (CodeMirror) { 'use strict';

  var e = [/^static_assert(?![a-zA-Z¡-￿_0-9])/, /^namespace(?![a-zA-Z¡-￿_0-9])/, /^throw(?![a-zA-Z¡-￿_0-9])/, /^try(?![a-zA-Z¡-￿_0-9])/, /^asm(?![a-zA-Z¡-￿_0-9])/, /^enum(?![a-zA-Z¡-￿_0-9])/, /^for(?![a-zA-Z¡-￿_0-9])/, /^while(?![a-zA-Z¡-￿_0-9])/, /^do(?![a-zA-Z¡-￿_0-9])/, /^if(?![a-zA-Z¡-￿_0-9])/, /^switch(?![a-zA-Z¡-￿_0-9])/, /^(?:break|continue)(?![a-zA-Z¡-￿_0-9])/, /^goto(?![a-zA-Z¡-￿_0-9])/, /^return(?![a-zA-Z¡-￿_0-9])/, /^(?:struct|union)(?![a-zA-Z¡-￿_0-9])/, /^default(?![a-zA-Z¡-￿_0-9])/, /^case(?![a-zA-Z¡-￿_0-9])/, /^(?:_[A-Z0-9_]+(?![a-zA-Z¡-￿_0-9])|[A-Z]+[A-Z0-9]*_[A-Z0-9_]*(?![a-zA-Z¡-￿_0-9]))/, /^catch(?![a-zA-Z¡-￿_0-9])/, /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*/, /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*(?=\{)/, /^typename(?![a-zA-Z¡-￿_0-9])/, /^alignas(?![a-zA-Z¡-￿_0-9])/, /^(?:0x[0-9a-fA-F\']+|0b[01\']+|(?:[0-9][0-9\']*(?:\.[0-9\']*)?|\.[0-9][0-9\']*)(?:[eE]\-?[0-9\']*)?)[LlUuFf]?/, /^class(?![a-zA-Z¡-￿_0-9])/, /^(?:final|explicit)(?![a-zA-Z¡-￿_0-9])/, /^using(?![a-zA-Z¡-￿_0-9])/, /^export(?![a-zA-Z¡-￿_0-9])/, /^template(?![a-zA-Z¡-￿_0-9])/, /^auto(?![a-zA-Z¡-￿_0-9])/, /^(?:inline|virtual|explicit|friend|constexpr)(?![a-zA-Z¡-￿_0-9])/, /^(?:register|static|extern|typedef)(?![a-zA-Z¡-￿_0-9])/, /^(?:const|volatile)(?![a-zA-Z¡-￿_0-9])/, /^(?:unsigned|signed|long)(?![a-zA-Z¡-￿_0-9])/, /^(?:int|float|double|char|short)(?![a-zA-Z¡-￿_0-9])/, /^\~?[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*/, /^noexcept(?![a-zA-Z¡-￿_0-9])/, /^(?:override|final|new)(?![a-zA-Z¡-￿_0-9])/, /^delete(?![a-zA-Z¡-￿_0-9])/, /^else(?![a-zA-Z¡-￿_0-9])/, /^(?:\+\+|\-\-)/, /^(?:\-\>|(?!\.\.)\.)/, /^(?:\!|\+|\-|\/|\*|\%|\>\>?|\<\<?|\=|\|\|?|\&\&?)\=?/, [1, "\n", "\t", " "], /^[a-zA-Z¡-￿_\.]+/, /^\@[a-zA-Z¡-￿_]+/, [0, /^(?!\*\/|\{?\@[a-zA-Z¡-￿_])/, /^[^]/], /^(?:\.\.\.)?/, /^virtual(?![a-zA-Z¡-￿_0-9])/, /^(?:private|public|protected)(?![a-zA-Z¡-￿_0-9])/, /^new(?![a-zA-Z¡-￿_0-9])/, /^this(?![a-zA-Z¡-￿_0-9])/, /^(?:dynamic|static|const|reinterpret)_cast(?![a-zA-Z¡-￿_0-9])/, /^(?:nullptr(?![a-zA-Z¡-￿_0-9])|(?:true|false|null)(?![a-zA-Z¡-￿_0-9]))/, /^(?:sizeof|alignof)(?![a-zA-Z¡-￿_0-9])/, /^operator(?![a-zA-Z¡-￿_0-9])/, /^[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*(?= *\()/, /^(?!\>)/, /^(?:\.\.\.|\(|\=|\>|\,)/, /^(?:\*|\&\&|\&)/];
  var nodes = [
    [2, 6, 2, {"name":"preprocessorLine","token":"meta"},
     0, 2],
    [/^[^]/, 0],
    [1, 9, 3],
    [2, 12, 4, {"name":"Statement"}],
    [0, 2,
     0, 1],
    [3, "keyword", e[5], -1,
     3, "keyword", e[13], -1,
     3, "keyword", e[9], -1,
     3, "keyword", e[39], -1,
     3, "keyword", e[6], -1,
     3, "keyword", e[7], -1,
     3, "keyword", e[8], -1,
     3, "keyword", e[11], -1,
     3, "keyword", e[12], -1,
     3, "keyword", e[15], -1,
     3, "keyword", e[16], -1,
     3, "keyword", e[10], -1,
     3, "keyword", e[14], -1,
     3, "keyword", e[54], -1,
     3, "keyword", e[29], -1,
     3, "keyword", e[30], -1,
     3, "keyword", e[31], -1,
     3, "type", e[33], -1,
     3, "type", e[34], -1,
     3, "keyword", e[32], -1,
     3, "atom", e[53], -1,
     3, "meta", e[17], -1,
     1, 138, -1,
     3, "number", e[23], -1,
     2, 145, -1, {"name":"string","token":"string"},
     2, 150, -1, {"name":"prefixOp","token":"operator"},
     3, "operator", e[40], -1,
     3, "operator", e[42], -1,
     2, 151, -1, {"name":"comment","token":"comment"},
     3, "keyword", e[1], -1,
     3, "keyword", e[21], -1,
     3, "keyword", e[50], -1,
     3, "keyword", e[38], -1,
     3, "keyword", e[51], -1,
     3, "keyword", e[3], -1,
     3, "keyword", e[18], -1,
     3, "keyword", e[2], -1,
     3, "keyword", e[36], -1,
     3, "keyword", e[4], -1,
     3, "keyword", e[27], -1,
     3, "keyword", e[28], -1,
     3, "keyword", e[24], -1,
     3, "keyword", e[48], -1,
     3, "keyword", e[49], -1,
     3, "keyword", e[55], -1,
     3, "keyword", e[26], -1,
     3, "keyword", e[22], -1,
     3, "keyword", e[0], -1,
     3, "keyword", e[52], -1,
     3, "keyword", e[37], -1,
     3, "keyword", e[25], -1,
     /^[^]/, -1],
    ["#", 7],
    [2, 151, 7, {"name":"comment","token":"comment"},
     "\\", 8,
     /^./, 7,
     0, -1],
    [/^[^]/, 7],
    [/^[ \t]/, 9,
     "\n", 10,
     2, 151, 9, {"name":"comment","token":"comment"},
     0, -1],
    [/^[ \t]*/, 11],
    [2, 6, 9, {"name":"preprocessorLine","token":"meta"},
     0, 9],
    [1, 156, -1,
     1, 173, -1,
     3, "keyword", e[0], 13,
     3, "keyword", e[1], 17,
     3, "keyword", e[2], 25,
     3, "keyword", e[3], 29,
     3, "keyword", e[4], 44,
     1, 185, -1,
     2, 198, -1, {"name":"Template"},
     [7, "constructorAhead"], 50,
     3, "keyword", e[5], 53,
     3, "keyword", e[6], 57,
     3, "keyword", e[7], 58,
     3, "keyword", e[8], 59,
     3, "keyword", e[9], 83,
     3, "keyword", e[10], 88,
     2, 207, -1, {"name":"Block"},
     3, "keyword", e[11], 92,
     3, "keyword", e[12], 94,
     3, "keyword", e[13], 98,
     3, "keyword", e[14], 102,
     3, "keyword", e[15], 108,
     3, "keyword", e[16], 109,
     [0, /^[a-zA-Z¡-￿_]/, /^[a-zA-Z¡-￿_0-9]*/, [5, 211]], 108,
     3, "meta", e[17], 112,
     2, 212, 120, {"name":"DeclType"},
     ";", -1,
     1, 229, 136],
    [1, 9, 14],
    [2, 234, 15, {"name":"ArgList"}],
    [1, 9, 16],
    [";", -1],
    [1, 9, 18],
    [1, 239, 19,
     0, 19],
    [1, 9, 20],
    [3, "operator", "=", 21,
     2, 242, -1, {"name":"NamespaceBlock"}],
    [1, 9, 22],
    [1, 138, 23],
    [1, 9, 24],
    [";", -1],
    [1, 9, 26],
    [1, 229, 27],
    [1, 9, 28],
    [";", -1],
    [1, 9, 30],
    [2, 207, 31, {"name":"Block"}],
    [1, 9, 32],
    [3, "keyword", e[18], 33,
     0, -1],
    [1, 9, 34],
    ["(", 35],
    [1, 9, 36],
    [1, 246, 37],
    [1, 9, 38],
    [1, 259, 39,
     0, 39],
    [1, 9, 40],
    [")", 41],
    [1, 9, 42],
    [2, 207, 43, {"name":"Block"}],
    [1, 9, 32],
    [1, 9, 45],
    ["{", 46],
    [1, 9, 47],
    [2, 145, 48, {"name":"string","token":"string"}],
    [1, 9, 49],
    ["}", -1],
    [1, 239, 51],
    [1, 9, 52],
    [2, 271, -1, {"name":"FunctionDef"}],
    [1, 9, 54],
    [3, "type def", e[19], 55,
     0, 55],
    [1, 9, 56],
    [2, 304, -1, {"name":"BlockOf"},
     0, -1],
    [1, 9, 60],
    [1, 9, 61],
    [1, 9, 62],
    ["(", 63],
    [2, 322, 64, {"name":"CondExpr"}],
    [2, 12, 65, {"name":"Statement"}],
    [1, 9, 66],
    [1, 9, 67],
    [1, 9, 68],
    [2, 12, 69, {"name":"Statement"}],
    [2, 12, -1, {"name":"Statement"}],
    [3, "keyword", e[7], 70],
    [1, 9, 71],
    [1, 9, 72],
    [1, 229, 73,
     0, 73],
    [2, 322, 74, {"name":"CondExpr"}],
    [1, 9, 75],
    [1, 9, 76],
    [";", 77],
    [";", -1],
    [1, 9, 78],
    [1, 229, 79,
     0, 79],
    [1, 9, 80],
    [")", 81],
    [1, 9, 82],
    [2, 12, -1, {"name":"Statement"}],
    [1, 9, 84],
    [2, 322, 85, {"name":"CondExpr"}],
    [1, 9, 86],
    [2, 12, 87, {"name":"Statement"}],
    [2, 327, -1, {"name":"Alternative"}],
    [1, 9, 89],
    [2, 322, 90, {"name":"CondExpr"}],
    [1, 9, 91],
    [2, 207, -1, {"name":"Block"}],
    [1, 9, 93],
    [";", -1],
    [1, 9, 95],
    [e[19], 96],
    [1, 9, 97],
    [";", -1],
    [1, 9, 99],
    [1, 229, 100,
     0, 100],
    [1, 9, 101],
    [";", -1],
    [1, 9, 103],
    [1, 239, 104,
     0, 104],
    [1, 9, 105],
    [2, 331, 106, {"name":"BlockOf"},
     0, 106],
    [1, 9, 107],
    [";", -1],
    [1, 9, 110],
    [1, 9, 111],
    [":", -1],
    [1, 229, 108],
    [1, 9, 113],
    [2, 341, 114, {"name":"ParenTokens"},
     0, 114],
    [1, 9, 115],
    [2, 207, 116, {"name":"Block"},
     0, 117,
     0, 116],
    [1, 9, 118],
    [1, 345, 119,
     0, 116],
    [/^\;?/, -1],
    [1, 9, 117],
    [1, 9, 121],
    [1, 259, 122],
    [1, 9, 123],
    [3, "meta", e[17], 124,
     [5, 366], 125,
     1, 370, 126,
     0, 126],
    [1, 9, 127],
    [2, 271, -1, {"name":"FunctionDef"}],
    [1, 9, 128],
    [2, 341, 129, {"name":"ParenTokens"},
     0, 129],
    [",", 130,
     ";", -1],
    [1, 9, 131],
    [1, 9, 132],
    [/^\;?/, -1],
    [1, 239, 133],
    [1, 9, 134],
    [1, 370, 135,
     0, 135],
    [1, 9, 128],
    [1, 9, 137],
    [";", -1],
    [0, 139,
     3, "type", e[20], -1,
     2, 373, 144, {"name":"unqualifiedVariableName","token":"variable"}],
    [1, 374, 140],
    [0, 139,
     3, "type qualified", e[20], 141,
     2, 379, 141, {"name":"qualifiedVariableName","token":"qualified"}],
    [2, 380, 142, {"name":"TemplateArgs"},
     0, -1],
    [/^(?=\:\:)/, 143,
     0, -1],
    [1, 138, -1],
    [2, 380, -1, {"name":"TemplateArgs"},
     0, -1],
    [/^R\"(?:(?!\().)*\(/, 146,
     /^(?:(?:L|u8?|U)(?=[\'\"]))?/, 147],
    [[0, [7, "rawStringContinues"], /^[^]/], 146,
     "\"", -1],
    [/^\'(?:\\.(?:(?!\').)*|.)\'/, -1,
     "\"", 148],
    ["\\", 149,
     [0, /^(?!\")/, /^[^]/], 148,
     "\"", -1],
    [/^[^]/, 148],
    [3, "keyword", e[21], -1,
     /^(?:\+\+|\-\-|\!|\~|\&|\*|\+)/, -1],
    [/^\/\*\*(?!\/)/, 152,
     "/*", 155,
     /^\/\/.*/, -1],
    [e[46], 153,
     0, 154],
    [0, 152,
     0, 152],
    [2, 385, 154, {"name":"doccomment.tagGroup"},
     "*/", -1],
    [[0, /^(?!\*\/)/, /^[^]/], 155,
     "*/", -1],
    [3, "keyword", e[22], 158,
     [0, [5, 396], "["], 159],
    [0, 156,
     0, -1],
    [1, 9, 160],
    [1, 9, 161],
    ["(", 162],
    ["[", 163],
    [1, 9, 164],
    [1, 9, 165],
    [3, "number", e[23], 166],
    [1, 400, 167],
    [1, 9, 168],
    [1, 9, 169],
    [")", 170],
    ["]", 171],
    [1, 9, 157],
    [1, 9, 172],
    ["]", 170],
    [3, "keyword", e[24], 174,
     3, "keyword", e[14], 174],
    [1, 9, 175],
    [1, 156, 176,
     0, 176],
    [1, 9, 177],
    [3, "type def", e[19], 178],
    [1, 9, 179],
    [3, "keyword", e[25], 180,
     ":", 181,
     0, 183],
    [1, 9, 179],
    [1, 9, 182],
    [1, 422, 183],
    [1, 9, 184],
    [";", -1,
     2, 436, -1, {"name":"ClassBody"}],
    [3, "keyword", e[26], 186],
    [1, 9, 187],
    [3, "keyword", e[21], 188,
     3, "keyword", e[1], 189,
     0, 189],
    [1, 9, 190],
    [1, 9, 191],
    [1, 246, 192],
    [1, 138, 192],
    [1, 9, 193],
    [3, "operator", "=", 194,
     0, 196],
    [1, 9, 195],
    [1, 246, 196],
    [1, 9, 197],
    [";", -1],
    [3, "keyword", e[27], 199,
     0, 199],
    [1, 9, 200],
    [3, "keyword", e[28], 201],
    [1, 9, 202],
    [2, 440, 203, {"name":"TemplateParams"}],
    [1, 9, 204],
    [1, 9, 205],
    [1, 9, 206],
    [2, 12, -1, {"name":"Statement"}],
    ["{", 208],
    [1, 9, 209],
    [2, 12, 210, {"name":"Statement"},
     "}", -1],
    [1, 9, 209],
    [e[43], 211,
     /^\:(?!\:)/, -1],
    [0, 213,
     0, 214,
     3, "keyword", e[29], 225,
     [5, 445], 226],
    [3, "keyword", e[30], 215,
     3, "keyword", e[31], 215,
     3, "keyword", e[32], 215],
    [3, "type", e[33], 216],
    [1, 9, 217],
    [1, 9, 218],
    [0, 213,
     3, "keyword", e[29], 219,
     0, 220,
     1, 450, 219],
    [0, 214,
     3, "type", e[34], 219,
     0, 219],
    [1, 9, 221],
    [3, "type", e[33], 222],
    [1, 455, 223,
     0, -1],
    [0, 220,
     1, 9, 224,
     0, 219],
    [1, 9, 221],
    [3, "type", e[34], 219],
    [1, 9, 227],
    [1, 450, 225],
    [1, 455, 228,
     0, -1],
    [1, 9, 227],
    [1, 462, 230,
     1, 479, 231],
    [1, 9, 229],
    [1, 9, 232],
    [1, 345, 233,
     0, -1],
    [1, 9, 232],
    ["(", 235],
    [1, 9, 236],
    [1, 512, 237],
    [1, 9, 238],
    [")", -1],
    [0, 240,
     3, "def", e[35], -1],
    [1, 518, 241],
    [0, 240,
     3, "qualified def", e[35], -1],
    ["{", 243],
    [1, 9, 244],
    [2, 12, 245, {"name":"Statement"},
     "}", -1],
    [1, 9, 244],
    [3, "keyword", e[21], 247,
     0, 249],
    [1, 9, 248],
    [1, 246, -1],
    [3, "keyword", e[30], 250,
     3, "keyword", e[31], 250,
     3, "keyword", e[32], 250,
     3, "keyword", e[14], 251,
     0, 251],
    [1, 9, 249],
    [1, 9, 252],
    [3, "keyword", e[29], 253,
     0, 254,
     1, 450, 253],
    [1, 9, 255],
    [3, "type", e[33], 256],
    [1, 455, 257,
     0, -1],
    [0, 254,
     1, 9, 258,
     0, 253],
    [1, 9, 255],
    [3, "type", e[34], 253],
    [0, 260,
     "(", 267],
    [e[59], 261,
     1, 239, 262],
    [1, 9, 260],
    [1, 9, 263],
    ["[", 264,
     0, -1],
    [1, 9, 265],
    ["]", 266],
    [1, 9, 263],
    [1, 9, 268],
    [1, 259, 269],
    [1, 9, 270],
    [")", -1],
    [2, 523, 272, {"name":"ParamList"}],
    [1, 9, 273],
    [3, "keyword", e[32], 274,
     /^(?:\&|\&\&)?/, 275],
    [1, 9, 273],
    [1, 9, 276],
    [3, "keyword", e[36], 277,
     3, "keyword", e[2], 278,
     0, 289],
    [1, 9, 279],
    [1, 9, 280],
    ["(", 281,
     0, 289],
    ["(", 282],
    [1, 9, 283],
    [1, 9, 284],
    [1, 229, 285],
    [1, 528, 286],
    [1, 9, 287],
    [1, 9, 288],
    [")", 289],
    [")", 289],
    [1, 9, 290],
    [1, 156, 291,
     0, 291],
    [1, 9, 292],
    ["->", 293,
     0, 295],
    [1, 9, 294],
    [1, 246, 295],
    [1, 9, 296],
    [3, "keyword", e[37], 297,
     2, 534, 298, {"name":"InitializerList"},
     0, 298],
    [1, 9, 296],
    [1, 9, 299],
    [";", -1,
     2, 207, -1, {"name":"Block"},
     3, "operator", "=", 300],
    [1, 9, 301],
    [3, "keyword", e[15], 302,
     3, "keyword", e[38], 302],
    [1, 9, 303],
    [";", -1],
    ["{", 305],
    [1, 9, 306],
    [1, 537, 307,
     0, 320],
    [1, 9, 308],
    [3, "operator", "=", 309,
     0, 310],
    [1, 9, 311],
    [1, 9, 312],
    [1, 229, 310],
    [",", 313,
     0, 320],
    [1, 9, 314],
    [1, 537, 315,
     0, 316],
    [1, 9, 317],
    [1, 9, 312],
    [3, "operator", "=", 318,
     0, 316],
    [1, 9, 319],
    [1, 229, 316],
    [1, 9, 321],
    ["}", -1],
    ["(", 323],
    [1, 9, 324],
    [1, 229, 325,
     0, 325],
    [1, 9, 326],
    [")", -1],
    [1, 9, 328],
    [3, "keyword", e[39], 329,
     0, -1],
    [1, 9, 330],
    [2, 12, -1, {"name":"Statement"}],
    ["{", 332],
    [1, 9, 333],
    [1, 540, 334,
     0, 339],
    [1, 9, 335],
    [";", 336,
     0, 339],
    [1, 9, 337],
    [1, 540, 338,
     0, 338],
    [1, 9, 335],
    [1, 9, 340],
    ["}", -1],
    ["(", 342],
    [1, 9, 343],
    [1, 551, 344,
     ")", -1],
    [1, 9, 343],
    [2, 556, -1, {"name":"BlockOf"},
     2, 234, 346, {"name":"ArgList"},
     e[41], 348,
     2, 234, -1, {"name":"ArgList"},
     "[", 352,
     3, "operator", e[40], -1,
     e[41], 356,
     3, "operator", e[42], 358,
     "?", 360],
    [1, 9, 347],
    [2, 207, -1, {"name":"Block"},
     0, -1],
    [1, 9, 349],
    [2, 566, 350, {"name":"fieldName","token":"property"}],
    [1, 9, 351],
    [2, 380, -1, {"name":"TemplateArgs"},
     0, -1],
    [1, 9, 353],
    [1, 229, 354],
    [1, 9, 355],
    ["]", -1],
    [1, 9, 357],
    [2, 566, -1, {"name":"fieldName","token":"property"}],
    [1, 9, 359],
    [1, 229, -1],
    [1, 9, 361],
    [1, 229, 362],
    [1, 9, 363],
    [":", 364],
    [1, 9, 365],
    [1, 229, -1],
    ["(", 367],
    [1, 9, 368],
    [")", -1,
     3, "keyword", e[30], -1,
     3, "keyword", e[31], -1,
     3, "keyword", e[32], -1,
     3, "type", e[33], -1,
     3, "keyword", e[29], -1,
     [5, 445], 369],
    [1, 450, -1],
    [3, "operator", "=", 371,
     2, 556, -1, {"name":"BlockOf"},
     2, 234, -1, {"name":"ArgList"}],
    [1, 9, 372],
    [1, 229, -1],
    [3, "callee", e[56], -1,
     e[19], -1],
    ["::", -1,
     [5, 567], 375],
    [3, "variable qualifier", e[19], 376],
    [2, 380, 377, {"name":"TemplateArgs"},
     0, 377],
    [1, 9, 378],
    ["::", -1],
    [2, 373, -1, {"name":"unqualifiedVariableName","token":"variable"}],
    ["<", 381],
    [1, 9, 382],
    [1, 571, 383],
    [1, 9, 384],
    [">", -1],
    [3, "tag", /^\@param(?![a-zA-Z¡-￿_])/, 386,
     3, "tag", /^\@(?:throws|exception)(?![a-zA-Z¡-￿_])/, 387,
     3, "tag", e[45], 394,
     "{", 388],
    [e[43], 386,
     3, "def", e[44], 394,
     "<", 389,
     0, 394],
    [e[43], 387,
     3, "type", e[44], 394,
     0, 394],
    [3, "tag", e[45], 390],
    [3, "type def", /^[a-zA-Z¡-￿_]+/, 391],
    [/^[\t ]*/, 392],
    [">", 394],
    [1, 603, 393],
    ["}", 394],
    [e[46], 395,
     0, -1],
    [0, 394,
     0, 394],
    ["[", 397],
    [1, 9, 398],
    [" ", 399,
     "[", -1],
    [1, 9, 398],
    [1, 607, 401,
     3, "meta", e[19], 402,
     0, -1],
    [1, 9, 400],
    [1, 9, 403],
    ["(", 404,
     0, 405],
    [1, 9, 406],
    [1, 9, 407],
    [1, 612, 408,
     ")", 405],
    [e[47], 409],
    [1, 9, 406],
    [1, 9, 410],
    [",", 411,
     0, -1],
    [1, 9, 412],
    [1, 607, 413,
     3, "meta", e[19], 414],
    [1, 9, 412],
    [1, 9, 415],
    ["(", 416,
     0, 417],
    [1, 9, 418],
    [1, 9, 419],
    [1, 612, 420,
     ")", 417],
    [e[47], 421],
    [1, 9, 418],
    [1, 9, 410],
    [3, "keyword", e[48], 423,
     0, 423,
     0, -1],
    [1, 9, 424],
    [3, "keyword", e[49], 425,
     0, 425],
    [1, 9, 426],
    [1, 246, 427],
    [1, 9, 428],
    [",", 429,
     0, -1],
    [1, 9, 430],
    [3, "keyword", e[48], 431,
     0, 431],
    [1, 9, 432],
    [3, "keyword", e[49], 433,
     0, 433],
    [1, 9, 434],
    [1, 246, 435],
    [1, 9, 428],
    ["{", 437],
    [1, 9, 438],
    [2, 622, 439, {"name":"ClassItem"},
     "}", -1],
    [1, 9, 438],
    ["<", 441],
    [1, 9, 442],
    [1, 633, 443],
    [1, 9, 444],
    [">", -1],
    [/^(?!(?:new|delete)(?![a-zA-Z¡-￿_0-9]))/, 446],
    [1, 450, 447],
    [1, 9, 448],
    [1, 455, 449,
     /^[a-zA-Z¡-￿_]/, -1],
    [1, 9, 448],
    [3, "keyword", e[21], 451,
     0, 452],
    [1, 9, 452],
    [0, 453,
     3, "type", e[19], -1],
    [1, 659, 454],
    [0, 453,
     3, "type qualified", e[19], -1],
    [2, 380, -1, {"name":"TemplateArgs"},
     "::", 456,
     1, 156, -1,
     "[", 458,
     /^[\*\&]/, -1,
     3, "keyword", e[32], -1],
    [1, 9, 457],
    [3, "type qualified", e[19], -1],
    [1, 9, 459],
    [3, "number", e[23], 460,
     0, 460],
    [1, 9, 461],
    ["]", -1],
    [3, "keyword", e[38], 463,
     3, "keyword", e[50], 467,
     2, 150, -1, {"name":"prefixOp","token":"operator"}],
    [1, 9, 464],
    ["[", 465,
     0, -1],
    [1, 9, 466],
    ["]", -1],
    [1, 9, 468],
    ["[", 469,
     0, 470],
    [1, 9, 471],
    [1, 9, 472],
    ["]", 470],
    ["(", 473,
     0, 474],
    [1, 9, 475],
    [1, 9, 476],
    [1, 229, 477],
    [1, 156, -1,
     0, -1],
    [1, 9, 478],
    [")", 474],
    [3, "keyword", e[51], -1,
     [0, [5, 664], "["], 480,
     3, "keyword", e[52], 486,
     2, 668, 498, {"name":"ParenExpr"},
     3, "atom", e[53], -1,
     3, "number", e[23], -1,
     2, 145, -1, {"name":"string","token":"string"},
     2, 556, -1, {"name":"BlockOf"},
     3, "keyword", e[54], 500,
     1, 138, -1],
    [1, 9, 481],
    [1, 673, 482],
    [1, 9, 483],
    ["]", 484],
    [1, 9, 485],
    [2, 271, -1, {"name":"FunctionDef"},
     2, 207, -1, {"name":"Block"}],
    [1, 9, 487],
    ["<", 488],
    [1, 9, 489],
    [1, 246, 490],
    [1, 9, 491],
    [">", 492],
    [1, 9, 493],
    ["(", 494],
    [1, 9, 495],
    [1, 229, 496],
    [1, 9, 497],
    [")", -1],
    [1, 9, 499],
    [1, 229, -1,
     0, -1],
    [1, 9, 501],
    ["(", 502,
     e[47], 503],
    [1, 9, 504],
    [1, 9, 505],
    [1, 246, 506],
    [1, 229, 507],
    [1, 9, 508],
    [1, 9, 509],
    [")", 507],
    [3, "meta", e[17], 510],
    [1, 9, 511],
    [2, 341, -1, {"name":"ParenTokens"},
     0, -1],
    [1, 229, 513,
     0, -1],
    [1, 9, 514],
    [",", 515,
     0, -1],
    [1, 9, 516],
    [1, 229, 517],
    [1, 9, 514],
    ["::", -1,
     [5, 683], 519],
    [3, "qualifier def", e[19], 520],
    [2, 380, 521, {"name":"TemplateArgs"},
     0, 521],
    [1, 9, 522],
    ["::", -1],
    ["(", 524],
    [1, 9, 525],
    [1, 687, 526],
    [1, 9, 527],
    [")", -1],
    [1, 246, 529,
     0, -1],
    [1, 9, 530],
    [",", 531,
     0, -1],
    [1, 9, 532],
    [1, 246, 533],
    [1, 9, 530],
    [":", 535],
    [1, 9, 536],
    [1, 701, -1],
    [3, "keyword", e[55], 538,
     3, "def property", e[19], -1],
    [3, "operator", "->*", -1,
     ",", -1,
     3, "operator", e[42], -1,
     2, 150, -1, {"name":"prefixOp","token":"operator"},
     /^(?:\(\)|\[\])/, -1,
     3, "keyword", e[50], 539,
     3, "keyword", e[38], 539],
    [/^(?:\[\])?/, -1],
    [1, 246, 541],
    [1, 9, 542],
    [2, 566, 543, {"name":"fieldName","token":"property"},
     0, 543],
    [1, 9, 544],
    [":", 545,
     "[", 546,
     0, -1],
    [1, 9, 547],
    [1, 9, 548],
    [3, "number", e[23], -1],
    [3, "number", e[23], 549,
     0, 549],
    [1, 9, 550],
    ["]", -1],
    [2, 341, -1, {"name":"ParenTokens"},
     2, 707, -1, {"name":"BracketTokens"},
     2, 711, -1, {"name":"BraceTokens"},
     3, "keyword", /^(?:auto|double|int|struct|break|else|long|switch|case|enum|register|typedef|char|extern|return|union|const|float|short|unsigned|continue|for|signed|void|default|goto|sizeof|volatile|do|if|static|while|asm|alignof)(?![a-zA-Z¡-￿_0-9])/, -1,
     3, "keyword", /^(?:alignas|asm|bool|catch|class|compl|concept|constexpr|const_cast|decltype|delete|dynamic_cast|explicit|export|friend|import|module|mutable|namespace|new|noexcept|nullptr|operator|private|protected|public|reinterpret_cast|requires|static_assert|static_cast|synchronized|template|this|throw|try|typedef|typeid|using|virtual|wchar_t)(?![a-zA-Z¡-￿_0-9])/, -1,
     3, "atom", e[53], -1,
     3, "number", e[23], -1,
     2, 145, -1, {"name":"string","token":"string"},
     3, "operator", e[42], -1,
     2, 150, -1, {"name":"prefixOp","token":"operator"},
     0, 552,
     2, 373, -1, {"name":"unqualifiedVariableName","token":"variable"},
     /^(?![\)\]\}])./, -1],
    ["::", 553,
     /^(?=[a-zA-Z¡-￿_][a-zA-Z¡-￿_0-9]*\:\:)/, 554],
    [0, 552,
     2, 379, -1, {"name":"qualifiedVariableName","token":"qualified"}],
    [3, "variable qualifier", e[19], 555],
    ["::", 553],
    ["{", 557],
    [1, 9, 558],
    [1, 229, 559,
     0, 564],
    [1, 9, 560],
    [",", 561,
     0, 564],
    [1, 9, 562],
    [1, 229, 563,
     0, 563],
    [1, 9, 560],
    [1, 9, 565],
    ["}", -1],
    [3, "callee", e[56], -1,
     e[19], -1],
    [3, "variable qualifier", e[19], 568],
    [1, 715, 569,
     0, 569],
    [1, 9, 570],
    ["::", -1],
    [3, "keyword", e[28], 572,
     0, 573,
     0, 574,
     0, -1],
    [1, 9, 575],
    [1, 9, 576],
    [3, "keyword", e[30], 577,
     3, "keyword", e[31], 577,
     [5, 720], 578,
     1, 723, 579],
    [2, 380, 573, {"name":"TemplateArgs"}],
    [3, "keyword", e[24], 580,
     3, "keyword", e[21], 580],
    [1, 9, 574],
    [1, 246, 581],
    [1, 9, 582],
    [1, 9, 583],
    [1, 9, 584],
    [e[47], 585],
    [1, 246, 585],
    [2, 523, 579, {"name":"ParamList"},
     1, 370, 579,
     0, 579],
    [1, 9, 586],
    [",", 587,
     0, -1],
    [1, 9, 588],
    [3, "keyword", e[28], 589,
     0, 590,
     0, 591],
    [1, 9, 592],
    [1, 9, 593],
    [3, "keyword", e[30], 594,
     3, "keyword", e[31], 594,
     [5, 729], 595,
     1, 723, 596],
    [2, 380, 590, {"name":"TemplateArgs"}],
    [3, "keyword", e[24], 597,
     3, "keyword", e[21], 597],
    [1, 9, 591],
    [1, 246, 598],
    [1, 9, 599],
    [1, 9, 600],
    [1, 9, 601],
    [e[47], 602],
    [1, 246, 602],
    [2, 523, 596, {"name":"ParamList"},
     1, 370, 596,
     0, 596],
    [1, 9, 586],
    [3, "attribute", "{", 604,
     3, "attribute", /^(?:(?!\{|\}|\*\/).)+/, 603,
     "\n", 605,
     0, -1],
    [1, 603, 606],
    [/^[\t ]*(?:\*[\t ]*)?/, 603],
    [/^(?=\*\/)/, 603,
     3, "attribute", "}", 603],
    ["::", -1,
     [5, 732], 608],
    [3, "meta", e[19], 609],
    [2, 380, 610, {"name":"TemplateArgs"},
     0, 610],
    [1, 9, 611],
    ["::", -1],
    [3, "number", e[23], -1,
     2, 145, -1, {"name":"string","token":"string"},
     e[19], -1,
     3, "operator", e[42], -1,
     ",", -1,
     "(", 613,
     "[", 616,
     "{", 619],
    [1, 9, 614],
    [1, 612, 615,
     ")", -1],
    [1, 9, 614],
    [1, 9, 617],
    [1, 612, 618,
     "]", -1],
    [1, 9, 617],
    [1, 9, 620],
    [1, 612, 621,
     "}", -1],
    [1, 9, 620],
    [3, "keyword", e[49], 623,
     2, 198, -1, {"name":"Template"},
     1, 185, -1,
     3, "keyword", e[0], 625,
     3, "meta", e[17], 629,
     1, 173, -1,
     2, 736, -1, {"name":"ObjectMember"}],
    [1, 9, 624],
    [":", -1],
    [1, 9, 626],
    [2, 234, 627, {"name":"ArgList"}],
    [1, 9, 628],
    [";", -1],
    [1, 9, 630],
    [2, 341, 631, {"name":"ParenTokens"},
     0, 631],
    [1, 9, 632],
    [/^\;?/, -1],
    [1, 754, 634,
     0, 635,
     0, -1],
    [1, 9, 636],
    [3, "keyword", e[30], 637,
     3, "keyword", e[31], 637,
     1, 246, 638],
    [",", 639,
     0, -1],
    [1, 9, 635],
    [1, 9, 640],
    [1, 9, 641],
    [e[47], 642],
    [1, 754, 643,
     0, 644],
    [1, 9, 645],
    [1, 9, 636],
    [3, "keyword", e[30], 646,
     3, "keyword", e[31], 646,
     1, 246, 647],
    [1, 239, 648],
    [1, 9, 644],
    [1, 9, 649],
    [1, 9, 650],
    [e[47], 651],
    [3, "operator", "=", 652,
     0, 634],
    [1, 9, 653],
    [1, 9, 654],
    [1, 239, 655],
    [1, 723, 634],
    [1, 9, 656],
    [3, "operator", "=", 657,
     0, 643],
    [1, 9, 658],
    [1, 723, 643],
    ["::", -1,
     [5, 765], 660],
    [3, "type qualifier", e[19], 661],
    [2, 380, 662, {"name":"TemplateArgs"},
     0, 662],
    [1, 9, 663],
    ["::", -1],
    ["[", 665],
    [1, 9, 666],
    [e[43], 667,
     /^[\&\=]/, -1,
     3, "keyword", e[51], -1,
     "]", -1],
    [1, 9, 666],
    ["(", 669],
    [1, 9, 670],
    [1, 229, 671,
     0, 671],
    [1, 9, 672],
    [")", -1],
    ["&", 674,
     "=", 675,
     3, "keyword", e[51], 675,
     0, -1],
    [1, 9, 676],
    [1, 9, 677],
    [1, 138, 675,
     0, 675],
    [",", 678,
     0, -1],
    [1, 9, 679],
    ["&", 680,
     "=", 681,
     3, "keyword", e[51], 681],
    [1, 9, 682],
    [1, 9, 677],
    [1, 138, 681,
     0, 681],
    [3, "qualifier def", e[19], 684],
    [1, 715, 685,
     0, 685],
    [1, 9, 686],
    ["::", -1],
    [1, 246, 688,
     0, -1],
    [1, 9, 689],
    [1, 259, 690,
     0, 691],
    [1, 9, 692],
    [1, 9, 693],
    [2, 523, 691, {"name":"ParamList"},
     0, 691],
    [",", 694,
     0, -1],
    [1, 9, 695],
    [1, 246, 696],
    [1, 9, 697],
    [1, 259, 698,
     0, 699],
    [1, 9, 700],
    [1, 9, 693],
    [2, 523, 699, {"name":"ParamList"},
     0, 699],
    [1, 769, 702,
     0, -1],
    [1, 9, 703],
    [",", 704,
     0, -1],
    [1, 9, 705],
    [1, 769, 706],
    [1, 9, 703],
    ["[", 708],
    [1, 9, 709],
    [1, 551, 710,
     "]", -1],
    [1, 9, 709],
    ["{", 712],
    [1, 9, 713],
    [1, 551, 714,
     "}", -1],
    [1, 9, 713],
    ["<", 716],
    [1, 9, 717],
    [e[57], 718,
     ">", -1],
    [1, 715, 719,
     2, 145, 719, {"name":"string","token":"string"},
     /^[^]/, 719],
    [1, 9, 717],
    [1, 246, 721],
    [1, 9, 722],
    [e[58], -1],
    [1, 462, 724,
     1, 479, 725],
    [1, 9, 723],
    [1, 9, 726],
    [e[57], 727,
     0, -1],
    [1, 345, 728],
    [1, 9, 726],
    [1, 246, 730],
    [1, 9, 731],
    [e[58], -1],
    [3, "meta", e[19], 733],
    [1, 715, 734,
     0, 734],
    [1, 9, 735],
    ["::", -1],
    [3, "keyword", e[30], 737,
     3, "keyword", e[31], 737,
     3, "keyword", e[32], 737,
     3, "def", [0, [7, "localConstructorAhead"], /^\~?/, /^[a-zA-Z¡-￿_]/, /^[a-zA-Z¡-￿_0-9]*/], 740,
     1, 246, 738],
    [1, 9, 736],
    [1, 9, 739],
    [1, 781, 740],
    [1, 9, 741],
    [2, 271, -1, {"name":"FunctionDef"},
     1, 370, 742,
     ":", 743,
     "[", 744,
     0, 742,
     3, "meta", e[17], 745],
    [1, 9, 746],
    [1, 9, 747],
    [1, 9, 748],
    [1, 9, 749],
    [";", -1],
    [3, "number", e[23], 742],
    [3, "number", e[23], 750,
     0, 750],
    [2, 341, 751, {"name":"ParenTokens"},
     0, 751],
    [1, 9, 752],
    [1, 9, 753],
    ["]", 742],
    [/^\;?/, -1],
    [3, "keyword", e[28], 755,
     0, 757],
    [1, 9, 756],
    [2, 380, 757, {"name":"TemplateArgs"}],
    [1, 9, 758],
    [3, "keyword", e[24], 759,
     3, "keyword", e[21], 759],
    [1, 9, 760],
    [3, "type def", e[19], 761],
    [1, 9, 762],
    [3, "operator", "=", 763,
     0, -1],
    [1, 9, 764],
    [1, 138, -1,
     3, "number", e[23], -1],
    [3, "type qualifier", e[19], 766],
    [1, 715, 767,
     0, 767],
    [1, 9, 768],
    ["::", -1],
    [1, 374, 770,
     2, 566, 771, {"name":"fieldName","token":"property"}],
    [1, 9, 769],
    [1, 9, 772],
    ["(", 773,
     "{", 774],
    [1, 9, 775],
    [1, 9, 776],
    [1, 512, 777],
    [1, 512, 778],
    [1, 9, 779],
    [1, 9, 780],
    [")", -1],
    ["}", -1],
    [0, 782,
     "(", 789],
    [e[59], 783,
     1, 537, 784],
    [1, 9, 782],
    [1, 9, 785],
    ["[", 786,
     0, -1],
    [1, 9, 787],
    ["]", 788],
    [1, 9, 785],
    [1, 9, 790],
    [1, 781, 791],
    [1, 9, 792],
    [")", -1]
  ];
  var start = 0;
  var token = 5;

  var cpp = /*#__PURE__*/Object.freeze({
    nodes: nodes,
    start: start,
    token: token
  });

  function getScope(context, scopes) {
    for (var cx = context; cx; cx = cx.parent)
      { if (scopes.indexOf(cx.name) > -1) { return cx } }
  }
  function isLocal(context, name) {
    for (var cx = context; cx; cx = cx.parent)
      { if (cx.locals && cx.locals.indexOf(name) > -1) { return true } }
    return false
  }
  function isLocalType(context, name) {
    for (var cx = context; cx; cx = cx.parent)
      { if (cx.localTypes && cx.localTypes.indexOf(name) > -1) { return true } }
    return false
  }

  var varRE = /(^|\s)variable($|\s)/;

  function markLocals(type, scopes, stream, state) {
    if (type == "def") {
      var scope = getScope(state.context, scopes), name = stream.current();
      if (scope) {
        if (!scope.locals) { scope.locals = []; }
        if (scope.locals.indexOf(name) == -1) { scope.locals.push(name); }
        if (state.context.name != "funcName") { return "def local" }
      }
    } else if (varRE.test(type) && !/qualified/.test(type) &&
               isLocal(state.context, stream.current())) {
      type = type.replace(varRE, "$1variable-2$2");
    }
    return type
  }

  var typeRE = /(^|\s)type($|\s)/;

  function markTypeLocals(type, scopes, stream, state) {
    if (type == "type def") {
      var scope = getScope(state.context, scopes);
      if (scope) {
        if (!scope.localTypes) { scope.localTypes = []; }
        scope.localTypes.push(stream.current());
      }
    } else if (typeRE.test(type) && !/qualifie[rd]/.test(type) &&
               isLocalType(state.context, stream.current())) {
      type += " local";
    }
    return type
  }

  function hasSubStatement(context) {
    var m = /^(if|for|do|while)\b/.exec(context.startLine.slice(context.startPos));
    return m && m[1]
  }

  function isSwitch(context) {
    return context && context.name == "Statement" &&
      /^switch\b/.test(context.startLine.slice(context.startPos))
  }

  function isLabel(text) {
    return text && /^\s*(case|default)\b/.test(text)
  }

  function aligned(cx) {
    return !/^\s*((\/\/.*)?$|.*=>)/.test(cx.startLine.slice(cx.startPos + 1))
  }

  var bracketed = {
    Block: "}", BlockOf: "}", ClassBody: "}", AnnotationTypeBody: "}", ObjectLiteral: "}", EnumBody: "}", ObjType: "}",
    ArrayInitializer: "}", NamespaceBlock: "}", BraceTokens: "}",
    ArrayLiteral: "]", BracketTokens: "]", TupleType: "]",
    ParamList: ")", SimpleParamList: ")", ArgList: ")", ParenExpr: ")", CondExpr: ")", ForSpec: ")", ParenTokens: ")",
    TypeParams: ">", TypeArgs: ">", TemplateArgs: ">", TemplateParams: ">"
  };

  var blockish = ["Block", "NamespaceBlock", "ClassBody", "AnnotationTypeBody", "BlockOf", "EnumBody"];

  var statementish = ["Statement", "ObjectMember", "ClassItem", "EnumConstant", "AnnotationTypeItem", "ArgExpr", "StatementMaybeOf", "NewExpr"];

  function baseIndent(cx, config) {
    for (var startLine = cx.startLine;; cx = cx.parent) {
      if (cx.name == "CondExpr")
        { return CodeMirror.countColumn(cx.startLine, cx.startPos + 1, config.tabSize) }
      if (statementish.indexOf(cx.name) > -1 && /(^\s*|[\(\{\[])$/.test(cx.startLine.slice(0, cx.startPos)))
        { return CodeMirror.countColumn(cx.startLine, cx.startPos, config.tabSize) }
      if (!cx.parent || cx.parent.startLine != startLine)
        { return CodeMirror.countColumn(cx.startLine, null, config.tabSize) }
    }
  }

  function findIndent(cx, textAfter, config) {
    if (!cx) { return 0 }
    if (cx.name == "string" || cx.name == "comment") { return CodeMirror.Pass }

    var brack = bracketed[cx.name];
    var closed = textAfter && textAfter.charAt(0) == brack;
    if (brack && config.align !== false && aligned(cx))
      { return CodeMirror.countColumn(cx.startLine, cx.startPos, config.tabSize) + (closed ? 0 : 1) }

    if (brack && blockish.indexOf(cx.name) > -1) {
      var parent = cx.parent;
      if (parent && parent.name == "Statement" && parent.parent &&
          parent.parent.name == "Statement" && hasSubStatement(parent.parent))
        { parent = parent.parent; }
      var base$1 = statementIndent(parent, config);

      if (closed || cx.name == "NamespaceBlock") { return base$1 }
      if (/^(public|private|protected)\s*:/.test(textAfter)) { return base$1 + 1 }
      if (isSwitch(cx.parent) && !isLabel(textAfter)) { return base$1 + 2 * config.indentUnit }
      return base$1 + config.indentUnit
    }

    var base = baseIndent(cx, config.tabSize);
    if (brack) {
      if (closed && brack != ")") { return base }
      return base + config.indentUnit * (brack == ")" || brack == ">" ? 2 : 1)
    } else if (statementish.indexOf(cx.name) > -1) {
      if (hasSubStatement(cx)) { return base + config.indentUnit; }
      return base + 2 * config.indentUnit
    } else if (cx.name == "Alternative") {
      base = baseIndent(cx.parent, config.tabSize);
      if (!textAfter || /^else\b/.test(textAfter)) { return base }
      return base + config.indentUnit
    } else if (cx.name == "ArrowRest") {
      return base + config.indentUnit
    } else if (cx.name == "InitializerList") {
      return base + 2
    } else if (cx.name == "ThrowsClause" && !/throws\s*$/.test(cx.startLine.slice(cx.startPos))) {
      return base + 2 * config.indentUnit
    } else {
      return findIndent(cx.parent, textAfter, config)
    }
  }

  function statementIndent(cx, config) {
    for (;; cx = cx.parent) {
      if (!cx) { return 0 }
      if (statementish.indexOf(cx.name) > -1 || (cx.parent && bracketed[cx.parent.name]))
        { return CodeMirror.countColumn(cx.startLine, null, config.tabSize) }
    }
  }

  function indent(state, textAfter, line, config) {
    var top = state.context && state.context.name;
    if (top == "DeclType" || top == "BeforeStatement" || top == "AnnotationHead" || top == "Template")
      { return statementIndent(state.context, config) }

    if ((top == "doccomment.braced" || top == "doccomment.tagGroup") && !/^[@*]/.test(textAfter))
      { return CodeMirror.countColumn(state.context.startLine, null, config.tabSize) + 2 * config.indentUnit }

    return findIndent(state.contextAt(line, line.length - textAfter.length), textAfter, config)
  }

  function constructorAhead(line, pos) {
    var match = /^(\w+)::~?(\w+)/.exec(line.slice(pos));
    return match && match[1] == match[2]
  }

  function localConstructorAhead(line, pos, cx) {
    var ahead = /^~?(\w+)\s*\(/.exec(line.slice(pos));
    if (!ahead) { return false }
    while (cx.name != "Statement") { cx = cx.parent; }
    var className = /\bclass\s+(\w+)/.exec(cx.startLine.slice(cx.startPos));
    return className ? className[1] == ahead[1] : false
  }

  var rawStringOpen = /R"(.*?)\(/g;

  function rawStringContinues(line, pos, cx) {
    rawStringOpen.lastIndex = cx.startPos;
    var closing = ")" + rawStringOpen.exec(cx.startLine)[1] + '"';
    return pos < closing.length - 1 || line.slice(pos - closing.length + 1, pos + 1) != closing
  }

  var scopes = ["Block", "FunctionDef"], typeScopes = ["Template"];

  var CppMode = (function (superclass) {
    function CppMode(conf) {
      superclass.call(this, cpp, {
        predicates: {constructorAhead: constructorAhead, localConstructorAhead: localConstructorAhead, rawStringContinues: rawStringContinues}
      });
      this.conf = conf;
    }

    if ( superclass ) CppMode.__proto__ = superclass;
    CppMode.prototype = Object.create( superclass && superclass.prototype );
    CppMode.prototype.constructor = CppMode;

    CppMode.prototype.token = function token$$1 (stream, state) {
      return markTypeLocals(markLocals(superclass.prototype.token.call(this, stream, state), scopes, stream, state), typeScopes, stream, state)
    };

    CppMode.prototype.indent = function indent$1 (state, textAfter, line) {
      if (textAfter.charAt(0) == "#") { return 0 }
      return indent(state, textAfter, line, this.conf)
    };

    return CppMode;
  }(CodeMirror.GrammarMode));

  CppMode.prototype.electricInput = /^\s*(?:case .*?:|(?:public|private|protected|default):|\{\}?|\})$/;
  CppMode.prototype.blockCommentStart = "/*";
  CppMode.prototype.blockCommentEnd = "*/";
  CppMode.prototype.blockCommentContinue = " * ";
  CppMode.prototype.lineComment = "//";
  CppMode.prototype.fold = "brace";

  CodeMirror.defineMode("google-cpp", function (conf) { return new CppMode(conf); });

})));
