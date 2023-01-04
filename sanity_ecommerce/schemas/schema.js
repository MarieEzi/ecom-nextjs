import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

import product from './product';
import banner from './banner';
import faq from './faq';
import helparticle from './helparticle';
import search from './search'
import sidebar from './sidebar'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([ product, banner, faq, helparticle, search, sidebar ]),
})
  