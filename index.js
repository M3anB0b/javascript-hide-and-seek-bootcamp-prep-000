function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('div.target')
}

function increaseRankBy(n) {
  var lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')

  for (let i = 0; i < lis.length; i++) {
    var int = parseInt(lis[i].innerHTML,10)
    lis[i].innerHTML = (int + n).toString()
  }
}

function deepestChild() {
    var lis = document.getElementById("grand-node").querySelectorAll('div div div')
    //var lis = document.querySelectorAll('grand-node')
    //var lis = document.querySelector('#grand-node div div div div')
    /*while (lis[i].innerHTML !== "boo!") {

    }*/
    for (let i = 0; i < lis.length; i++) {
      if(i === lis.length - 1) {
      //if(lis[i].innerHTML === "boo!")
      return lis[i]
      //return "boo!"
    }

}
}
