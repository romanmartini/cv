import { DataModule } from '../../config/data.module.js'
import { CityEntity } from '../entities/city.entity.js'

export function CityRepository() {
  this.data = new DataModule('city');
}

CityRepository.prototype.findOne = function(key, value) {
  const data = this.data.getData()
  const city = data.find(city => city[key] === value);
  if (!city) throw new Error('User not found.')
  return this.toModel(city)
}

CityRepository.prototype.findAll = function() {
  return this.data.map(data => this.toModel(data));
}

CityRepository.prototype.toModel = function(data) {
  return new CityEntity({...data})
}