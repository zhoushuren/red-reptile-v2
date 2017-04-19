/**
 * Created by zhoujun on 4/19/17.
 * email :zhoujun247@gmail.com
 */
import request from '../utils/request';

export function set_order( {url,type,remarks} ) {
	return request(`/api/add_url`,{method:'POST',body: JSON.stringify({url:url,type:type,remarks})});
}

export function get_category( {limit} ) {
	return request(`/api/get_url`,{method:'GET'});
}