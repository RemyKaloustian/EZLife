import React, { Component } from 'react';
import { connect } from 'react-redux';
import { displayList } from '../actions';
import { bindActionCreators } from 'redux';

class ListDisplayer extends Component {
  constructor(props) {
    super(props);
  }
   render() {
     return (
           <div className="container">
            <form>
              <div className="field is-grouped">
                <div className="control">
                  <button className="button is-primary" 
                      onClick={(e) => {e.preventDefault();this.props.dispatch(displayList())}}>
                      Display
                  </button><br/>
                  List
                  {
                      this.props.list.map((item,index) => 
                            <p key={index}>{item}</p>
                        )
                    }
                </div>
              </div>
            </form>
            </div>
     )
   }
}

function mapStateToProps(state){
    return {
        list: state.displayReducer
      };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(displayList, dispatch) }
}

export default connect(mapStateToProps)(ListDisplayer);