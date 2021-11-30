import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'

import Mobile from '@/store/mobile'
import UserRegister from '@/store/users/register'
import UserAvatar from '@/store/users/avatar'
import Auth from '@/store/auth'
import User from '@/store/users'

// eslint-disable-next-line import/no-mutable-exports
let mobile: Mobile
let userRegister: UserRegister
let userAvatar: UserAvatar
let auth: Auth
let users: User

const initializeStores = (store: Store<any>): void => {
  mobile = getModule(Mobile, store)
  userRegister = getModule(UserRegister, store)
  userAvatar = getModule(UserAvatar, store)
  auth = getModule(Auth, store)
  users = getModule(User, store)
}

export {
  initializeStores,
  mobile,
  userRegister,
  userAvatar,
  auth,
  users,
}
