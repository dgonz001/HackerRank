//Problem: https://www.hackerrank.com/challenges/magic-square-forming
//JavaScript
/*
Initial Thoughts:
There are a limited number of ways a magic
square can be formed, so we can brute-force
check those solutions and choose the one that
it would take the smallest sum to obtain


Time Complexity: O(1) //There are only 9 combos to check no matter the arrangement
Space Complexity: O(1) //No dynamically allocated space
*/
process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    let s = [],
        total = 45,
        pre = [
            [[8, 1, 6], [3, 5, 7], [4, 9, 2]], // 1
            [[6, 1, 8], [7, 5, 3], [2, 9, 4]], // 2
            [[4, 9, 2], [3, 5, 7], [8, 1, 6]], // 3
            [[2, 9, 4], [7, 5, 3], [6, 1, 8]], // 4
            [[8, 3, 4], [1, 5, 9], [6, 7, 2]], // 5
            [[4, 3, 8], [9, 5, 1], [2, 7, 6]], // 6
            [[6, 7, 2], [1, 5, 9], [8, 3, 4]], // 7
            [[2, 7, 6], [9, 5, 1], [4, 3, 8]], // 8
            ];
    for(s_i = 0; s_i < 3; s_i++) {
       s[s_i] = readLine().split(' ');
       s[s_i] = s[s_i].map(Number);
    }
    for(let k = 0; k < 8; k++) {
        let cost = 0;
        for(let i = 0; i < 3; i++) {
            for(var j = 0; j < 3; j++) {
                cost += Math.abs(s[i][j] - pre[k][i][j]);
            };
        };
        total = Math.min(total, cost);
    };
    console.log(total);
}
