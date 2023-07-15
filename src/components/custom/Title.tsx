import React from 'react';
import { motion } from 'framer-motion';

interface ITitleProps {
  children: string;
}

function Title({ children }: ITitleProps) {
  const words = children.split(' ');

  if (words.length < 2) {
    return <h1 className="title">{children}</h1>;
  }

  const firstWord = words[0];
  const secondWord = words[1];

  return (
    <motion.p
      className="title"
      initial="hidden"
      viewport={{ once: true }}
      whileInView="visible"
      transition={{ duration: 1 }}
      variants={{
        hidden: {
          opacity: 0,
          y: -20,
        },
        visible: {
          opacity: 1,
          y: 0,
        },
      }}>
      <span>{firstWord}</span> {secondWord}
    </motion.p>
  );
}

export default Title;
