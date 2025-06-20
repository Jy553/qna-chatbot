

module.exports = function (customConfig) {
    const userAgent = [[`AWSSOLUTION/${process.env.SOLUTION_ID}/${process.env.SOLUTION_VERSION}`],
    [`AWSSOLUTION-CAPABILITY/${process.env.SOLUTION_ID}-C023/${process.env.SOLUTION_VERSION}`]];
    return {
        customUserAgent: userAgent,
        ...customConfig || {},
    };
};
