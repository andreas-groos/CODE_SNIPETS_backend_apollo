import {saveUserConnector} from '../Connectors'

export const saveUser = async (args) => {
  console.log('user saved', args);
  let { token} = args
  let res = await saveUserConnector(token)
  console.log('res',res)
  return {
    displayName: 'hi',
    uid: '1234'
  }
}

export const getUserInfo = async (args) => {
  console.log('getUserInfo' ,args);
  return {
    displayName: 'hi',
    uid: '1234'
  }
}