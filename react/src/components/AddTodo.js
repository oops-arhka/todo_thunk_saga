import React from "react";
import { connect } from "react-redux";
import { addTodoAC } from "../reducers/actions/action";
import DelTodo from "./DelTodo"

class AddTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: "",
        };
    }

    updateInput = input => {
        this.setState({ input });
    };

    handleAddTodo = () => {
        if (this.state.input !== "") {
            this.props.addTodoMethod(this.state.input)
        }        
        this.setState({input : ''})
    }

    render() {
        return (
            <div>
                <input
                    onChange={e => this.updateInput(e.target.value)}
                    value={this.state.input}                   
                />
                <button className="add-todo" onClick={this.handleAddTodo}>
                    Add Todo
            </button>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addTodoMethod: (content) => dispatch(addTodoAC(content))
    }
}

export default connect(
    null,
    mapDispatchToProps
)(AddTodo);