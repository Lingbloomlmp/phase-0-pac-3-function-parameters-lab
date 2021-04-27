function introduction(name) {
<<<<<<< HEAD
    return(`Hi, my name is ${name}.`);
}
function introductionWithLanguage(name, language) {
    return(`Hi, my name is ${name} and I am learning to program in ${language}.`);
}
function introductionWithLanguageOptional(name, language = "JavaScript") {
    return(`Hi, my name is ${name} and I am learning to program in ${language}.`);
=======
    console.log(`Hi, my name is ${name}.`);
}

function introductionWithLanguage(name, language) {
    console.log(`Hi, my name is ${name} and I am learning to program in ${language}.`);
}

function introductionWithLanguageOptional(name, language = "JavaScript") {
    console.log(`Hi, my name is ${name} and I am learning to program in ${language}.`);
>>>>>>> f4bc0e43aa75b0bba5ced0a0f7972f952e0f024a
}