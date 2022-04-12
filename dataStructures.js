// level {1/2/3}
// level 2.1
function removeEvens(numbers) {
    return numbers.filter(n => n % 2 !== 0);
}

const oddNumbers = removeEvens([1, 3, 4, 6, 7, 8]);
console.log(oddNumbers);

//level 2.2
<script>

function upper(str) {

    var N = str.length;

    for (var i = 0; i < N; i++) {
    if (
        str[i] === "a" ||
        str[i] === "e" ||
        str[i] === "i" ||
        str[i] === "o" ||
        str[i] === "u"
    ) {
        document.write(str[i].toUpperCase());
    } else {
        document.write(str[i]);
    }
    }
}


var str = "Elie";
upper(str);

</script>

//level 2.3

<script>

function max(input) {
    if (toString.call(input) !== "[object Array]")  
      return false;
 return Math.max.apply(null, input);
   }

console.log(max([1, 3, 4, 6, 7, 8, 2, 5]));


</script>
