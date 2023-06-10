import { useState } from "react"
import styled from "styled-components"

export const GameBox = () => {
    //Math.pow(Math.round((stage + 0.5) / 2) + 1, 2)
    return (
        <GameContainer>
            <GameSquare></GameSquare>
            <GameSquare></GameSquare>
            <GameSquare></GameSquare>
            <GameSquare></GameSquare>
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