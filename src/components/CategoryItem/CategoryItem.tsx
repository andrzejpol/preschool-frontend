import styled from 'styled-components';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import {NavLink} from "react-router-dom";

const CategoryItemWrapper = styled(Paper)`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid black;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: greenyellow;
  height: 300px;
`;

const CategoryItem = ({ title, linkTo }:{title:string, linkTo: string}) => (
  <NavLink to={linkTo}>
    <CategoryItemWrapper>
      <Typography variant={"h4"}>{title}</Typography>
    </CategoryItemWrapper>
  </NavLink>
);

export default CategoryItem;
