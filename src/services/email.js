/**
 * Created by zhoujun on 2017/3/20.
 * email :zhoujun247@gmail.com
 */
import request from '../utils/request';

export function fetch({ page = 1 ,status=false}) {
	return request(`/api/get_new_email?_page=${page}&_limit=5&status=${status}`);
}

export function makeOne(emailList){
	return request(`/api/make`,{method:'POST',body: JSON.stringify({email_list: emailList})});
}