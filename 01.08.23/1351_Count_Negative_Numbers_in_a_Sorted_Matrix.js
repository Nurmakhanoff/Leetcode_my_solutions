// Given a m x n matrix grid which is sorted in non-increasing order both row-wise and column-wise, return the number of negative numbers in grid.
var countNegatives = function(grid) {
    let count = 0;
    const m = grid.length;
    const n = grid[0].length;
    
    for(let i = 0; i < m; i++){
        let left = 0;
        let right = n - 1;

        while(left <= right){
            const mid = Math.floor((left + right) / 2);
            if(grid[i][mid] < 0){
                right = mid - 1;
            } 
            else{
                left = mid + 1;
            }
        }
        count += n - left;
    }
  return count;
};
