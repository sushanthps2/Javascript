function runProgram(input) {
    var n = Number(input);
    for (var i = 1; i <= n; i++) {
        var result = "* ";
        for (var j = 1; j <= n - 2; j++) {
            if (i == 1)
                result += "* ";
            else
                result += "  ";
        }
        result += "*";
        console.log(result);
    }

}
if (process.env.USERNAME === "getsu") {
    runProgram(`5`);
} else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
        read += input;
    });
    process.stdin.on("end", function () {
        read = read.replace(/\n$/, "");
        read = read.replace(/\n$/, "");
        runProgram(read);
    });
    process.on("SIGINT", function () {
        read = read.replace(/\n$/, "");
        runProgram(read);
        process.exit(0);
    });
}