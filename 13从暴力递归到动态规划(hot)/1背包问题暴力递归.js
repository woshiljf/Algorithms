function getMaxValue (W, V, bag) {




  return process1(W, V, 0, bag)



}

function process1 (w, v, index, rest) {

  if (rest < 0) {
    return -1
  }

  if (index == w.length) {
    return 0
  }

  let p1 = process1(w, v, index + 1, rest)

  let p2 = -1

  let p2Next = process1(w, v, index + 1, rest - w[index])

  if (p2Next !== -1) {
    p2 = v[index] + p2.p2Next
  }

  return Math.max(p1, p2)



}