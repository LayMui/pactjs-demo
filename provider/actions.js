const address = require('./data/address.json');

const getAddress = () => {
  return address;
};

const getAddressByLocationId = locationId => {
  return address.find(address => parseInt(locationId) === address.locationId)
};

const getAddressByName = name => {
  return address.find(address => address.name === name)
};

module.exports = {
  getAddress,
  getAddressByLocationId,
  getAddressByName,
};