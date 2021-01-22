'use strict'

const Model = use('Model')

class Line extends Model {
  itineraries () {
    return this.hasMany('App/Models/Itinerary')
  }
}

module.exports = Line
