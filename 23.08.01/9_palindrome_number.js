// Given an integer x, return true if x is a palindrome, and false otherwise.
var isPalindrome = function(x){
    if(x<0 && x%10==0){
        return false;
    }
    let xx = x;
    let answer = 0;
    while(x>0){
        remainder = x%10;
        answer = answer*10 + remainder;
        x = Math.floor(x/10);
    }
    return xx===answer;
};
