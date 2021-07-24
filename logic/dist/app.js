var ArraySolution = /** @class */ (function () {
    function ArraySolution() {
    }
    /**
     * Get all unique values
     * @param value
     * @param index
     * @param self
     * @returns boolean
     */
    ArraySolution.prototype.getUnique = function (value, index, self) {
        return self.indexOf(value) === index;
    };
    /**
     * Get length of same elements in an array
     * @param array
     * @returns
     */
    ArraySolution.prototype.getArrayEqualElementsLength = function (array) {
        var counts = {};
        array.forEach(function (x) {
            counts[x] = (counts[x] || 0) + 1;
        });
        return counts;
    };
    /**
     * The solution
     * @param array
     * @returns
     */
    ArraySolution.prototype.solution = function (array) {
        var uniques = array.filter(this.getUnique);
        var uniquesLength = this.getArrayEqualElementsLength(array);
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
var DistinctSolution = /** @class */ (function () {
    function DistinctSolution() {
    }
    DistinctSolution.prototype.getUnique = function (value, index, self) {
        return self.indexOf(value) === index;
    };
    DistinctSolution.prototype.solution = function (array) {
        var uniques = array.filter(this.getUnique);
        return uniques.length;
    };
    return DistinctSolution;
}());
console.log('\n', 'Challenge: distinct', '\n');
var distinctSolution = new DistinctSolution();
var distinctExample = [2, 1, 1, 2, 3, 1];
console.log("[" + distinctExample + "]", distinctSolution.solution(distinctExample)); // 3
distinctExample = [1, 1, 2, 2];
console.log("[" + distinctExample + "]", distinctSolution.solution(distinctExample)); // 2
distinctExample = [1, 1, 2, 2, 3, 3, 4, 4];
console.log("[" + distinctExample + "]", distinctSolution.solution(distinctExample)); // 4
distinctExample = [1, 1, 2, 2, 3, 3, 4, 4, -1000000];
console.log("[" + distinctExample + "]", distinctSolution.solution(distinctExample)); // 5
distinctExample = [1, 1, 2, 2, 3, 3, 4, 4, -1000000, -1000000];
console.log("[" + distinctExample + "]", distinctSolution.solution(distinctExample)); // 5
distinctExample = [1, 1, 2, 2, 3, 3, 4, 4, -1000000, -1000000, 1000000];
console.log("[" + distinctExample + "]", distinctSolution.solution(distinctExample)); // 6
distinctExample = [1, 1, 2, 2, 3, 3, 4, 4, -1000000, -1000000, 1000000, 1000000];
console.log("[" + distinctExample + "]", distinctSolution.solution(distinctExample)); // 6
