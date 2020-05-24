import React, { FC } from 'react';

import { IProps } from './interface';
import { StyledSlider } from './styles';

export const SlickSlider: FC<IProps> = (props) => {
  const {
    children,
    dots = false,
    speed = 500,
    slidesToShow = 1,
    slidesToScroll = 1,
    ...restProps
  } = props;

  return (
    <StyledSlider
      dots={dots}
      infinite
      speed={speed}
      slidesToShow={slidesToShow}
      slidesToScroll={slidesToScroll}
      
      {...restProps}
    >
      {children}
    </StyledSlider>
  );
};
