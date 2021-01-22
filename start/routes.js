'use strict'

const Route = use('Route')

Route.get('/poa-lines', 'DataPoaController.listLines')
Route.get('/poa-itineraries', 'DataPoaController.listItineraries').validator('LineId')

Route.resource('lines', 'LineController').apiOnly().validator(new Map([[['store', 'update'], 'Line']]))
Route.resource('itineraries', 'ItineraryController').apiOnly().validator(new Map([[['store', 'update'], 'Itinerary']]))
