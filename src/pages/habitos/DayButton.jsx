import { useState } from "react";
import styled from "styled-components";

function DayButton({ index, text, toggleDay, loading, active }) {

    const [clicked, setClicked] = useState(active);

    const dayButtonClick = () => {
        toggleDay(index);
        setClicked(lastCliked => !lastCliked);
    };

    return (
        <StyledDayButton clicked={clicked} onClick={dayButtonClick}
            disabled={loading} data-test="habit-day">{text}</StyledDayButton>
    )

}

const StyledDayButton = styled.button`
    margin-right: 4px;
    box-sizing: border-box;
    width: 30px;
    height: 30px;
    background: ${(props) => props.clicked ? '#CFCFCF' : '#FFFFFF'};
    border: ${(props) => props.clicked ? '1px solid #CFCFCF' : '1px solid #D5D5D5'};
    border-radius: 5px;
    font-size: 20px;
    line-height: 25px;
    color: ${(props) => props.clicked ? '#FFFFFF' : '#DBDBDB'};;
`

export default DayButton;