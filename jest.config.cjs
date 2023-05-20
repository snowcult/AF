module.exports = {
  setupFilesAfterEnv: ['./test/setupTests.js'],
  // Other Jest configuration options...
  "transform": {
    "^.+\\.jsx?$": "babel-jest"
  },
  snapshotSerializers: ["enzyme-to-json/serializer"]

};
