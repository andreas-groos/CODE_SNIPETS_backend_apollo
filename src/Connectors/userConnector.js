import * as admin from 'firebase-admin'
import serviceAccount from '../constants/firebase.json'
import {User} from '../Schema'

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://code-snippet-3fe64.firebaseio.com"
});

const getUserObjFromToken = async (token) => {
  return await admin.auth().verifyIdToken(token)
}

export const saveUserConnector = async ({
  token
}) => {
  let user = await getUserObjFromToken(token)
  console.log('user', user)
  return user;
}

export const getUserInfoConnector = async({token}) => {
  let firebaseUser = await getUserObjFromToken(token)
  let user = await User.findOne({uid: firebaseUser.uid})
  if (!user) {
    // user isn't in the DB yet
    user = new User({displayName: firebaseUser.name, uid: firebaseUser.uid})
    await user.save()
    return user
  }
  console.log('user.displayName',user.displayName)
  return user
}