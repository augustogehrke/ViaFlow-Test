'use strict'

const { test, trait } = use('Test/Suite')('Itiniraries Test')
const User = use('App/Models/User')

trait('Test/ApiClient')

test('Busca de etinerários /itineraries', async ({ client }) => {
  const response = await client.get('/itineraries').end()

  response.assertStatus(200)
}).timeout(35000)
