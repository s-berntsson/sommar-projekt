import React from 'react';
import { connect } from 'react-redux';
import * as itemActions from '../redux/actions/itemActions';



class ShoppingCart extends React.Component {

    constructor(props) {
        super(props);

        this.state = {  //state is used here to save the event target of handleChange, so that we can use it in handleSubmit
            item: {
                title: ""
            }
        }; 
    }

    handleChange = (event) => {
        const item = { ...this.state.item, title: event.target.value };
        this.setState({ item });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.dispatch(itemActions.addItem(this.state.item));
    }

    render() {
        return (
            <div>
                
                <p>kundvagnen</p>
                <form onSubmit={this.handleSubmit}>
                    <h3>Lägg till vara</h3>
                    <input type='text' onChange={this.handleChange} value={this.state.item.title} />
                    <input type='submit' value='Save' />
                </form>

                {this.props.items.map(item => (
                    <div key={item.title}>{item.title}</div>
                ))}

            </div>
        )
    }}

    function mapStateToProps(state) {
    return {
        items: state.items
    };
}


export default connect(mapStateToProps)(ShoppingCart);