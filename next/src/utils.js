export const createMetadata = ({ image, title, description }) => {
    return [
        {
            name: 'google-site-verification',
            content: 'YqE7LSusm4d7IOMw6s3lkGnb9ToxmJDvnJWqNKUxZg4',
        },
        {
            property: 'og:title',
            content: title,
        },
        {
            property: 'og:description',
            content: description,
        },
        {
            property: 'og:image',
            content: image,
        },
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
            content: image,
        },
    ];
};

export function showAvailableConsultantsFirst(a, b) {
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
