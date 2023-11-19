import React, { useState } from 'react';
import arrowBefore from '../assets/images/arrowBefore.svg';
import arrowAfter from '../assets/images/arrowAfter.svg';
import { Grid, Button, Img } from '../components';

const MonthWaste = ({ wasteMonth, amount }) => {
    return(
        <>
        <Grid theme='cardDetailWrap'>
            <Button>
                <Img theme='arrowBeforeDetail' src={arrowBefore} alt='arrowBeforeDetail' />
            </Button>
            <Grid theme='cardDetailDescription'>{wasteMonth} 소비</Grid>
            <Button>
                <Img theme='arrowAfterDetail' src={arrowAfter} alt='arrowAfterDetail' />
            </Button>
        </Grid>
        <Grid theme='cardDetailDescriptionSmall'>{amount}</Grid>

        </>
    );

}



export default MonthWaste;
