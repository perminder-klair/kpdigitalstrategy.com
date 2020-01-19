import React from 'react';
import BlockContent from '@sanity/block-content-to-react';
import config from '../utils/config';

const serializers = {
  types: {
    code: props => (
      <pre data-language={props.node.language}>
        <code>{props.node.code}</code>
      </pre>
    ),
  },
};

const Block = ({ input }) => {
  return <BlockContent blocks={input} serializers={serializers} />;
};

export default Block;
