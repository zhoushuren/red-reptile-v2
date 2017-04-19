/**
 * Created by zhoujun on 4/19/17.
 * email :zhoujun247@gmail.com
 */
import * as queService from '../services/que';
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

	},
	effects: {
		*get_category({ payload: { url,type,remarks } }, { call, put }) {

			const { data } = yield call(queService.get_category, { url,type ,remarks});

			yield put({ type: 'save', payload: { result:data.data} });
		},

	},
	subscriptions: {
		setup({ dispatch, history }) {
			return history.listen(({ pathname, query }) => {
				if(pathname === '/que_lib'){
					dispatch({ type: 'get_category', payload: query });
				}
			});
		},
	}
};
