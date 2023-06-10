import { useEffect, useState } from "react"
import styled from "styled-components"
interface ComponentProps {
    stageNumber: number
}
export const Header = ({ stageNumber }: ComponentProps) => {
    const [timer, setTimer] = useState(15);
    useEffect(() => {
        // 설정된 시간 간격마다 setInterval 콜백이 실행된다. 
        const id = setInterval(() => {
            // 타이머 숫자가 하나씩 줄어들도록
            setTimer((timer) => timer - 1);
        }, 1000);

        // 0이 되면 카운트가 멈춤
        if (timer === 0) {
            alert("끝");
            clearInterval(id);
        }
        return () => clearInterval(id);
        // 카운트 변수가 바뀔때마다 useEffect 실행
    }, [timer])
    return (
        <Container>
            <TextBox>
                <p>스테이지: {stageNumber}</p>
                <p>남은 시간: {timer}</p>
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