

module.exports = function (capability, customConfig) {
    const userAgent = [[`AWSSOLUTION/${process.env.SOLUTION_ID}/${process.env.SOLUTION_VERSION}`],
    [`AWSSOLUTION-CAPABILITY/${process.env.SOLUTION_ID}-${capability}/${process.env.SOLUTION_VERSION}`]];
    return {
        customUserAgent: userAgent,
        ...customConfig || {}
    };
}