import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  createRecord (store, type, record) {
    const api = this.get('host');
    const serialized = this.serialize(record, { includeId: true });
    const listId = serialized.list_id;
    const url = `${api}/lists/${listId}/items`;
    const data = { item: serialized };

    return this.ajax(url, 'POST', { data });
  }
});
