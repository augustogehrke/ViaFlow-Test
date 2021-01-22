'use strict'

const Line = use('App/Models/Line')

class LineController {
  async index () {
    const lines = await Line.all()
    return lines
  }

  async show ({ params }) {
    const line = await Line.findOrFail(params.id)
    await line.load('itineraries')
    return line
  }

  async store ({ request }) {
    const data = request.only([
      'name',
      'code'
    ])

    const line = await Line.create(data)

    await line.load('itineraries')
    return line
  }

  async update ({ params, request }) {
    const data = request.only([
      'name',
      'code'
    ])

    const line = await Line.findOrFail(params.id)
    line.merge(data)
    await line.save()

    await line.load('itineraries')
    return line
  }

  async destroy ({ params }) {
    const line = await Line.findOrFail(params.id)
    return await line.delete()
  }
}

module.exports = LineController
