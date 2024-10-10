import {
  Castle as IconOverview,
  Glasses as IconGlasses,
  DatabaseBackup,
  ArrowDown01,
  GitCompare,
  Shell,
  Microscope
} from 'lucide-react';
export type sourceRoutesType = {
  [key: string]: sourceRoutesItemType[];
};

export type sourceRoutesItemType = {
  title?: string;
  name?: string;
  path: string;
  collapsed?: boolean;
  icon?: any;
  items?: sourceRoutesItemType[];
};

const guide = [
  {
    name: 'Introduction',
    path: '/docs/guide/introduction',
    icon: IconOverview,
  },
  {
    name: 'Installation',
    path: '/docs/guide/install',
    icon: IconOverview,
  },
];

const internal = [
  {
    name: 'Type Conversion',
    path: '/docs/internal/typeConversion/toPrimitive',
    icon: IconOverview,
    collapsed: true,
    items: [
      {
        name: 'ToPrimitive',
        path: '/docs/internal/typeConversion/toPrimitive'
      },
    ]
  },
  {
    name: 'Comparison Operation',
    path: '/docs/internal/comparison/requireObjectCoercible',
    icon: DatabaseBackup,
    collapsed: false,
    items: [
      {
        name: 'RequireObjectCoercible',
        path: '/docs/internal/comparison/requireObjectCoercible'
      },
    ]
  }
];

const modules = [
  {
    name: 'Iteration',
    path: '/docs/modules/iteration',
    icon: Shell
  },
  {
    name: 'Promise',
    path: '/docs/modules/promise',
    icon: Microscope,
    collapsed: false,
    items: [
      {
        name: 'Promise Execute',
        collapsed: false,
        icon: '',
        path: '/docs/modules/promise/promiseExecute'
      },
      {
        name: 'Promise Abstract Operation',
        collapsed: false,
        icon: '',
        path: '/docs/modules/promise/promiseOperations'
      },
      {
        name: 'Promise Constructor',
        collapsed: false,
        icon: '',
        path: '/docs/modules/promise/promiseConstructor'
      },
      {
        name: 'Promise Job',
        collapsed: false,
        icon: '',
        path: '/docs/modules/promise/promiseJob'
      },
      {
        name: 'Property Promise Constructor',
        collapsed: false,
        icon: '',
        path: '/docs/modules/promise/propertyPromiseConstructor'
      },
      {
        name: 'Property Promise Prototype',
        collapsed: false,
        icon: '',
        path: '/docs/modules/promise/propertyPromisePrototype'
      }
    ]
  }
];

