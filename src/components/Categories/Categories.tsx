import CategoryItem from '../CategoryItem';
import styled from "styled-components";

type CategoryType = {
  id: number;
  title: string;
  linkTo: string;
};

const Container = styled.div`
  display: grid;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

const Categories = () => {
  const categories: CategoryType[] = [
    { id: 1, title: 'Dashboard', linkTo: "/dashboard" },
    { id: 2, title: 'Attendance', linkTo: "/attendance" },
    { id: 3, title: 'Parents', linkTo: "/parents" },
    { id: 4, title: 'Teachers', linkTo: "/teachers" },
    { id: 5, title: 'Students', linkTo: "/students" },
    { id: 6, title: 'Classes', linkTo: "/classes" },
  ];

  return (
    <Container>
      {categories.map(({title,linkTo}) => (
        <CategoryItem title={title} linkTo={linkTo}/>
      ))}
    </Container>
  );
};

export default Categories;
