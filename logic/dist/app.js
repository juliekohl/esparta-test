var ArraySolution = /** @class */ (function () {
    function ArraySolution() {
    }
    ArraySolution.prototype.getUnique = function (value, index, self) {
        return self.indexOf(value) === index;
    };
    ArraySolution.prototype.getArrayElementsLength = function (array) {
        var counts = {};
        array.forEach(function (x) {
            counts[x] = (counts[x] || 0) + 1;
        });
        return counts;
    };
    ArraySolution.prototype.solution = function (array) {
        var uniques = array.filter(this.getUnique);
        var uniquesLength = this.getArrayElementsLength(array);
        var unpaireds = [];
        uniques.forEach(function (unique) {
            if (uniquesLength[unique] === 1)
                unpaireds.push(unique);
        });
        switch (unpaireds.length) {
            case 0:
                return null;
            case 1:
                return unpaireds[0];
            default:
                return unpaireds;
        }
    };
    return ArraySolution;
}());
console.log('\n', 'Challenge: array', '\n');
var arraySolution = new ArraySolution();
var arrayExample = [9, 3, 9, 3, 9, 7, 9];
console.log("[" + arrayExample + "]", arraySolution.solution(arrayExample)); // 7
arrayExample = [9, 3, 9, 3, 9, 7, 9, 12];
console.log("[" + arrayExample + "]", arraySolution.solution(arrayExample)); // [7, 12]
arrayExample = [9, 3, 9, 3, 9, 7, 9, 7];
console.log("[" + arrayExample + "]", arraySolution.solution(arrayExample)); // null