const toolkit = [
  {
    name: 'Global Object',
    path: '/docs/toolkit/global/value',
    icon: IconOverview,
    collapsed: false,
    items: [
      {
        name: 'Global Value',
        path: '/docs/toolkit/global/value'
      },
      {
        name: 'Global Function',
        path: '/docs/toolkit/global/function'
      },
      {
        name: 'Global Constructor',
        path: '/docs/toolkit/global/constructor'
      },
      {
        name: 'Global Other',
        path: '/docs/toolkit/global/other'
      }
    ]
  },
  {
    name: 'Fundamental Object',
    path: '/docs/toolkit/fundamental',
    icon: IconOverview,
    collapsed: false,
    items: [
      {
        name: 'Object Objects',
        path: '/docs/toolkit/fundamental/object'
      },
      {
        name: 'Function Objects',
        path: '/docs/toolkit/fundamental/function'
      },
      {
        name: 'Boolean Objects',
        path: '/docs/toolkit/fundamental/boolean'
      },
      {
        name: 'Symbol Objects',
        path: '/docs/toolkit/fundamental/symbol'
      },
      {
        name: 'Error Objects',
        path: '/docs/toolkit/fundamental/error'
      }
    ]
  },
  {
    name: 'Numbers Dates',
    path: '/docs/toolkit/numbers',
    icon: IconOverview,
    collapsed: false,
    items: [
      {
        name: 'Number Objects',
        path: '/docs/toolkit/numbers/number'
      },
      {
        name: 'Bigint Objects',
        path: '/docs/toolkit/numbers/bigint'
      },
      {
        name: 'Math Objects',
        path: '/docs/toolkit/numbers/math'
      },
      {
        name: 'Date Objects',
        path: '/docs/toolkit/numbers/date'
      }
    ]
  },
  {
    name: 'Text Processing',
    path: '/docs/toolkit/text',
    icon: IconOverview,
    collapsed: false,
    items: [
      {
        name: 'String Objects',
        path: '/docs/toolkit/text/string'
      },
      {
        name: 'RegExp Objects',
        path: '/docs/toolkit/text/regexp'
      }
    ]
  },
  {
    name: 'Indexed Collections',
    path: '/docs/toolkit/indexed',
    icon: IconOverview,
    collapsed: false,
    items: [
      {
        name: 'Array Objects',
        path: '/docs/toolkit/indexed/array'
      },
      {
        name: 'TypedArray Objects',
        path: '/docs/toolkit/indexed/typedArray'
      }
    ]
  },
  {
    name: 'Keyed Collections',
    path: '/docs/toolkit/keyed',
    icon: IconOverview,
    collapsed: false,
    items: [
      {
        name: 'Map Objects',
        path: '/docs/toolkit/keyed/map'
      },
      {
        name: 'Set Objects',
        path: '/docs/toolkit/keyed/set'
      },
      {
        name: 'Weakmap Objects',
        path: '/docs/toolkit/keyed/weakmap'
      },
      {
        name: 'Weakset Objects',
        path: '/docs/toolkit/keyed/weakset'
      }
    ]
  },
  {
    name: 'Structured Data',
    path: '/docs/toolkit/structured',
    icon: IconOverview,
    collapsed: false,
    items: [
      {
        name: 'ArrayBuffer Objects',
        path: '/docs/toolkit/structured/arrayBuffer'
      },
      {
        name: 'SharedArrayBuffer Objects',
        path: '/docs/toolkit/structured/sharedArrayBuffer'
      },
      {
        name: 'DataView Objects',
        path: '/docs/toolkit/structured/dataView'
      },
      {
        name: 'Atomic Objects',
        path: '/docs/toolkit/structured/atomic'
      },
      {
        name: 'JSON Objects',
        path: '/docs/toolkit/structured/json'
      }
    ]
  },
  {
    name: 'Control Abstraction Object',
    path: '/docs/toolkit/control',
    icon: IconOverview,
    collapsed: false,
    items: [
      {
        name: 'Iteration Objects',
        path: '/docs/toolkit/control/iteration'
      },
      {
        name: 'Promise Objects',
        path: '/docs/toolkit/control/promise'
      },
      {
        name: 'GeneratorFunction Objects',
        path: '/docs/toolkit/control/generatorFunction'
      },
      {
        name: 'AsyncGeneratorFunction Objects',
        path: '/docs/toolkit/control/asyncGeneratorFunction'
      },
      {
        name: 'Generator Object',
        path: '/docs/toolkit/control/generatorObject'
      },
      {
        name: 'AsyncGenerator Object',
        path: '/docs/toolkit/control/asyncGeneratorObject'
      },
      {
        name: 'AsyncFunction Object',
        path: '/docs/toolkit/control/asyncFunction'
      }
    ]
  },
  {
    name: 'Reflection',
    path: '/docs/toolkit/reflection',
    icon: IconOverview,
    collapsed: false,
    items: [
      {
        name: 'Reflect Objects',
        path: '/docs/toolkit/reflection/reflect'
      },
      {
        name: 'Proxy Objects',
        path: '/docs/toolkit/reflection/proxy'
      },
      {
        name: 'Module Namespace Objects',
        path: '/docs/toolkit/reflection/namespace'
      }
    ]
  }
];

export const sourceRoutes: sourceRoutesType = {
  guide,
  internal,
  modules,
  toolkit
};
