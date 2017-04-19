/**
 * Created by zhoujun on 4/19/17.
 * email :zhoujun247@gmail.com
 */
import * as queService from '../services/que';
export default {
	namespace: 'que',
	state: {
		list: [],
		total: null,
		sub_class_list: [],
		class_list:[],
	},
	reducers: {
		save(state, { payload: { class_list} }) {
			return { ...state,class_list};
		},
		saveSubClass(state, { payload: { sub_class_list} }) {
			return { ...state,sub_class_list};
		},
		savekemu(state, { payload: { kemu} }){
			return { ...state,kemu};
		},
		saveResultCode(state, { payload: { code} }){
			return { ...state,code};
		}
	},
	effects: {
		*get_category({ payload: { url,type,remarks } }, { call, put }) {
			const { data } = yield call(queService.get_category, { url,type ,remarks});
			yield put({ type: 'save', payload: { class_list:data.data} });
		},
		*get_sub_category({ payload: class_id }, { call, put }){
			const { data } = yield call(queService.get_sub_category, class_id);

			yield put({ type: 'saveSubClass', payload: { sub_class_list:data.data} });
		},
		*get_kemu({ payload: class_id }, { call, put }){
			const { data } = yield call(queService.get_kemu, class_id);

			yield put({ type: 'savekemu', payload: { kemu:data.data} });
		},
		*submit({ payload: {class_id,subclass_id,icourseid} }, { call, put }){
			const { data } = yield call(queService.set_order, {class_id,subclass_id,icourseid});
			console.log(data);
			yield put({ type: 'saveResultCode', payload: { code:data.data.string} });
		}
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
