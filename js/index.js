$(document).ready(function () {
console.log("ds");
makeTemplates();
console.log(arr);
console.log(alphabets);
    render('.customer','entryNames', arr.data);
    render('.alphabet','entryAlphabet',alphabets.data);
})
