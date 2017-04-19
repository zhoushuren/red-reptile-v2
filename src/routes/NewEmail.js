import React from 'react';
import { connect } from 'dva';

import { Table, Button,Input,Switch} from 'antd';

class NewEmail extends React.Component{
    constructor(props){
        super(props);
        this.state ={emailStr:'',sendStatus: false}
    }

    show( record,txt,data) {
        let emailStr = '';
        for(let val of data[record.index]){
            emailStr += val.email + ',';
        }

        this.setState({
            emailStr:emailStr
        });
    }

    make( record,txt,data){
        let {dispatch} = this.props;
        let emailArr = [];
        for(let val of data[record.index]){
            emailArr.push( val.email)
        }
        dispatch({ type: 'email/make', payload: emailArr });
        dispatch({ type: 'email/fetch', payload: {status:this.state.sendStatus} });
    }
    showSend(checked){
        let {dispatch} = this.props;
        dispatch({ type: 'email/fetch', payload: {status:checked} });
        this.setState({sendStatus: checked});
    }
    pageOnChange(e){
        let {dispatch} = this.props;
        dispatch({ type: 'email/fetch', payload: {page:e,status:this.state.sendStatus} });
    }
    render(){
        let {email} = this.props;
        let data = email.list;
        let total_count = email.total_count;
        let EmailList
        if(data && data.length>0){
            EmailList = data.map((r,index)=>{
                return {
                    created_time: r[0] ? new Date(r[0].time *1000).toLocaleDateString(): 0,
                    num: r.length,
                    index: index,
                    send_count: r[0].send,
                    key:index
                }
            });

        }else{
            EmailList = [];
        }

        const columns = [
            { title: '序号', width: 100, dataIndex: 'index', key: 'hao', fixed: 'left' },
            { title: '邮件数量', width: 100, dataIndex: 'num', key: 'age', fixed: 'left' },
            { title: '爬取时间', dataIndex: 'created_time', key: '1' },
            { title: '发送次数', dataIndex: 'send_count', key: '2' },
            {
                title: '显示',
                key: 'operation',

                width: 100,
                render: (record,text) => <Button onClick={this.show.bind(this,record,text,data)} >show</Button>,
            },{
                title: '标记',
                key: 'rem',
                width: 100,
                render: (record,text) => <Button onClick={this.make.bind(this,record,text,data)} >发了一次</Button>,
            },
        ];

        const pagination = {
            defaultCurrent:1,
            defaultPageSize: 5,
            total:total_count/100,
            onChange: this.pageOnChange.bind(this)
        }
        return(
            <div>
                <div className="table-operations">
                    <span>分组显示最新爬取</span>
                    <div>显示</div>
                    <Switch checkedChildren={'所有已发'} unCheckedChildren={'所有未发'} onChange={this.showSend.bind(this)} />
                    <br />
                </div>
                <div>

                </div>
                <Table columns={columns} dataSource={EmailList} pagination={pagination} />

                <Input type="textarea" rows={8} value={this.state.emailStr} />
            </div>
        )
    }
}


function mapStateToProps(email) {
  return email;
}

export default connect(mapStateToProps)(NewEmail);
