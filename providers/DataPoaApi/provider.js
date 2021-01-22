const { ServiceProvider } = require('@adonisjs/fold')

class DataPoaApi extends ServiceProvider {
  register () {
    this.app.singleton('Services/DataPoaApi', () => {
      const Config = this.app.use('Adonis/Src/Config')
      return new (require('.'))(Config)
    })
  }
}

module.exports = DataPoaApi
