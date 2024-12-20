'use client';
import { Sandpack } from '@codesandbox/sandpack-react';
import { createFileMap, createDependencyMap } from './createFileMap';
import { Children } from 'react';

type SandpackProps = {
  children: React.ReactNode;
  autorun?: boolean;
  showDevTools?: boolean;
};

export default function SandpackRoot(props: SandpackProps) {
  const { children } = props;
  const codeSnippets = Children.toArray(children) as React.ReactElement[];
  const files = createFileMap(codeSnippets);
  const depMap = createDependencyMap();

  files['/styles.css'] = {
    code: [files['/styles.css']?.code ?? ''].join('\n\n'),
    hidden: !files['/styles.css']?.visible
  };

  return (
    <div className='w-full my-8'>
      <Sandpack
        theme={'light'}
        files={files}
        template='vanilla'
        customSetup={{
          dependencies: depMap
        }}
        options={{
          showTabs: false,
          layout: "console"
        }}
        {...props}
      />
    </div>
  );
}
