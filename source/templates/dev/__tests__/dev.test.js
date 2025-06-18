

const templateFiles = ['api', 'cognito', 'lambda'];

function create(filename) {
    const file = `../${filename}`;
    return require(file);
}

describe('dev templates', () => {
    it('renders dev templates correctly', () => {
        templateFiles.forEach((template) => {
            const templateFile = create(template);
            expect(templateFile).toMatchSnapshot({});
        });
    });
});
