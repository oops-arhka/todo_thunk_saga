import React from "react";
import { connect } from "react-redux";
import DelTodo from "../components/DelTodo";
import EditTodo from "../components/EditTodo";
import AddTodo from "../components/AddTodo";
import Login from "../components/Login";

const mapStateToProps = (state, ownProps) => ({
    todos: state.todos,
    loading:  state.loading,
    error: state.error,
    message: state.message,
});

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <Login />                             
                <div>{this.props.loading && 'Loading...'}</div>
                <div>{this.props.error && 'error'}</div>
                <div>{this.props.message}</div>               
            </div>
        );
    }
}

export default connect(
    mapStateToProps
)(List)