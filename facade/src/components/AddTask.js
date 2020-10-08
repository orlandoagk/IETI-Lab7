import React from 'react'
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography'
import {withRouter} from 'react-router-dom';
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from "moment";
import CheckIcon from '@material-ui/icons/Check';
import Fab from '@material-ui/core/Fab';
import Axios from 'axios';


export default class AddTask extends React.Component{

    state = {
        "text":"",
        "responsible":"",
        "status":"",
        "dueDate":moment(),
        "id":""
    }

    handleDescription = (e) =>{
        this.setState({
            "text": e.target.value
        });
    }

    handleDatePicker = (date) =>{
        this.setState({
            ...this,
            "dueDate":date
        });

    }

    handleResponsible = (e) =>{
        this.setState({
            "responsible": e.target.value
        });
    }

    handleEmail = (e)=>{
        this.setState({
            "id": e.target.value
        });
    }

    handleState = (e) =>{
        this.setState({
            "status":e.target.value
        })
    }

    handleSubmit = (e) => {
        const {text,status,responsible,id,dueDate} = this.state;
        if(!text || !status || !responsible || !id || !dueDate){
            alert("Debes rellenar todos los datos")
        } else {
            
            const newItem = {
                "text":text,
                "status":status,
                "responsible":responsible,
                "dueDate":dueDate.toString()
            }

            Axios.post('https://taskplanner11.azurewebsites.net/api/add-task?code=IRli1suo1CLj1VUGkfKp7UUZWiVuvlnrN1KM8Hcn78tNKPMUhk2Fqw==', newItem)
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });
            
        }
        
    }


    render(){
        return(
            <Container className='Box' variant="contained">
                
            
            
            <Typography component="h1" variant="h5">
                New Task
            </Typography>
            <form>
                <TextField name="description" label="Description" id="description" autoComplete="description" onChange={this.handleDescription}/>
                <br/>
                <TextField name="responsible" label="Responsible" id="responsible" autoComplete="responsible" onChange={this.handleResponsible}/>
                <br/>
                <TextField name="id" label="Id" id="id" autoComplete="id" onChange={this.handleEmail}/>
                <br/>
                <br/>
                <InputLabel htmlFor="stateTodo">Status</InputLabel>
                <Select value={this.state.status} onChange={this.handleState} inputProps={{
            name: 'status',
            id: 'stateTodo',
          }} required>
                    <option value="ready">Ready</option>
                    <option value="completed">Completed</option>
                    <option selected value="in progress">In Progress</option>
                </Select>
                <br/>
                <br/>
                <InputLabel htmlFor="due-date">Date</InputLabel>
                <DatePicker
                        id="due-date"
                        selected={this.state.dueDate}
                        placeholderText="Due Date"
                        onChange={this.handleDatePicker}>
                    </DatePicker>
                <br/>
                <br/>
                <Fab color="primary" aria-label="add" onClick={this.handleSubmit}>
                    <CheckIcon />
                </Fab>

            </form>
        </Container>
        )
    }
}