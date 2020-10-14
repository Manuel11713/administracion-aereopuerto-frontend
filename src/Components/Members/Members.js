import React from 'react';
import {connect} from 'react-redux';
import {Select} from 'antd';

const {Option} = Select;

const Members = ({members, setMembersSelected}) => {
    const handleChange = (event) => {
        setMembersSelected(event);
    }
    return(
        <div className="container">
            <h2>Tripulation's Members</h2>
            <Select
                mode="multiple"
                allowClear
                placeholder="Please select members"
                onChange={handleChange}
                style={{width:'100%'}}
            >
                {members.map(member=><Option key={member.id} value={member.id}>{member.name_member}</Option>)}
            </Select>
        </div>
    );
};

const stateToProps = (state) => {
    return({
        members:state.members
    });
}

export default connect(stateToProps)(Members);