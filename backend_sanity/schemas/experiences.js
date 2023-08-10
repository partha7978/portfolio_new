export default{
    name:'education',
    title:'Education',
    type: 'document',
    fields:[
        {
            name:'year',
            title:'Year',
            type:'string'
        },
        {
            name:'institution',
            title:'Institution',
            type:'string'
            // of:[{ type:'workExperience'}]
        },
        {
            name:'degree',
            title:'Degree',
            type:'string'
        },
        {
            name: 'specialization',
            title: 'Specialization',
            type: 'string'
        },
        {
            name:'marks',
            title:'Marks',
            type:'string'
        }
    ]
}