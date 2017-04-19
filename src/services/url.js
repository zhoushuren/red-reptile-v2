/**
 * Created by zhoujun on 2017/4/14.
 * email :zhoujun247@gmail.com
 */

import request from '../utils/request';

export function addurl( {url,type,remarks} ) {
	return request(`/api/add_url`,{method:'POST',body: JSON.stringify({url:url,type:type,remarks})});
}

export function getUrl( {limit} ) {
	return request(`/api/get_url`,{method:'GET'});
}