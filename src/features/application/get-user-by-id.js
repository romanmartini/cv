import { UserRepository } from "../repositories/user.repository.js"
import { CityRepository } from "../repositories/city.repository.js";

export function GetUserByIdApplication() {
  this.userRepository = new UserRepository();
  this.cityRepository = new CityRepository();
}
GetUserByIdApplication.prototype.execute = function(id){
  const user = this.userRepository.findOne("id", id);
  const city = this.cityRepository.findOne("id", user.city);
  return { user, city }
}
