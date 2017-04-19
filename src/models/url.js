/**
 * Created by zhoujun on 2017/4/14.
 * email :zhoujun247@gmail.com
 */

import * as urlService from '../services/url';
export default {
	namespace: 'url',
	state: {
		list: [],
		total: null,
	},
	reducers: {
		save(state, { payload: { data: list} }) {
			return { ...state,list};
		},
		saveUrl(state,{payload: { result: result}}){
			return { ...state, result };
		}
	},
	effects: {
		*addurl({ payload: { url,type,remarks } }, { call, put }) {

			const { data } = yield call(urlService.addurl, { url,type ,remarks});
			console.log(data)
			yield put({ type: 'saveUrl', payload: { result:data.result} });
		},
		*geturl({ payload: { url,type } },{call,put}){
			const { data } = yield call(urlService.getUrl, { url,type });
			yield put({ type: 'save', payload: { data} });
		}
	},
	subscriptions: {
		setup({ dispatch, history }) {
			return history.listen(({ pathname, query }) => {
				if(pathname === '/add_url'){
					dispatch({ type: 'geturl', payload: query });
				}
			});
		},
	}
};
