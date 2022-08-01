import { Box, Checkbox, FormControlLabel, FormGroup } from "@mui/material";

const TaskList = (props: {items: any[]} ) => {
    return (
        <Box>
            <FormGroup>
                {props.items.map(item => (
                    <FormControlLabel control={item.completed ? <Checkbox defaultChecked/> : <Checkbox />} label={item.title} />
                ))}
            </FormGroup>
        </Box>
    )
}

export default TaskList;