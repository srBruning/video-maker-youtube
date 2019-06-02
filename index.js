const readline  = require('readline-sync');

function start(){
    let content = {};

    content.searchTerm = askAndReturnSearchTerm();
    content.prefix = askAndReturnPrefix();

    function askAndReturnSearchTerm(){
        return readline.question('Type a winkipedia search term: ');
    }

    function askAndReturnPrefix(){
        const prefixes = ['Who is', 'What is', 'The history of'];
        selectedPrefixIndex = readline.keyInSelect(prefixes);
        return prefixes[selectedPrefixIndex];
    }

    console.log(content);

}


start();