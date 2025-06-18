

function create() {
    const file = `${__dirname}/`;
    return require(file);
}

it('renders bootstrap template correctly', () => {
    const template = create();
    expect(template).toMatchSnapshot({});
});
