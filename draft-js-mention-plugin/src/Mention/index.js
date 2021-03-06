import React from 'react';
import { Entity } from 'draft-js';

const Mention = (props) => {
  const { entityKey, theme } = props;
  const { mention } = Entity.get(entityKey).getData();

  if (mention.has('link')) {
    return (
      <a
        href={ mention.get('link') }
        className={ theme.get('mention') }
        spellCheck={ false }
      >
        { props.children }
      </a>
    );
  }

  return (
    <span
      className={ theme.get('mention') }
      spellCheck={ false }
    >
      { props.children }
    </span>
  );
};

export default Mention;
