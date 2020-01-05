const ansatteliste = require('../ansatte');
const fs = require('fs');
const path = require('path');

const fileExists = path => {
    try {
        fs.accessSync(path, fs.constants.F_OK);
        return true;
    } catch (e) {
        throw e;
    }
};

const errors = [];

const checkIfProfilePageIsGenerated = ansatt => {
    try {
        fileExists(
            path.join(
                __dirname,
                '../../public/ansatte/' + ansatt + '/index.html'
            )
        );
    } catch (e) {
        errors.push({
            message: `Profilen til ${ansatt} ble ikke generert under /public/ansatte`,
            error: e,
        });
    }
};

const checkIfAnsattMugshotIsAdded = ansatt => {
    try {
        const profilePicture = path.join(
            __dirname,
            '../../src/images/mugshots/' + ansatt + '.jpg'
        );
        fileExists(profilePicture);
    } catch (e) {
        errors.push({
            message: `Bilde av ${ansatt} finnes ikke i mappen src/images/mugshots/. Dette er viktig for at Gatsby skal finne bilde til den ansatte under byggeprosessen.`,
            error: e,
        });
    }
};

const checkAllAnsatte = () => {
    Object.keys(ansatteliste).forEach(ansatt => {
        checkIfProfilePageIsGenerated(ansatt);
        checkIfAnsattMugshotIsAdded(ansatt);
    });
};

checkAllAnsatte();

if (errors.length > 0) {
    console.error(`Found ${errors.length} error(s):`);
    errors.forEach(error => console.error(`[ERROR] - ${error.message}`));

    process.exit(1);
} else {
    process.exit(0);
}
