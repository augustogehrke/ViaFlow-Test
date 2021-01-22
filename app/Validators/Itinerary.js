'use strict'

class Itinerary {
  async fails (error) {
    return this.ctx.response.status(400).send({ error: { message: error[0].message, name: 'IncorretFilter', status: 400 } })
  }

  get rules () {
    return {
      lng: 'required',
      lat: 'required',
      line_id: 'required',
    }
  }

  get messages () {
    return {
      'lng.required': 'Please, enter the lng',
      'lat.required': 'Please, enter the lat',
      'line_id.required': 'Please, enter the line_id',
    }
  }
}

module.exports = Itinerary
