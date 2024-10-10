'use client';
import { Suspense, memo } from 'react';
import SandpackRoot from './SandPackRoot';

export default memo(function SandpackWrapper(props: any) {

  return (
    <Suspense fallback={'...loading'}>
      <SandpackRoot {...props} />
    </Suspense>
  );
});
