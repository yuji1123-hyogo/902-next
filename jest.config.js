module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
     setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    moduleNameMapper: {
        '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    },
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
        '^.+\\.(js|jsx)$': ['babel-jest', { presets: ['next/babel'] }],
    },
    globals: {
        'ts-jest': {
            tsconfig: {
                jsx: 'react-jsx',
            },
        },
    },
};
