const compare = (str1, str2) => {
  const map1 = new Map();
  const map2 = new Map();

  str1
    .trim()
    .toLowerCase()
    .split("")
    .map((letter) => {
      map1[letter] ? map1[letter]++ : (map1[letter] = 1);
    });

  str2
    .trim()
    .toLowerCase()
    .split("")
    .map((letter) => {
      map2[letter] ? map2[letter]++ : (map2[letter] = 1);
    });

  if (str1.length !== str2.length) {
    return false;
  }

  const map1keys = Object.keys(map1);
  const map2keys = Object.keys(map2);

  for (let i = 0; i < map1keys.length; i++) {
    if (!map2keys.includes(map1keys[i])) {
      return false;
    }
    if (map1[map1keys[i]] !== map2[map1keys[i]]) {
      return false;
    }
  }

  return true;
};

console.log(compare("test", "text"));
console.log(compare("Mom", "omm"));
console.log(compare("asd", "Sad"));
console.log(compare("asd", "ssaadd"));
console.log(compare("ssaadd", "asd"));