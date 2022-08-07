const os = require('os');

/**
 * Show some basic information about your device & OS
 * with nodeJS.
 * 
 * @return  {integer}
 *          The amount of seconds your device is uptime.
 */
const nodeInfo = () => {
  // Get some information from your computer
  const homedir = os.homedir();
  const uptime = os.uptime();
  const version = os.version();
  // Build a uptime date parts
  let now = Date.now();
  let x = now - uptime;
  let date_ob = new Date(x);
  let day = date_ob.getDate() < 10 ? '0' + date_ob.getDate() : date_ob.getDate();
  let month = (date_ob.getMonth() + 1) < 10 ? '0' + (date_ob.getMonth() + 1) : date_ob.getMonth() + 1;
  let year = date_ob.getFullYear();
  let hour = date_ob.getHours() < 10 ? '0' + date_ob.getHours() : date_ob.getHours();
  let minutes = date_ob.getMinutes()  < 10 ? '0' + date_ob.getMinutes() : date_ob.getMinutes();
  let seconds = date_ob.getSeconds();
  // Show some logs
  console.log(`🖥  Your home directory is: ${homedir}.`);
  console.log(`📦 Your OS version is: ${version}.`);
  console.log(`🕗 Your computer is up since: ${day}-${month}-${year}, at ${hour}:${minutes}:${seconds}.`);
  // Return uptime value, simply to do some basic Jest tests
  return uptime;
}

module.exports = nodeInfo;