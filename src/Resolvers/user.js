import {saveUserConnector, getUserInfoConnector} from '../Connectors'

// export const saveUser = async (args) => {
//   console.log('user saved', args);
//   let res = await saveUserConnector(args)
//   console.log('res',res)
//   return {
//     displayName: 'hi',
//     uid: '1234'
//   }
// }

export const getUserInfo = async (args) => {
  console.log('getUserInfo' ,args);
  if (!args.token) {
    return new Error({msg: 'no token'})
  }
  let res = await getUserInfoConnector(args)
  return res
}