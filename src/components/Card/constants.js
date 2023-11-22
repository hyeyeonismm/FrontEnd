import category1 from '../../assets/images/category1.svg';
import category2 from '../../assets/images/category2.svg';
import category3 from '../../assets/images/category3.svg';
import category4 from '../../assets/images/category4.svg';
import category5 from '../../assets/images/category5.svg';
import category6 from '../../assets/images/category6.svg';
import category7 from '../../assets/images/category7.svg';
import category8 from '../../assets/images/category8.svg';
import category9 from '../../assets/images/category9.svg';
import category10 from '../../assets/images/category10.svg';

export const categoryImages = {
  '식비': category1,
  '패션/쇼핑': category2,
  '의료/건강': category3,
  '전기/전자': category4,
  '생활': category5,
  '문화/여가': category6,
  '교통': category7,
  '여행/숙박': category8,
  '교육/학습': category9,
  '금융': category10,
};

export const getCategoryColor = (category) => {
  switch (category) {
    case '식비':
      return '#FFE24A';
    case '패션/쇼핑':
      return '#AEB1FF';
    case '의료/건강':
      return '#4EC68C';
    case '전기/전자':
      return '#7392FF';
    case '생활':
      return '#FFB1B1';
    case '문화/여가':
      return '#B8B8B8';
    case '교통':
      return '#88BDE7';
    case '여행/숙박':
      return '#FF7979';
    case '교육/학습':
      return '#FFA943';
    case '금융':
      return '#8ED56C';
    default:
      return '#000000';
  }
};
