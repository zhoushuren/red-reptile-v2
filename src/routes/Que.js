/**
 * Created by zhoujun on 4/18/17.
 * email :zhoujun247@gmail.com
 */
import React from 'react';
import { connect } from 'dva';
//import styles from './NewEmail.css';
import { Table, Button,Input,Switch, Form,Select } from 'antd';
const Search = Input.Search;
const Option = Select.Option;
const FormItem = Form.Item;


function Que({class_list,dispatch,sub_class_list,kemu,form,code}){
	function onChange(e){
		dispatch({ type: 'que/get_sub_category', payload: e });
		dispatch({ type: 'que/set_params', payload: {class_id:e} });
	}

	function subClassonChange(e){
		console.log('getkemu',e)
		dispatch({ type: 'que/get_kemu', payload: e });
		dispatch({ type: 'que/set_params', payload: {subclass_id:e} });
	}
	function kemuChange(  icourseid ) {
		dispatch({ type: 'que/set_params', payload: {icourseid} });
	}

	function submit(e){
		e.preventDefault();
		form.validateFields((err, values) => {
			if (!err) {
				console.log('Received values of form: ', values);

				dispatch({ type: 'que/submit', payload: values });
			}
		});
	}
	let opt = [];
	let opt2 = [];
	let opt3 = [];
	if(class_list && class_list.length>0){
		class_list.forEach((val,k)=>{

			opt.push(<Option key={val.iclassid} value={val.iclassid}>{val.ccoursecname}</Option>)
		})
	}
	if(sub_class_list && sub_class_list.length>0){
		sub_class_list.forEach((val,k)=>{
			opt2.push(<Option key={val.isubclassid} value={val.isubclassid}>{val.csubclassname}</Option>)
		})
	}

	if(kemu && kemu.length>0){

		kemu.forEach((val,k)=>{
			opt3.push(<Option key={val.icourseid} value={val.icourseid}>{val.ccoursename}</Option>)
		})

	}
	const { getFieldDecorator } = form;
	return (

		<Form layout="horizontal" onSubmit={submit}>
			<FormItem label="Select">
				{getFieldDecorator('class_id', {
				})( <Select onChange={onChange} style={{ width: '100%' }}  mode="tags">
						{opt}
					<Option value="rmb">RMB</Option>
					</Select>)}
			</FormItem>
			<FormItem label="Select">
				{getFieldDecorator('subclass_id', {
				})( <Select onChange={subClassonChange} style={{ width: '100%' }}  mode="tags">
					{opt2}
				</Select>)}
			</FormItem>
			<FormItem label="Select">
				{getFieldDecorator('icourseid', {
				})(<Select onChange={kemuChange} style={{ width: '100%' }}  mode="tags">
					{opt3}
				</Select>)}
			</FormItem>
			<FormItem>
				<Button type="primary" htmlType="submit">Submit</Button>
			</FormItem>
			<div>结果：{code}</div>
		</Form>
	)
}

function mapStateToProps(state) {
	const {que} = state;
	return que;
}

const FQue = Form.create()(Que)

export default connect(mapStateToProps)(FQue);


