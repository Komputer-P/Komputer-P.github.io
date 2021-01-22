var a = function() {
  console.log("Anonymous");
}

function showfunc(callback) {
  callback();
}

showfunc(a);
