import React from 'react';
import styled, { css } from '@/utils/styled-px2vw';
import AsyncValidator from 'async-validator';

function FormItem(props) {
  // const { type = 'primary' } = props;
  // const { disabled = false } = props;
  console.log(props);
  return <>{props.children}</>;
}

export default FormItem;
