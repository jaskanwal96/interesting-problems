class Problem {
    
    rowWithMax1s(arr, n, m){
        let columnIterator = m - 1;
        let rowIterator = 0;
        let max1s = -1;
        while (columnIterator >= 0 && arr[rowIterator][columnIterator] !== 0){
            columnIterator--;
            max1s = 0;
        }

        if (columnIterator === -1) {
            return 0;
        }
        
        
        if (max1s === 0) {
            ++columnIterator;
        }
        ++rowIterator;
        
        while (rowIterator < n) {
            while (columnIterator >= 0 && 
                arr[rowIterator][columnIterator] === 1) {
                --columnIterator;
                max1s = rowIterator;
            }
            rowIterator++;
        }
        return max1s;
    }
}

module.exports = Problem;