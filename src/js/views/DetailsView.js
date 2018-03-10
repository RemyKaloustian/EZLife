import React, {Component} from 'react';
import { connect } from 'react-redux';
import Link from 'react-router-dom/Link';
import { bindActionCreators } from 'redux';

import {addSubTask} from '../actions';
import SubTask from '../components/SubTask';
import {getRandomColor} from '../utils/colors';
import '../../css/details.css';
let self;
class DetailsView extends Component{
    constructor(props){
        super(props);
        this.state = {subtask: '', 
                    index:this.props.notes.findIndex((note)=> note.name == this.props.match.params.note),
                    undoneTasks:[],
                    doneTasks:[],
        };
        self = this;

       
    }

    componentDidMount(){
        this.setDoneAndUndone();
    }

    setDoneAndUndone(){
        let subtasks = this.props.notes[this.state.index].subtasks;
        console.log(subtasks);
        for (let index = 0; index < subtasks.length; index++) {
            if(!subtasks[index].done){
                let undoneTab = this.state.undoneTasks;
                undoneTab.push(subtasks[index]);
                this.setState({undoneTasks:undoneTab});
                
            }  
            else {
                let doneTab = this.state.doneTasks;
                doneTab.push(subtasks[index]);
                this.setState({doneTasks:doneTab});
                
            }          
        }

        console.log("UNDONE");
        console.log(this.state.undoneTasks);
        console.log("DONE");
        console.log(this.state.doneTasks);
        
    }

    addSub(){
        if(this.state.subtask.trim().length > 0){
            this.props.dispatch(addSubTask(this.state.index, this.state.subtask));
            this.inputVal.value = '';
            this.setState({subtask:''});
        }        
    }

    handleInputChange(e){
        this.setState({subtask:e.target.value});
    }


    handleKeyPress(e){
        if(e.charCode == '13'){
            self.addSub();
        }
    }

    toBoard(){
        this.props.history.push(`/board/${this.props.match.params.user}`);
    }
    render(){      
        return(
            <div>
                    
                <div className='header-panel' style={{backgroundColor: getRandomColor()}}>
                    <h3 className='header-title'>{this.props.match.params.note}</h3>
                </div>
                <div className='page-content alternative-content'>
                    <div className='details-input'>
                        <input placeholder="new subtask" 
                            className='inline-input input'
                            onChange={(e)=>this.handleInputChange(e)} 
                            ref={el => this.inputVal = el}
                            onKeyPress={this.handleKeyPress}/>
                        <img src='src/assets/icons/check.png' className='validate-subtask-icon' style={{backgroundColor: getRandomColor()}}
                            onClick={()=> this.addSub()}/>
                    </div>
                    <div className='details-subtasks'>                    
                        {
                            this.props.notes[this.state.index].subtasks.map((sub, subindex)=>{
                                if(!sub.done){
                                    return <SubTask key={subindex} name={sub.name} done={sub.done} index={this.state.index} subindex ={subindex}></SubTask>
                                    
                                }
                                else return <p></p>
                                })
                        }  
                        
                        <p className='details-separator'  style={{borderBottomColor: getRandomColor()}}></p>
                        {
                            this.props.notes[this.state.index].subtasks.map((sub, subindex)=>{
                                if(sub.done){
                                    return <SubTask key={subindex} name={sub.name} done={sub.done} index={this.state.index} subindex ={subindex}></SubTask>
                                    
                                }
                                else return <p></p>
                                })
                        }
                    </div>                 
                </div>

                <div className='fixed-bottom' style={{backgroundColor: getRandomColor()}}>
                    <img src='src/assets/icons/back.png' onClick={()=> this.toBoard()}/>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        notes: state.notesReducer,
      };
}

function mapDispatchToProps(dispatch){
    return {actions: bindActionCreators(addSubTask, dispatch)}
}

export default connect(mapStateToProps)(DetailsView);
