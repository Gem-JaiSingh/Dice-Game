import styled from "styled-components";
// import {Button} from "../styled/Button";

const StartGame = ({ toggle }) => {
  return (
    <Container>
      <div>
        <img src="src/assets/dices.png" />
      </div>
      <div className="content">
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  max-width: 1180px;
  height: 100vh;
  display: flex;
  margin: 0 auto;
  align-items: center;

  .content {
    h1 {
      font-size: 96px;
      white-space: nowrap;
    }
  }
`;

const Button = styled.button`
  color: white;
  padding: 10px 18px;
  min-width: 220px;
  border-radius: 5px;
  background-color: #000000;
  font-size: 16px;
  border: 1px solid transparent;
  transition: 0.4s background ease-in;
  &:hover{
    background-color: white;
    color: black;
    border: 1px solid black;
    transition: 0.3s background ease-in;
    cursor: pointer;
  }
`;
