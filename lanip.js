/**
 * If you want to know the IP Address on the Local Network you're in luck!
 * see/credit: http://stackoverflow.com/questions/10750303
 */
var os = require('os');
var interfaces = os.networkInterfaces();

var ip = Object.keys(interfaces)
  .map(i =>interfaces[i].
      filter(address => address.family === 'IPv4' && !address.internal)[0]
  )
  .filter(i => i)[0].address;

module.exports = ip;
