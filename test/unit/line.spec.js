'use strict'

const { test, trait } = use('Test/Suite')('Lines Test')
const User = use('App/Models/User')

trait('Test/ApiClient')

test('Busca de linhas /lines', async ({ client }) => {
  const response = await client.get('/lines').end()

  response.assertStatus(200)
}).timeout(35000)

test('Exclusão da linha 1', async ({ client }) => {
  const response = await client.delete('/lines/1').end()

  response.assertStatus(200)
}).timeout(35000)
