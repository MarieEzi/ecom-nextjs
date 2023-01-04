export default  {
    name: 'sidebar',
    title: 'Sidebar',
    type: 'document',
    fields: [
      
          {
            name: 'name',
            title: 'Name',
            type: 'string',
          },
          {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
              source: 'name',
              maxLength: 90,
            }
          },
          {
            name: 'image',
            title: 'Image',
            type: 'array',
            of: [{ type: 'image' }],
            options: {
              hotspot: true,
            }
          },
        //   Only show the description field if the title field is truthy:
          {
            name: 'description',
            type: 'string',
            title: 'Description',
            hidden: ({document}) => !document?.title
          }
        ],
       
        }
    
