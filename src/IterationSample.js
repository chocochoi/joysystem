import React from 'react';

const IterationSample = () => {
  const daddy = ['아빠', '안녕', '위에 링크를 누르면', '페이지 이동하는거얌'];
  const daddyList = daddy.map((txt, index) => <li key={index}>{txt}</li>);
  return <ul>{daddyList}</ul>;
};

export default IterationSample;
