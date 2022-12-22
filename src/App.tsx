import styled from "styled-components";

import { alphabet } from "./alphabet";
import { LetterTile as L } from "./components/LetterTile";

const Header = styled.header`
  text-align: center;
  padding: 1em 0;
`

const Container = styled.div`
  background-color: #f5f8f9;
  min-height: 100vh;
  padding-bottom: 2em;
`;

const InnerContainer = styled.div`
  max-width: 414px;
  margin: 0 auto;
  padding: 0.4em;
`;

const AlphabetContainer = styled.div`
  display: grid;
  grid-template-columns: 24% 24% 24% 24%;
  row-gap: 4px;
  column-gap: 4px;
`;

function App() {
  return (
    <Container>
      <InnerContainer>
        <Header>A magyar ábécé</Header>
        <main>
          <AlphabetContainer>
            {alphabet.map((l) => (
              <L letter={l} key={l} />
            ))}
          </AlphabetContainer>
        </main>
      </InnerContainer>
    </Container>
  );
}

export default App;
