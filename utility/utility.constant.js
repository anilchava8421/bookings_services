import bcryptjs from 'bcryptjs'
export default class Utility {
   //Get the Sorted Users by email
   static sortUsersByEmail(users) {
      return users.sort((a, b) => a.email.localeCompare(b.email))
   }

   //Generate hash password
   static async generateHashPassword(password) {
      return bcryptjs.hashSync(password, bcryptjs.genSaltSync(10), null);
   }

   //Checking if password is valid
   static validatePassword(password, hashPassword) {
      return bcryptjs.compareSync(password, hashPassword);
   }
}