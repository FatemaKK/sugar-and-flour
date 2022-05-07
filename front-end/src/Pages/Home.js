import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
height: 80px;
background-color: 
`

function Home() {
  return (
    <Container>
      <img src="https://i.pinimg.com/474x/ee/60/03/ee600303b0b20ed8526978b9f524db01.jpg" />
      <img src="https://i.pinimg.com/564x/45/42/95/454295b0dc8e2fead12dbbce74c31533.jpg" />
      <Link to="/bakedItems">
        <h1>Sometimes Your Best Day Involves Something 'SWEET'!</h1>
      </Link>
      <img src="https://i.pinimg.com/564x/bb/5b/67/bb5b6784455590353df9ddb560fe1ba2.jpg" />
      <img src="https://i.pinimg.com/564x/f2/71/3c/f2713cf8fd11f68add428e7c23a769f0.jpg" />
    </Container>
  );
}

export default Home;
