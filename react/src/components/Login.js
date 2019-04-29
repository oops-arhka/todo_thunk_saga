import React from "react";
import { connect } from "react-redux";
import { delTodoAC } from "../reducers/actions/action";
import { AddTodoThunk } from "../reducers/actions/action";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "f",
        };
    }

    // sendFetch = async () => {
    //     let res = await fetch("/fetch");
    //     console.log('Sent waiting for respond');
    //     let data = await res.text();
    //     console.log(data);
    // }

    updateInput = input => {
        this.setState({ value : input });
    };

    render() {
        return (
            <div>
                <input
                    onChange={e => this.updateInput(e.target.value)}
                    value={this.state.value}
                />
                <button className='btnName' onClick={() => this.props.addTodo(this.state.value)}>
                    Send Fetch
            </button>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addTodo: (task) => dispatch(AddTodoThunk(task))
    }
}



export default connect(
    null,
    mapDispatchToProps
)(Login);