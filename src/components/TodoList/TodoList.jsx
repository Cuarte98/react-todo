import React from 'react'
import { Input, Paper, Button, Divider, List, ListItem } from '@material-ui/core'
import './styles.css';


class TodoList extends React.Component {
    render() {
        return (
            <Paper className="container">
                <Input />
                <Button>Add</Button>
                <Divider />
                <List> 
                    <ListItem>Item 1 </ListItem>
                    <ListItem> Item 2</ListItem>

                    <ListItem>Item 3</ListItem>
                    

                </List>

            </Paper>
        )
    }
}

export default TodoList