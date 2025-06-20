

const { CognitoIdentityClient, GetIdentityPoolRolesCommand, SetIdentityPoolRolesCommand } = require('@aws-sdk/client-cognito-identity');
const customSdkConfig = require('./util/customSdkConfig');

const region = process.env.AWS_REGION || 'us-east-1';
const cognito = new CognitoIdentityClient(customSdkConfig({ region }));

module.exports = class CognitoRole extends require('./base') {
    constructor() {
        super();
    }

    async Create(params, reply) {
        const RoleMappings = {};

        params.RoleMappings.map((x) => {
            const id = `cognito-idp.${process.env.AWS_REGION || 'us-east-1'}.amazonaws.com/${x.UserPool}:${x.ClientId}`;
            delete x.ClientId;
            delete x.UserPool;
            RoleMappings[id] = x;
        });
        try {
            const result = await cognito.send(new GetIdentityPoolRolesCommand({
                IdentityPoolId: params.IdentityPoolId,
            }));
            console.log(result);
            result.Roles = params.Roles;
            result.RoleMappings = RoleMappings;
            console.log(result);
            await cognito.send(new SetIdentityPoolRolesCommand(result));
            reply(null, 'RoleMapping');
        } catch (e) {
            reply(e);
        }
    }

    async Update(ID, params, oldparams, reply) {
        await this.Create(params, reply);
    }

    async Delete(ID, params, reply) {
        const ids = params.RoleMappings.map((x) => `cognito-idp.${process.env.AWS_REGION || 'us-east-1'}.amazonaws.com/${x.UserPool}:${x.ClientId}`);
        try {
            const result = await cognito.send(new GetIdentityPoolRolesCommand({
                IdentityPoolId: params.IdentityPoolId,
            }));
            console.log(result);
            ids.forEach((x) => {
                delete result.RoleMappings[x];
            });
            console.log(result);
            await cognito.send(new SetIdentityPoolRolesCommand(result));
            reply(null, 'RoleMapping');
        } catch (e) {
            reply(e);
        }
    }
};
