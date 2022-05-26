function passwordGuess(input) {
let passn = input[0];

if (passn === `s3cr3t!P@ssw0rd`){
    console.log(`Welcome`);
} else {
    console.log(`Wrong password!`);
}


}
passwordGuess([`s3cr3t!`])