export const createMetadata = ({ image, title, description }) => {
    return [
        {
            name: 'title',
            content: title,
        },
        {
            name: 'description',
            content: description,
        },
        {
            name: 'image',
            content: `https://www.scelto.no${image}`,
        },
        {
            name: 'og:title',
            content: title,
        },
        {
            name: 'og:description',
            content: description,
        },
        {
            name: 'og:image',
            content: `https://www.scelto.no${image}`,
        },
    ];
};


export function showAvailableConsultantsFirst(a, b) {
    const employeeA = a;
    const employeeB = b;

    let employeeAScore = generateEmployeeSortScore(employeeA);
    let employeeBScore = generateEmployeeSortScore(employeeB);

    return employeeAScore - employeeBScore;
};

function generateEmployeeSortScore(employee) {
    let score = 0;
    if (employee.isConsultant === false) {
        score = 99999999;
    } else {
        score = 1;

        if (employee.endOfContract) {
            const endOfContractAsNumber = Number.parseInt(employee.endOfContract.replace(/-/gi, ''));
            if (!Number.isNaN(endOfContractAsNumber))
                score = endOfContractAsNumber;
        }
    }
    return score;
}
