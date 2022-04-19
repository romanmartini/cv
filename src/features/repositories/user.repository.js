import { DataModule } from '../../config/data.module.js'
import { UserEntity } from '../entities/user.entity.js'

export function UserRepository() {
  this.data = new DataModule('user');
}

UserRepository.prototype.findOne = function(key, value) {
  const data = this.data.getData()
  const user = data.find(user => user[key] === value);
  if (!user) throw new Error('User not found.')
  return this.toModel(user)
}

UserRepository.prototype.findAll = function() {
  return this.data.map(data => this.toModel(data));
}

UserRepository.prototype.toModel = function(data) {
  return new UserEntity({...data})
}