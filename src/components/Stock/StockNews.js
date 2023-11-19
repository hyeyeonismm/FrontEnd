import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import ApexChart from 'react-apexcharts';
import { Grid, Img, Button } from '../index';

function StockNews() {
	return (
		<>
			<Grid theme='news_body'>
				<Grid theme='newsFont'>뉴스</Grid>
				<Button theme='newsBtn'>자본엔 '코로나 19로 조선 타격 가장 커'</Button>
				<Button theme='newsBtn'>자본엔 '코로나 19로 조선 타격 가장 커'</Button>
				<Button theme='newsBtn'>자본엔 '코로나 19로 조선 타격 가장 커'</Button>
				<Button theme='newsBtn'>자본엔 '코로나 19로 조선 타격 가장 커'</Button>
				<Button theme='newsBtn'>자본엔 '코로나 19로 조선 타격 가장 커'</Button>
			</Grid>
		</>
	);
}
export default StockNews;
