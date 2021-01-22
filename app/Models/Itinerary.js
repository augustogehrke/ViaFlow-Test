'use strict'

const Model = use('Model')

class Itinerary extends Model {
  line () {
    return this.belongsTo('App/Models/Line')
  }
}

module.exports = Itinerary
