import { useState } from "react"
import styled from "styled-components"

interface ComponentProps {
    stageNumber: number
}

export const GameBox = ({ stageNumber }: ComponentProps) => {
    const squareCount = Math.pow(Math.round((stageNumber + 0.5) / 2) + 1, 2);
    console.log(squareCount);

    return (
        <GameContainer>
            {Array.from({ length: squareCount }, (_, i) => (
                <GameSquare key={i} />
            ))}
        </GameContainer>
    )
}
const GameContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    width: 410px;
    height: 410px;
    margin: 10px auto;
`
const GameSquare = styled.div`
    width: 200px;
    height: 200px;
    margin: 2px;
    background-color: blue;
    cursor: pointer;
`