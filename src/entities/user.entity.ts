import {Attribute, Entity, AutoGenerateAttribute, INDEX_TYPE} from '@typedorm/common';
import {AUTO_GENERATE_ATTRIBUTE_STRATEGY} from '@typedorm/common';

@Entity({
  name: 'user', // name of the entity that will be added to each item as an attribute
  // primary key
  primaryKey: {
    partitionKey: 'USER#{{id}}',
    sortKey: 'USER#{{id}}',
  },
  indexes: {
    // specify GSI1 key - "GSI1" named global secondary index needs to exist in above table declaration
    GSI1: {
      partitionKey: 'USER#{{id}}',
      sortKey: 'USER#{{id}}#STATUS#{{status}}',
      type: INDEX_TYPE.GSI,
    },
  },
})
export class User {
  @AutoGenerateAttribute({
    strategy: AUTO_GENERATE_ATTRIBUTE_STRATEGY.UUID4,
  })
  id: string;

  @Attribute()
  name: string;



  @Attribute()
  status: string


}