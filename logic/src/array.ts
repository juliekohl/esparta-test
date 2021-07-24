class ArraySolution {
    /**
     * Get all unique values
     * 
     * @param value 
     * @param index 
     * @param self 
     * @returns boolean
     */
    private getUnique(value, index, self): boolean {
        return self.indexOf(value) === index;
    }

    /**
     * Get length of same elements in an array
     * 
     * @param array
     * @returns object
     */
    private getArrayEqualElementsLength(array: number[]): {} {
        const counts = {};
        array.forEach(function(x) {
            counts[x] = (counts[x] || 0) + 1;
        });
        return counts;
    }

    /**
     * The solution
     * 
     * @param array 
     * @returns null | number | number[]
     */
    public solution(array: number[]): null | number | number[] {
        const uniques =  array.filter(this.getUnique);
        const uniquesLength = this.getArrayEqualElementsLength(array);

        const unpaireds: number[] = [];
        uniques.forEach(unique => {
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
    }
}

console.log('\n','Challenge: array','\n');

const arraySolution = new ArraySolution();

let arrayExample = [9, 3, 9, 3, 9, 7, 9];
console.log(`[${arrayExample}]`, arraySolution.solution(arrayExample)); // 7

arrayExample = [9, 3, 9, 3, 9, 7, 9, 12];
console.log(`[${arrayExample}]`, arraySolution.solution(arrayExample)); // [7, 12]

arrayExample = [9, 3, 9, 3, 9, 7, 9, 7];
console.log(`[${arrayExample}]`, arraySolution.solution(arrayExample)); // null
