import React from 'react';

interface ITitleProps {
  children: string; // Изменил тип на string, так как вы хотите работать со словами
}

function Title({ children }: ITitleProps) {
  const words = children.split(' '); // Разделяем текст на отдельные слова

  if (words.length < 2) {
    // Проверяем, что у нас есть как минимум два слова
    return <h1 className="title">{children}</h1>;
  }

  const firstWord = words[0];
  const secondWord = words[1];

  return (
    <p className="title">
      <span>{firstWord}</span> {secondWord}
    </p>
  );
}

export default Title;
