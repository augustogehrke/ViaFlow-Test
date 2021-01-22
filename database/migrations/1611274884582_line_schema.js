'use strict'

const Schema = use('Schema')

class LineSchema extends Schema {
  up () {
    this.create('lines', (table) => {
      table.increments()
      table.string('name', 80).notNullable()
      table.string('code', 60).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('lines')
  }
}

module.exports = LineSchema
