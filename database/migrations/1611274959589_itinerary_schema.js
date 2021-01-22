'use strict'

const Schema = use('Schema')

class ItinerarySchema extends Schema {
  up () {
    this.create('itineraries', (table) => {
      table.increments()
      table.string('lat', 50).notNullable()
      table.string('lng', 50).notNullable()
      table.integer('line_id').unsigned().references('id').inTable('lines').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('itineraries')
  }
}

module.exports = ItinerarySchema
