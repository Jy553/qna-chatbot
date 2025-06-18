

function create() {
    const file = `${__dirname}/`;
    return require(file);
}

it('renders testall template correctly', () => {
    const template = create();
    expect(template).toMatchSnapshot({
        Resources: {
            TestAllCodeVersion: {
                Properties: {
                    BuildDate: expect.any(String),
                },
            },
        },
    });
});
