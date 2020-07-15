import {store} from '@/store'
import { Auth as AuthActions } from '@/store/actions'

function HeaderHandler(query){
  // console.info(query,"1111111111111111")
  //   const query = window.location.search;
    let appId = 10000
    if(!!query){
      const url = require('url');
      appId = url.parse(query, true).query.appId
    }
    return store.dispatch(AuthActions.updateAppId(appId))

}

export default HeaderHandler
