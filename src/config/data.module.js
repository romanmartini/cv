import USER_DATA from './data/user.data.js'
import CITY_DATA from './data/city.data.js'
/**
 * 
 * @param {* "user" | "city" | "skill" } data 
 */
export function DataModule(data) {
  this.data = data;
}

DataModule.prototype.getData = function() {
  
  const dataFiles = {
    ['user']: USER_DATA, 
    ['city']: CITY_DATA, 
  }

  if (!this.data) throw new Error('Data is null');
  if (!dataFiles[this.data]) throw new Error('Data not exist');

  return dataFiles[this.data];
}
