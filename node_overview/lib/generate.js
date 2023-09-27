const fs = require('fs');

function generateBadge(license) {

}





function generateReadme(answerObj) {
    const badge = generateBadge(answerObj.license)
    const md = `;
    # ${answerObj.title}
    ## Description
    >${answerObj.description}
    
    ![Dev Profile Image](${answerObj.image})
    `;

    fs.writeFile('./README.md', md.trim(), (err) => {
        if (err) throw err;

        console.log('File created Successfully!');
    });
}

function anotherFunc() {
    console.log('another');
}

module.exports = {
    generateReadme: generateReadme,
    anotherFunc: anotherFunc
};


module.exports = [generateReadme, anotherFunc];