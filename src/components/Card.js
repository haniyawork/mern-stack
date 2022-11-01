import React from 'react';
import {useParams } from 'react-router-dom';
import {connect} from 'react-redux';
function withParams(Component) {
    return props => <Component {...props} params={useParams()} />;
}

class Card extends React.Component {
    /*state = {user:''}

    componentDidMount(){
        // console.log( this.props.params);
        // console.log(queryString.parse(this.props.location.search));
        const {user} = this.props.params;
        this.setState({user});
    }
*/
onButtonClick = () => {
    let id = this.props.card.id
    this.props.deleteCard()
}
    render() {
        console.log(this.props);
        const {title,body} = this.props.card;
        // console.log("hi" +this.props);
        //const { user } = this.state;
        return(
            <div className='ui raised very padded text container segment' style={{scrollMarginTop: '80px'}}>
            <h3 className='ui header'>{title}</h3>
            <p>{body}</p>
            <button className='ui primary floated button' onClick={this.onButtonClick}>Delete</button>
        </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    let title = ownProps.params.user;
    return {
        card: state.cards.find(card => card.title === title)
    }
};

/*const mapDispatchToProps (props) => {
    return {
        deleteCard: (id) => {dispatch({ type: 'DELETE_CARD', id })}
    }
};
add it to connect*********
*/
export default withParams(connect(mapStateToProps)(Card));