import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'http://localhost:4013/api/graphql',
  documents: [
    'src/**/mutations.ts',
    'src/**/queries.ts',
    'src/**/subscriptions.ts',
    'src/**/fragments.ts',
  ],
  generates: {
    'src/graphql/generated/index.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
      ],
      config: {
        reactApolloVersion: 3,

        useIndexSignature: true,
        namingConvention: {
          typeNames: 'change-case-all#pascalCase', // PascalCase
          enumValues: 'change-case-all#upperCase', // UPPERCASE
        },
      },
    },
  },
  hooks: {
    afterAllFileWrite: ['prettier --write'],
  },
};

export default config;
