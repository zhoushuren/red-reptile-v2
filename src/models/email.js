
import * as emailService from '../services/email';
export default {
  namespace: 'email',
  state: {
    list: [],
    total_count: 0,
    total: null,
    make_result: false
  },
  reducers: {
    save(state, { payload: { data: list,total_count:total_count} }) {
      return { ...state,list,total_count};
    },
    saveUrl(state,{payload: { result: result}}){
      return { ...state, result };
    },
    saveMakeResult(state,{payload: { result: make_result}}){
      return { ...state, make_result };
    }
  },
  effects: {
    *fetch({ payload: { page,status } }, { call, put }) {
      const { data, headers } = yield call(emailService.fetch, { page,status });
      console.log(data);
      if(data){
        yield put({ type: 'save', payload: { data: data.list,total_count: data.total_count} });
      }


    },
    *make({ payload: emailList }, { call, put }){
      const { data, headers } = yield call(emailService.makeOne,  emailList );
      if(data){
        yield put({ type: 'saveMakeResult', payload: { result: data.result} });
      }
    }
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/newEmail') {
          dispatch({ type: 'fetch', payload: query });
        }else if(pathname === '/addEmail'){
          dispatch({ type: 'geturl', payload: query });
        }
      });
    },
  }
};
