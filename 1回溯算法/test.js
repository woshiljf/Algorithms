const obj = {
  a: 1,
  b: 2,
  c: 3,
  e: 4,
  f: 5,
}

const handle = data => {

  var obj = {}
  var keys = Object.keys(data);

  for (let i = 0; i < keys.length; i++) {

    var key = keys[i]

    if (key === 'a' || key === 'b') continue

    obj[key] = data[key]


  }
  return obj


}

var res = handle(obj)

console.log(res);