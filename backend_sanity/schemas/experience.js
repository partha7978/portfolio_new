export default {
    name: 'experience',
    title: 'Experience',
    type: 'document',
    fields: [
        {
            name:'companyName',
            title:'CompanyName',
            type:'string'
        },
        {
            name: 'jobTitle',
            title: 'JobTitle',
            type: 'string',
        },
        {
            name: 'companyImage',
            title: 'CompanyImage',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name:'desc',
            title:'Desc',
            type:'string'
        },
        {
           name:'startDate',
           title:'StartDate',
           type:'date' 
        },
        {
            name:'endDate',
            title:'EndDate',
            type:'date'
        },
        {
            name: 'skills',
            title: 'Skills',
            type: 'array',
            of: [
                {
                    name: 'skill',
                    title: 'Skill',
                    type: 'image',
                    options: {
                        hotspot: true,
                    }
                }
            ]
        }
    ]
}