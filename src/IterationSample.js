import React, { useState } from 'react';

const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, text: 'hi' },
    { id: 2, text: '아빠' },
    { id: 3, text: '안녕?' },
    { id: 4, text: '방가워잉' },
  ]);
  const [inputText, setInputText] = useState('');
  const [nextId, setNextId] = useState(5);

  const onChange = e => setInputText(e.target.value);
  const onClick = () => {
    const nextNames = names.concat({
      id: nextId,
      text: inputText,
    });
    setNextId(nextId + 1);
    setNames(nextNames);
    setInputText('');
  };
  const onRemove = id => {
    const nextNames = names.filter(name => name.id !== id);
    setNames(nextNames);
  };

  const nameList = names.map(name => (
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
      {name.text}
    </li>
  ));
  return (
    <>
      <input type="text" value={inputText} onChange={onChange} placeholder="여기에 암거나 적고 추가를 눌러보시오~" />
      <button type="button" onClick={onClick}>
        추가
      </button>
      <ul>{nameList}</ul>
      <span>리스트를 더블클릭하면 지워진당</span>
    </>
  );
};

export default IterationSample;
