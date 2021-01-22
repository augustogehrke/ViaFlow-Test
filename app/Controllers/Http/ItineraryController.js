'use strict'

const Itinerary = use('App/Models/Itinerary')

class ItineraryController {
  async index () {
    const itineraries = await Itinerary.all()
    return itineraries
  }

  async show ({ params }) {
    const itinerary = await Itinerary.findOrFail(params.id)
    await itinerary.load('line')
    return itinerary
  }

  async store ({ request }) {
    const data = request.only([
      'lat',
      'lng',
      'line_id'
    ])

    const itinerary = await Itinerary.create(data)

    await itinerary.load('line')
    return itinerary
  }

  async update ({ params, request }) {
    const data = request.only([
      'lat',
      'lng',
      'line_id'
    ])

    const itinerary = await Itinerary.findOrFail(params.id)
    itinerary.merge(data)
    await itinerary.save()

    await itinerary.load('line')
    return itinerary
  }

  async destroy ({ params }) {
    const itinerary = await Itinerary.findOrFail(params.id)
    return await itinerary.delete()
  }
}

module.exports = ItineraryController
