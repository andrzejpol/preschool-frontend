import {useState} from "react";
import Typography from "@mui/material/Typography";
import {Button, Checkbox, Grid} from "@mui/material";
import Paper from "@mui/material/Paper";
import styled from "styled-components";

const AttendanceItem = styled(Paper)`
  padding: 10px;
  margin: 10px;
  text-align: center;
  color: red;
`;
const Attendance = () => {
  const [attendance, setAttendance] = useState({
    student1: false,
    student2: false,
    student3: false,
    student4: false,
  });

  const handleSubmit = () => {
    setAttendance({...attendance, ["student1"]: true})
    console.log('Attendance submitted:', attendance);
  };

  return(
    <div>
      <Grid container spacing={2}>
        {Object.keys(attendance).map((student) => (
          <Grid item xs={12} sm={6} md={4} key={student}>
            <AttendanceItem>
              <Typography variant="h6">
                {student.charAt(0).toUpperCase() + student.slice(1)}
              </Typography>
              <Checkbox
                checked={true}
                onChange={()=>{}}
                name={student}
                color="primary"
              />
            </AttendanceItem>
          </Grid>
        ))}
      </Grid>
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Submit Attendance
      </Button>
    </div>
  )
};

export default Attendance;