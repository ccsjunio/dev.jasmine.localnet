function Calculator(){

  this.total = 0;

}

Calculator.prototype.add = function(number){
  return this.total += number;
}

Calculator.prototype.subtract = function(number){
  return this.total -= number;
}

Calculator.prototype.multiply = function(number){
  return this.total *= number;
}

Calculator.prototype.divide = function(number){
  if(number === 0){
    throw new Error('Cannot divide by zero');
  }
  return this.total /= number;
}

Object.defineProperty(Calculator.prototype, 'version', {
  get: function(){
    return fetch('https://gist.githubusercontent.com/ccsjunio/8e021fe561cdb2c1e2197433f15465fc/raw/b67a9db97ca4f6cc54615aa514abad98de81a688/simple-calculator')
    .then(function(result){
      return result.json();
    })
    .then(function(json){
      return json.version;
    })
  },
  enumerable: true,
  configurable: true
});
