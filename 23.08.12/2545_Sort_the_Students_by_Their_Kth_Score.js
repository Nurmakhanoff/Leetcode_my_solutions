/**
 * @param {number[][]} score
 * @param {number} k
 * @return {number[][]}
 */
var sortTheStudents = function(score, k) {
    for(let j=0; j<score.length; j++){
        let min = j;
        for(let a=j+1; a<score.length; a++){
            if(score[a][k] > score[min][k]){
                min = a;
            }
        }
        if(min != j){
            let temp = score[j];
            score[j] = score[min];
            score[min] = temp;
        }
    }
    return score;
          
};


/*
selection sort i used.
bubble sort is slow.
merge sort needs to divide half by half, not the every case may be that.
insertion sort may be better, but i am not sure
quicksort would be better for bigger arrays.
*/
