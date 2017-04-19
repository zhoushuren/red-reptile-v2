/**
 * Created by zhoujun on 4/19/17.
 * email :zhoujun247@gmail.com
 */
import request from '../utils/request';

export function set_order({class_id,subclass_id,icourseid} ) {
	return request(`/api/set_order`,{method:'POST',body: JSON.stringify({class_id,subclass_id,icourseid})});
}

export function get_category( {limit} ) {
	return request(`/api/get_category`,{method:'GET'});
}

export function get_sub_category(class_id){
	return request(`/api/get_sub_category?class_id=${class_id}`,{method:'GET'});
}

export function get_kemu(sub_class_id){
	return request(`/api/getkemu?sub_class_id=${sub_class_id}`,{method:'GET'});
}