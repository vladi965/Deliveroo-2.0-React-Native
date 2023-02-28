import createSchema from 'part:@sanity/base/schema-creator'
import SchemaType  from 'all:part:@sanity/base/schema-type'

import category from './category'
import restaurant from './restaurant'
import dish from './dish'

export default createSchema({
    name: 'default',

    types: schemaType.concat([
        restaurant,
        category,
        dish,
    ]),
})