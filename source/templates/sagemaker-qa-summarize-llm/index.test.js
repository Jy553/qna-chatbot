

function create() {
    const file = `${__dirname}/`;
    return require(file);
}

it('renders sagemaker-qa-summarize-llm template correctly', () => {
    const template = create();
    expect(template).toMatchSnapshot();
});
