export default {
    source: ['../tokens/**/*.json'],
    platforms: {
        css: {
            transformGroup: 'css',
            buildPath: 'src/styles/',
            files: [{
                destination: 'tokens.generated.css',
                format: 'css/variables'
            }]
        },
        typescript: {
            transformGroup: 'js',
            buildPath: 'src/tokens/',
            files: [{
                destination: 'tokens.generated.ts',
                format: 'javascript/es6'
            }]
        }
    }
};
