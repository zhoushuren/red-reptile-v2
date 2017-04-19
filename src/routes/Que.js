/**
 * Created by zhoujun on 4/18/17.
 * email :zhoujun247@gmail.com
 */
import React from 'react';
import { connect } from 'dva';
//import styles from './NewEmail.css';
import { Table, Button,Input,Switch, Icon,Cascader } from 'antd';
const Search = Input.Search;

class Que extends React.Component{

	constructor(){
		super();
	}
	onChange(){

	}
	render(){
		const options = [{
			value: 'zhejiang',
			label: 'Zhejiang',
			children: [{
				value: 'hangzhou',
				label: 'Hanzhou',
				children: [{
					value: 'xihu',
					label: 'West Lake',
				}],
			}],
		}, {
			value: 'jiangsu',
			label: 'Jiangsu',
			children: [{
				value: 'nanjing',
				label: 'Nanjing',
				children: [{
					value: 'zhonghuamen',
					label: 'Zhong Hua Men',
				}],
			}],
		}];

		return (
			<div>
				<span>选择题库:</span>
				<Cascader options={options} onChange={this.onChange} changeOnSelect />
			</div>
		)
	}
}

function mapStateToProps(email) {
	return email;
}

export default connect(mapStateToProps)(Que);
