import React from "react";
import { connect } from "react-redux";
import { editTodoAC } from "../reducers/actions/action";

class EditTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            edit: false,
            input: this.props.content,
        };
    }

    handleEdit = (event) => {
        event.preventDefault();
        this.setState({ edit: !this.state.edit })
    }

    commitChange = async (event) => {
        event.preventDefault();
        if (this.state.input !== "") {
            this.props.editTodoMethod(this.state.input, this.props.id);
        }
        await this.setState({
            edit: false,
        })
    }

    updateInput = input => {
        this.setState({ input });
    };


    render() {
        return (
            <div>
                <button className='btnName' onClick={this.handleEdit}>
                    Edit
            </button>
                <div>{this.state.edit && <form onSubmit={this.commitChange}>
                    <label>
                        <input type="text" name="TaskName" value={this.state.input} onChange={e => this.updateInput(e.target.value)} />
                    </label>
                    <button className='btnName' >
                        Submit
                        </button>
                </form>}</div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        editTodoMethod: (content, id) => dispatch(editTodoAC(content, id))
    }
}

export default connect(
    null,
    mapDispatchToProps
)(EditTodo);