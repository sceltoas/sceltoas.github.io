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
