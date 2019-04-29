import React from "react";
import { connect } from "react-redux";
import { delTodoAC } from "../reducers/actions/action";

class DelTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
        };
    }

    render() {
        return (
            <button className='btnName' onClick={()=> this.props.delTodoMethod(this.props.id)}>
                Delete
            </button>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        delTodoMethod: (id) => dispatch(delTodoAC(id))
    }
}

export default connect(
    null,
    mapDispatchToProps
)(DelTodo);