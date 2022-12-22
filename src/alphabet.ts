export const alphabet = [
  "a",
  "á",
  "b",
  "c",
  "cs",
  "d",
  "dz",
  "dzs",
  "e",
  "é",
  "f",
  "g",
  "gy",
  "h",
  "i",
  "í",
  "j",
  "k",
  "l",
  "ly",
  "m",
  "n",
  "ny",
  "o",
  "ó",
  "ö",
  "ő",
  "p",
  "q",
  "r",
  "s",
  "sz",
  "t",
  "ty",
  "u",
  "ú",
  "ü",
  "ű",
  "v",
  "w",
  "x",
  "y",
  "z",
  "zs",
];

const map = new Map();
alphabet.map((l) => {
  let m = l.charAt(0).toUpperCase() + l.slice(1);

  switch (l) {
    case "á":
      m = "AA";
      break;
    case "é":
      m = "EE";
      break;
    case "í":
      m = "II";
      break;
    case "ó":
      m = "OO";
      break;
    case "ö":
      m = "OE";
      break;
    case "ő":
      m = "OEOE";
      break;
    case "ú":
      m = "UU";
      break;
    case "ü":
      m = "UE";
      break;
    case "ű":
      m = "UEUE";
      break;
  }

  map.set(l, m);
});
export const alphabetMap = map;
