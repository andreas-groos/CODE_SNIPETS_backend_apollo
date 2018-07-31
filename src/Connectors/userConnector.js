import * as admin from 'firebase-admin'
var shortid = require('shortid');
import serviceAccount from '../constants/firebase.json'
import {User, Snippet} from '../Schema'
import findIndex from 'lodash/findIndex'

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

export const getUserInfoConnector = async(token) => {
  let firebaseUser = await getUserObjFromToken(token)
  let user = await User.findOne({uid: firebaseUser.uid})
  if (!user) {
    // user isn't in the DB yet
    user = new User({displayName: firebaseUser.name, uid: firebaseUser.uid})
    await user.save()
    return user
  }
  return user
}

export const saveSnippetConnector = async(snippet,token) => {
  let firebaseUser = await getUserObjFromToken(token)
  let user = await User.findOne({uid: firebaseUser.uid})
  if (!user) {
    return new Error({msg: 'user not found'})
  }
  snippet._id =  shortid.generate()
  console.log('snippet',snippet)
  let newSnippet = new Snippet(snippet)
  console.log('newSnippet',newSnippet)
  user.snippets.push(newSnippet)
  console.log('user',user)
  await user.save()
  return newSnippet
}

export const addCategoryConnector = async(categoryName, token) => {
  let firebaseUser = await getUserObjFromToken(token)
  let user = await User.findOne({uid: firebaseUser.uid})
  if (!user) {
    return new Error({msg: 'user not found'})
  }
  let alreadyExists = user.categories.includes(categoryName)
  if (alreadyExists) {
    return new Error({msg: 'category already exists'})
  }
  user.categories.push(categoryName)
  await user.save()
  return {categories: user.categories}
}

export const deleteSnippetConnector = async(_id, token) => {
  let firebaseUser = await getUserObjFromToken(token)
  let user = await User.findOne({uid: firebaseUser.uid})
  if (!user) {
    return new Error({msg: 'user not found'})
  }
  let index = findIndex(user.snippets, o => _id === o._id)
  user.snippets.splice(index,1)
  await user.save()
  return user.snippets;
}