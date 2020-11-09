/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
var ansatte = require('./src/ansatte');
// You can delete this file if you're not using it

function showAvailableConsultantsFirst(a, b) {
    const employeeA = a;
    const employeeB = b;

    let employeeAScore = generateEmployeeSortScore(employeeA);
    let employeeBScore = generateEmployeeSortScore(employeeB);

    return employeeAScore - employeeBScore;
}

function generateEmployeeSortScore(employee) {
    if (employee.isConsultant === false) {
        return 99999999;
    }

    if (employee.endOfContract) {
        const endOfContractAsNumber = Number.parseInt(
            employee.endOfContract.replace(/-/gi, '')
        );
        if (!Number.isNaN(endOfContractAsNumber)) {
            return endOfContractAsNumber;
        }
        return 1;
    }

    return 0;
}

exports.createPages = async ({
    actions: {
        createPage
    }
}) => {
    const sortedAnsatte = Object.keys(ansatte).map(key => ({
        ...ansatte[key],
        key
    })).sort(showAvailableConsultantsFirst);


    createPage({
        path: `/ansatte`,
        component: require.resolve("./src/pages/ansatte/alle-ansatte.jsx"),
        context: {
            ansatte: sortedAnsatte
        },
    });
    createPage({
        path: `/`,
        component: require.resolve("./src/pages/forsiden.jsx"),
        context: {
            ansatte: sortedAnsatte.slice(0, 3)
        },
    });
}