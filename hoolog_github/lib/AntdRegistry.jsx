'use client';

import React from 'react';
import PropTypes from 'prop-types';
import { createCache, extractStyle, StyleProvider } from '@ant-design/cssinjs/lib';
import { useServerInsertedHTML } from 'next/navigation';

export default function StyledComponentsRegistry ({ children }) {
  const cache = React.useMemo(() => createCache(), []);
  useServerInsertedHTML(() => (
    <style id="antd" dangerouslySetInnerHTML={ { __html: extractStyle(cache, true) } } />
  ));
  return <StyleProvider cache={ cache }>{ children }</StyleProvider>;
};
