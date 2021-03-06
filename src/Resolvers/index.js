import {getUserInfo, saveSnippet, addCategory, deleteSnippet} from "./user";



const resolvers = {
  Query: {
    getUserInfo: (root, args, context) => {
      return getUserInfo(context.token)
    },
    hello: () => 'Hello world!',
  },
  Mutation: {
    // saveUser: async(root, args, context) => await saveUser(args)
    saveSnippet:  (_,args,context) => {
      return saveSnippet(args, context.token)
    },
    addCategory: (_,args,context) => {
      return addCategory(args,context.token)
    },
    deleteSnippet: (_,args,context) => {
      return deleteSnippet(args, context.token)
    }
  }
}

export default resolvers