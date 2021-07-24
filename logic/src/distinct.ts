class DistinctSolution {
    /**
     * Get all unique values
     * @param value 
     * @param index 
     * @param self 
     * @returns boolean
     */
    private getUnique(value, index, self): boolean {
        return self.indexOf(value) === index;
    }

    /**
     * The solution
     * @param array 
     * @returns number
     */
    public solution(array: number[]): number {
        const uniques =  array.filter(this.getUnique);
        return uniques.length;
    }
}

console.log('\n','Challenge: distinct','\n');

const distinctSolution = new DistinctSolution();

let distinctExample = [2, 1, 1, 2, 3, 1];
console.log(`[${distinctExample}]`, distinctSolution.solution(distinctExample)); // 3

distinctExample = [1, 1, 2, 2];
console.log(`[${distinctExample}]`, distinctSolution.solution(distinctExample)); // 2

distinctExample = [1, 1, 2, 2, 3, 3, 4, 4];
console.log(`[${distinctExample}]`, distinctSolution.solution(distinctExample)); // 4

distinctExample = [1, 1, 2, 2, 3, 3, 4, 4, -1000000];
console.log(`[${distinctExample}]`, distinctSolution.solution(distinctExample)); // 5

distinctExample = [1, 1, 2, 2, 3, 3, 4, 4, -1000000, -1000000];
console.log(`[${distinctExample}]`, distinctSolution.solution(distinctExample)); // 5

distinctExample = [1, 1, 2, 2, 3, 3, 4, 4, -1000000, -1000000, 1000000];
console.log(`[${distinctExample}]`, distinctSolution.solution(distinctExample)); // 6

distinctExample = [1, 1, 2, 2, 3, 3, 4, 4, -1000000, -1000000, 1000000, 1000000];
console.log(`[${distinctExample}]`, distinctSolution.solution(distinctExample)); // 6
