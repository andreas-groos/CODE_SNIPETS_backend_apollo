import {saveUserConnector, getUserInfoConnector, saveSnippetConnector} from '../Connectors'

// export const saveUser = async (args) => {
//   console.log('user saved', args);
//   let res = await saveUserConnector(args)
//   console.log('res',res)
//   return {
//     displayName: 'hi',
//     uid: '1234'
//   }
// }

export const getUserInfo = async (token) => {
  if (!token) {
    return new Error({msg: 'no token'})
  }
  let res = await getUserInfoConnector(token)
  return res
}

export const saveSnippet = async(snippet,token) => {
  if (!token) {
    return new Error({msg: 'no token'})
  }
  let res = await saveSnippetConnector(snippet,token)
  return res
}