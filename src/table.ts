import { INDEX_TYPE, Table } from '@typedorm/common';

export const appTable = new Table({
  name: 'my-app-table',
  partitionKey: 'PK',
  sortKey: 'SK',
  indexes: {
    GSI1: {
      partitionKey: 'GSI1PK',
      sortKey: 'GSI1SK',
      type: INDEX_TYPE.GSI,
    },
  },
});


