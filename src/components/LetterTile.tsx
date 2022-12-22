import styled from "styled-components";

import { alphabetMap } from "../alphabet";

const LetterButton = styled.button`
  font-size: 2em;
  background: white;
  border: none;
  padding: 0.4em 0;
  background-color: #dbfdc5;
  cursor: pointer;

  :focus {
    background-color: #90e790;
  }
`;

export const LetterTile = (props: { letter: string }) => {
  const soundTitle = alphabetMap.get(props.letter);
  const sound = new Audio(`./sounds/${soundTitle}.mp3`);

  return (
    <LetterButton type="button" onClick={() => sound.play()}>
      <span>{props.letter.charAt(0).toUpperCase() + props.letter.slice(1)}</span>
    </LetterButton>
  );
};
