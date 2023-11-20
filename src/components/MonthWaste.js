import React, { useState } from 'react';
import arrowBefore from '../assets/images/arrowBefore.svg';
import arrowAfter from '../assets/images/arrowAfter.svg';
import { Grid, Button, Img } from '../components';

const MonthWaste = ({ wasteMonth, amount }) => {
    const [month, setMonth] = useState(wasteMonth); 

    const handleArrowBeforeClick = () => {
        const updatedMonth = month - 1;
        setMonth(updatedMonth);
	};
	
    const handleArrowAfterClick = () => {
        const updatedMonth = month + 1;
        setMonth(updatedMonth);
    };
    
    return(
        <>
        <Grid theme='cardDetailWrap'>
            <Button onClick={handleArrowBeforeClick}>
                <Img theme='arrowBeforeDetail' src={arrowBefore} alt='arrowBeforeDetail' />
            </Button>
            <Grid theme='cardDetailDescription'>{month}월 소비</Grid>
            <Button onClick={handleArrowAfterClick}>
                <Img theme='arrowAfterDetail' src={arrowAfter} alt='arrowAfterDetail' />
            </Button>
        </Grid>
        <Grid theme='cardDetailDescriptionSmall'>{amount}</Grid>

        </>
    );

}



export default MonthWaste;
