import styled from 'styled-components'
import TotalScore from './TotalScore'
import SelectNumber from './SelectNumber'
import RoleDice from './RoleDice'

const GamePlay = () => {
    const [selectedNumber, setSelectedNumber] = useState();
    const [currentDice, setCurrentDice] = useState(1);
  return (
    <MainContainer>
        <div className="top_section">
        <TotalScore/>
        <SelectNumber
         selectedNumber={selectedNumber}
         setSelectedNumber={setSelectedNumber}
         />
        </div>
        <RoleDice/>
    </MainContainer>
  )
}

export default GamePlay

const MainContainer = styled.main`
  padding-top: 70px;
  .top_section {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }
  .btns {
    margin-top: 40px;
    gap: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
`;