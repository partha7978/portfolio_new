export default {
    name: 'header',
    title: 'Header',
    type: 'document',
    fields: [
        {
            name: 'mainName',
            title: 'Main Name',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string',
        },
        {
            name: 'headerMainImage',
            title: 'Profile Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
    ],
};