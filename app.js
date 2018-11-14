var fs = require('fs');
var numOfRow;
var count=0;

var input = fs.createReadStream('./flower.txt');

  readLines(input, listStartWith_S);
 
var contents = fs.readFileSync('./flower.txt')
function readLines(input, listStartWith_S) {
    var remaining = '';
  
    input.on('data', function(data) {
      remaining += data;
      var index = remaining.indexOf('\n');
      while (index > -1) {
        var line = remaining.substring(0, index);
        remaining = remaining.substring(index + 1);
        listStartWith_S(line);

        index = remaining.indexOf('\n');
      }
      countNotStartWith_s();
    });
  }

  function numberOfRow (){
     var res=contents.toString().split('\n').length;
     console.log("the number of rows is :"+res+"\n");
     numOfRow=res;
     return  numOfRow;
}
  
  function listStartWith_S(data) {
  var v = data.startsWith('S'||'s');
  
        if(v) 
        {
            console.log('Line: ' + data);
           
            count++;
        } 


        return count;
  }

  
   function listStartWith_A(data) {
  var v = data.startsWith('A');
        if(v)  console.log('Line: ' + data);
  }
  function countNotStartWith_s() {
   var result=numOfRow-count;
   console.log("the number of Flow that not start with letter 'S' is :"+ result+"\n");
  }

  function listOfNameLengthIS_5(data) {
    var v = data.length
     if(v==5)  console.log('length 5: ' + data);
  }
  numberOfRow ();
