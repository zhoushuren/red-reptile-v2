import React from 'react';
import { connect } from 'dva';
import styles from './AddEmail.css';

import { Form, Select, Input, Button,Table } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

const columns = [
    {
        title: 'id',
        dataIndex: 'key',
    }, {
    title: '备注',
    dataIndex: 'remarks',
    width: '20%',
}, {
    title: 'type',
    dataIndex: 'type',
}, {
    title: 'URL',
    dataIndex: 'url',
},{
        title:'创建时间',
        dataIndex:'createdAt'
    }];


//function Addurl({dispatch,...props}) {
//
//    function submit(values){
//        dispatch({ type: 'email/addurl', payload: values });
//    }
//    var {url_list} = props.email;
//    let data = url_list;
//      return (
//        <div className={styles.normal}>
//            <AddForm onSubmit={submit}></AddForm>
//            <Table columns={columns}
//                   rowKey={record => record.registered}
//                   dataSource={data}
//            />
//        </div>
//      );
//
//}


class Addurl extends React.Component{
    constructor(props){
        super(props);
    }

    submit(dispatch,values){
        dispatch({ type: 'url/addurl', payload: values });
    }
    render(){
        let {dispatch} = this.props;
        let list = this.props.url.list;
        return (
        <div className={styles.normal}>
            <AddForm onSubmit={this.submit.bind(this,dispatch)}></AddForm>
            <Table columns={columns}
                   rowKey={record => record.registered}
                   dataSource={list}
            />
        </div>
      );
    }
}

function mapStateToProps(url_list) {
  return url_list;
}

export default connect(mapStateToProps)(Addurl);

const AddForm  = Form.create()(IForm);

function IForm (props){
    function handleSubmit( e ) {
        e.preventDefault();
        props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                props.onSubmit(values);
            }
        });
    }
    
    function handleSelectChange(  ) {
        
    }
    const {getFieldDecorator} = props.form;
    return (

        <Form onSubmit={handleSubmit}>
            <FormItem
                label="URL"
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 8 }}
            >
                {getFieldDecorator('url', {
                    rules: [{ required: true, message: '请输入 URL!' }],
                })(
                    <Input />
                )}
            </FormItem>
            <FormItem
                label="备注"
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 8 }}
            >
                {getFieldDecorator('remarks', {
                    rules: [{ required: true, message: '请输入备注' }],
                })(
                    <Input />
                )}
            </FormItem>
            <FormItem
                label="类别"
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 8 }}
            >
                {getFieldDecorator('type', {
                    rules: [{ required: true, message: 'Please select your Type!' }],
                    onChange: handleSelectChange,
                })(
                    <Select placeholder="Select a option and change input text above">
                        <Option value="1">贴吧</Option>
                        <Option value="0">豆瓣</Option>
                    </Select>
                )}
            </FormItem>
            <FormItem
                wrapperCol={{
            xs: { span: 8, offset: 0 },
            sm: { span: 8, offset: 4 },
          }}
            >
                <Button type="primary" htmlType="submit">
                    提交
                </Button>
            </FormItem>
        </Form>
    )
}

