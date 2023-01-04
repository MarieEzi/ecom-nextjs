export default  {
    name: 'content',
    type: 'array',
    // when adding an item to this list, you'll be given two options:
    of: [
      // add reference to product - reference picker will only show products
      {
        type: 'reference',
        name: 'product',
        to: [{type: 'product'}],
      },
    ],
  }