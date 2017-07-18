//Problem: https://www.hackerrank.com/challenges/save-the-prisoner
//JavaScript
/*
Initial Thoughts:
Since we are moving in a circle we need to the mod of 
S + M with N i.e (S + M - 1) % N. We subtract S + M 
by 1 because S is inclusive. If the equation returns zero
it means the starting prisoner will be the poisoned one 
else whatever ID it returns is the poisoned one.

Time complexity: O(1) 
Space complexity: O(1) 
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

function saveThePrisoner(n, m, s){
    let poisened = (s + m - 1) % n;
    return poisened === 0 ? n : poisened;
}

function main() {
    var t = parseInt(readLine());
    for(var a0 = 0; a0 < t; a0++){
        var n_temp = readLine().split(' ');
        var n = parseInt(n_temp[0]);
        var m = parseInt(n_temp[1]);
        var s = parseInt(n_temp[2]);
        var result = saveThePrisoner(n, m, s);
        process.stdout.write(""+result+"\n");
    }

}
