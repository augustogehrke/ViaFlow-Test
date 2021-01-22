'use strict'

const { test } = use('Test/Suite')('APIS')
const DataPoaApi = use('Services/DataPoaApi')

test('API DataPoa online', async ({ assert }) => {
  const infos = await DataPoaApi.searchLines()
  assert.isArray(infos)
}).timeout(5000)
