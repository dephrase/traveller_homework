const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const listOfStartLocations = this.journeys.map((journey) => {
    return journey.startLocation
  })
  return listOfStartLocations
};

Traveller.prototype.getJourneyEndLocations = function () {
  const listOfEndLocations = this.journeys.map((journey) => {
    return journey.endLocation
  })
  return listOfEndLocations
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  const journeysByTransport = this.journeys.filter(journey => journey.transport === transport)
  return journeysByTransport
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const journeys = this.journeys.filter(journey => journey.distance >= minDistance)
  return journeys
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  var allJourneys = this.journeys
  let totalDistance = allJourneys.reduce((distance, journey) => {
    return distance + journey.distance
  }, 0)
  return totalDistance
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  var modesOfTransportObject = {}
  var finalList = []
  const modesOfTransport = this.journeys.map((journey) => {
    if(modesOfTransportObject[journey]){
      modesOfTransportObject = 1
      console.log(modesOfTransportObject)
      return journey.transport
    }
  });

  for(key in modesOfTransportObject){
    console.log('Does this work: ', modesOfTransportObject[key])
    finalList.push(modesOfTransportObject[key])
  }
  return finalList
};

Traveller.prototype.getUniqueModesOfTransport = function(){
  var modesOfTransportObject = {}
  var uniqueList = []

  for(journey of this.journeys){
    modesOfTransportObject[journey.transport] = 0
  }

  for(key in modesOfTransportObject){
    uniqueList.push(key)
  }

  return uniqueList
}

module.exports = Traveller;
