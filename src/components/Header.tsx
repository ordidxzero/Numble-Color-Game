import styled from "styled-components"

export const Header = () => {
    return (
        <Container>
            <TextBox>
                <p>스테이지: 1</p>
                <p>남은 시간: 0</p>
                <p>점수: 0</p>
            </TextBox>
        </Container>
    )
}

const Container = styled.header`

`
const TextBox = styled.div`
    display: flex;
    justify-content: center;
    p{
        margin: 3px 5px;
    }
`