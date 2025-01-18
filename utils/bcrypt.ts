// import * as bcrypt from 'bcrypt';

// export const encodePassword = async (password: string): Promise<string> => {
//     const saltRounds = 10
//     const salt = await bcrypt.genSalt(saltRounds)

//     return await bcrypt.hash(password, salt)
// };

// export const comparePasswords = async (password: string, hashedPassword: string): Promise<boolean> => {
//     return await bcrypt.compare(password, hashedPassword)
// }