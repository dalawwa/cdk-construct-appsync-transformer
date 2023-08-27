# replace this
# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppSyncTransformer <a name="AppSyncTransformer" id="appsync-transformer.AppSyncTransformer"></a>

AppSyncTransformer Construct.

#### Initializers <a name="Initializers" id="appsync-transformer.AppSyncTransformer.Initializer"></a>

```typescript
import { AppSyncTransformer } from 'appsync-transformer'

new AppSyncTransformer(scope: Construct, id: string, props: AppSyncTransformerProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appsync-transformer.AppSyncTransformer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#appsync-transformer.AppSyncTransformer.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#appsync-transformer.AppSyncTransformer.Initializer.parameter.props">props</a></code> | <code><a href="#appsync-transformer.AppSyncTransformerProps">AppSyncTransformerProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="appsync-transformer.AppSyncTransformer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="appsync-transformer.AppSyncTransformer.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="appsync-transformer.AppSyncTransformer.Initializer.parameter.props"></a>

- *Type:* <a href="#appsync-transformer.AppSyncTransformerProps">AppSyncTransformerProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#appsync-transformer.AppSyncTransformer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#appsync-transformer.AppSyncTransformer.addDynamoDBStream">addDynamoDBStream</a></code> | Adds a stream to the dynamodb table associated with the type. |
| <code><a href="#appsync-transformer.AppSyncTransformer.addLambdaDataSourceAndResolvers">addLambdaDataSourceAndResolvers</a></code> | Adds the function as a lambdaDataSource to the AppSync api Adds all of the functions resolvers to the AppSync api. |
| <code><a href="#appsync-transformer.AppSyncTransformer.grantPrivate">grantPrivate</a></code> | Adds an IAM policy statement granting access to the private fields of the AppSync API. |
| <code><a href="#appsync-transformer.AppSyncTransformer.grantPublic">grantPublic</a></code> | Adds an IAM policy statement granting access to the public fields of the AppSync API. |
| <code><a href="#appsync-transformer.AppSyncTransformer.overrideResolver">overrideResolver</a></code> | Allows for overriding the generated request and response mapping templates. |

---

##### `toString` <a name="toString" id="appsync-transformer.AppSyncTransformer.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addDynamoDBStream` <a name="addDynamoDBStream" id="appsync-transformer.AppSyncTransformer.addDynamoDBStream"></a>

```typescript
public addDynamoDBStream(props: DynamoDBStreamProps): string
```

Adds a stream to the dynamodb table associated with the type.

###### `props`<sup>Required</sup> <a name="props" id="appsync-transformer.AppSyncTransformer.addDynamoDBStream.parameter.props"></a>

- *Type:* <a href="#appsync-transformer.DynamoDBStreamProps">DynamoDBStreamProps</a>

---

##### `addLambdaDataSourceAndResolvers` <a name="addLambdaDataSourceAndResolvers" id="appsync-transformer.AppSyncTransformer.addLambdaDataSourceAndResolvers"></a>

```typescript
public addLambdaDataSourceAndResolvers(functionName: string, id: string, lambdaFunction: IFunction, options?: DataSourceOptions): LambdaDataSource
```

Adds the function as a lambdaDataSource to the AppSync api Adds all of the functions resolvers to the AppSync api.

###### `functionName`<sup>Required</sup> <a name="functionName" id="appsync-transformer.AppSyncTransformer.addLambdaDataSourceAndResolvers.parameter.functionName"></a>

- *Type:* string

The function name specified in the.

---

###### `id`<sup>Required</sup> <a name="id" id="appsync-transformer.AppSyncTransformer.addLambdaDataSourceAndResolvers.parameter.id"></a>

- *Type:* string

The id to give.

---

###### `lambdaFunction`<sup>Required</sup> <a name="lambdaFunction" id="appsync-transformer.AppSyncTransformer.addLambdaDataSourceAndResolvers.parameter.lambdaFunction"></a>

- *Type:* aws-cdk-lib.aws_lambda.IFunction

The lambda function to attach.

---

###### `options`<sup>Optional</sup> <a name="options" id="appsync-transformer.AppSyncTransformer.addLambdaDataSourceAndResolvers.parameter.options"></a>

- *Type:* aws-cdk-lib.aws_appsync.DataSourceOptions

---

##### `grantPrivate` <a name="grantPrivate" id="appsync-transformer.AppSyncTransformer.grantPrivate"></a>

```typescript
public grantPrivate(grantee: IGrantable): Grant
```

Adds an IAM policy statement granting access to the private fields of the AppSync API.

Policy is based off of the @auth transformer
https://docs.amplify.aws/cli/graphql-transformer/auth

###### `grantee`<sup>Required</sup> <a name="grantee" id="appsync-transformer.AppSyncTransformer.grantPrivate.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

---

##### `grantPublic` <a name="grantPublic" id="appsync-transformer.AppSyncTransformer.grantPublic"></a>

```typescript
public grantPublic(grantee: IGrantable): Grant
```

Adds an IAM policy statement granting access to the public fields of the AppSync API.

Policy is based off of the @auth transformer
https://docs.amplify.aws/cli/graphql-transformer/auth

###### `grantee`<sup>Required</sup> <a name="grantee" id="appsync-transformer.AppSyncTransformer.grantPublic.parameter.grantee"></a>

- *Type:* aws-cdk-lib.aws_iam.IGrantable

The principal to grant access to.

---

##### `overrideResolver` <a name="overrideResolver" id="appsync-transformer.AppSyncTransformer.overrideResolver"></a>

```typescript
public overrideResolver(props: OverrideResolverProps): void
```

Allows for overriding the generated request and response mapping templates.

###### `props`<sup>Required</sup> <a name="props" id="appsync-transformer.AppSyncTransformer.overrideResolver.parameter.props"></a>

- *Type:* <a href="#appsync-transformer.OverrideResolverProps">OverrideResolverProps</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#appsync-transformer.AppSyncTransformer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="appsync-transformer.AppSyncTransformer.isConstruct"></a>

```typescript
import { AppSyncTransformer } from 'appsync-transformer'

AppSyncTransformer.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="appsync-transformer.AppSyncTransformer.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appsync-transformer.AppSyncTransformer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#appsync-transformer.AppSyncTransformer.property.appsyncAPI">appsyncAPI</a></code> | <code>aws-cdk-lib.aws_appsync.GraphqlApi</code> | The cdk GraphqlApi construct. |
| <code><a href="#appsync-transformer.AppSyncTransformer.property.functionResolvers">functionResolvers</a></code> | <code>{[ key: string ]: <a href="#appsync-transformer.CdkTransformerFunctionResolver">CdkTransformerFunctionResolver</a>[]}</code> | The Lambda Function resolvers designated by the function directive https://github.com/kcwinner/cdk-appsync-transformer#functions. |
| <code><a href="#appsync-transformer.AppSyncTransformer.property.httpResolvers">httpResolvers</a></code> | <code>{[ key: string ]: <a href="#appsync-transformer.CdkTransformerHttpResolver">CdkTransformerHttpResolver</a>[]}</code> | *No description.* |
| <code><a href="#appsync-transformer.AppSyncTransformer.property.nestedAppsyncStack">nestedAppsyncStack</a></code> | <code>aws-cdk-lib.NestedStack</code> | The NestedStack that contains the AppSync resources. |
| <code><a href="#appsync-transformer.AppSyncTransformer.property.outputs">outputs</a></code> | <code><a href="#appsync-transformer.SchemaTransformerOutputs">SchemaTransformerOutputs</a></code> | The outputs from the SchemaTransformer. |
| <code><a href="#appsync-transformer.AppSyncTransformer.property.resolvers">resolvers</a></code> | <code>{[ key: string ]: <a href="#appsync-transformer.CdkTransformerResolver">CdkTransformerResolver</a>}</code> | The AppSync resolvers from the transformer minus any function resolvers. |
| <code><a href="#appsync-transformer.AppSyncTransformer.property.tableMap">tableMap</a></code> | <code>{[ key: string ]: aws-cdk-lib.aws_dynamodb.Table}</code> | Map of cdk table keys to L2 Table e.g. { 'TaskTable': Table }. |
| <code><a href="#appsync-transformer.AppSyncTransformer.property.tableNameMap">tableNameMap</a></code> | <code>{[ key: string ]: string}</code> | Map of cdk table tokens to table names. |

---

##### `node`<sup>Required</sup> <a name="node" id="appsync-transformer.AppSyncTransformer.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `appsyncAPI`<sup>Required</sup> <a name="appsyncAPI" id="appsync-transformer.AppSyncTransformer.property.appsyncAPI"></a>

```typescript
public readonly appsyncAPI: GraphqlApi;
```

- *Type:* aws-cdk-lib.aws_appsync.GraphqlApi

The cdk GraphqlApi construct.

---

##### `functionResolvers`<sup>Required</sup> <a name="functionResolvers" id="appsync-transformer.AppSyncTransformer.property.functionResolvers"></a>

```typescript
public readonly functionResolvers: {[ key: string ]: CdkTransformerFunctionResolver[]};
```

- *Type:* {[ key: string ]: <a href="#appsync-transformer.CdkTransformerFunctionResolver">CdkTransformerFunctionResolver</a>[]}

The Lambda Function resolvers designated by the function directive https://github.com/kcwinner/cdk-appsync-transformer#functions.

---

##### `httpResolvers`<sup>Required</sup> <a name="httpResolvers" id="appsync-transformer.AppSyncTransformer.property.httpResolvers"></a>

```typescript
public readonly httpResolvers: {[ key: string ]: CdkTransformerHttpResolver[]};
```

- *Type:* {[ key: string ]: <a href="#appsync-transformer.CdkTransformerHttpResolver">CdkTransformerHttpResolver</a>[]}

---

##### `nestedAppsyncStack`<sup>Required</sup> <a name="nestedAppsyncStack" id="appsync-transformer.AppSyncTransformer.property.nestedAppsyncStack"></a>

```typescript
public readonly nestedAppsyncStack: NestedStack;
```

- *Type:* aws-cdk-lib.NestedStack

The NestedStack that contains the AppSync resources.

---

##### `outputs`<sup>Required</sup> <a name="outputs" id="appsync-transformer.AppSyncTransformer.property.outputs"></a>

```typescript
public readonly outputs: SchemaTransformerOutputs;
```

- *Type:* <a href="#appsync-transformer.SchemaTransformerOutputs">SchemaTransformerOutputs</a>

The outputs from the SchemaTransformer.

---

##### `resolvers`<sup>Required</sup> <a name="resolvers" id="appsync-transformer.AppSyncTransformer.property.resolvers"></a>

```typescript
public readonly resolvers: {[ key: string ]: CdkTransformerResolver};
```

- *Type:* {[ key: string ]: <a href="#appsync-transformer.CdkTransformerResolver">CdkTransformerResolver</a>}

The AppSync resolvers from the transformer minus any function resolvers.

---

##### `tableMap`<sup>Required</sup> <a name="tableMap" id="appsync-transformer.AppSyncTransformer.property.tableMap"></a>

```typescript
public readonly tableMap: {[ key: string ]: Table};
```

- *Type:* {[ key: string ]: aws-cdk-lib.aws_dynamodb.Table}

Map of cdk table keys to L2 Table e.g. { 'TaskTable': Table }.

---

##### `tableNameMap`<sup>Required</sup> <a name="tableNameMap" id="appsync-transformer.AppSyncTransformer.property.tableNameMap"></a>

```typescript
public readonly tableNameMap: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Map of cdk table tokens to table names.

---


## Structs <a name="Structs" id="Structs"></a>

### AppSyncTransformerProps <a name="AppSyncTransformerProps" id="appsync-transformer.AppSyncTransformerProps"></a>

#### Initializer <a name="Initializer" id="appsync-transformer.AppSyncTransformerProps.Initializer"></a>

```typescript
import { AppSyncTransformerProps } from 'appsync-transformer'

const appSyncTransformerProps: AppSyncTransformerProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appsync-transformer.AppSyncTransformerProps.property.schemaPath">schemaPath</a></code> | <code>string</code> | Relative path where schema.graphql exists. |
| <code><a href="#appsync-transformer.AppSyncTransformerProps.property.apiName">apiName</a></code> | <code>string</code> | String value representing the api name. |
| <code><a href="#appsync-transformer.AppSyncTransformerProps.property.authorizationConfig">authorizationConfig</a></code> | <code>aws-cdk-lib.aws_appsync.AuthorizationConfig</code> | Optional. |
| <code><a href="#appsync-transformer.AppSyncTransformerProps.property.customVtlTransformerRootDirectory">customVtlTransformerRootDirectory</a></code> | <code>string</code> | The root directory to use for finding custom resolvers. |
| <code><a href="#appsync-transformer.AppSyncTransformerProps.property.dynamoDbStreamConfig">dynamoDbStreamConfig</a></code> | <code>{[ key: string ]: aws-cdk-lib.aws_dynamodb.StreamViewType}</code> | A map of @model type names to stream view type e.g { Blog: StreamViewType.NEW_IMAGE }. |
| <code><a href="#appsync-transformer.AppSyncTransformerProps.property.enableDynamoPointInTimeRecovery">enableDynamoPointInTimeRecovery</a></code> | <code>boolean</code> | Whether to enable dynamo Point In Time Recovery. |
| <code><a href="#appsync-transformer.AppSyncTransformerProps.property.fieldLogLevel">fieldLogLevel</a></code> | <code>aws-cdk-lib.aws_appsync.FieldLogLevel</code> | Optional. |
| <code><a href="#appsync-transformer.AppSyncTransformerProps.property.nestedStackName">nestedStackName</a></code> | <code>string</code> | Specify a custom nested stack name. |
| <code><a href="#appsync-transformer.AppSyncTransformerProps.property.outputPath">outputPath</a></code> | <code>string</code> | Path where generated resolvers are output. |
| <code><a href="#appsync-transformer.AppSyncTransformerProps.property.postCdkTransformers">postCdkTransformers</a></code> | <code>any[]</code> | Optional. |
| <code><a href="#appsync-transformer.AppSyncTransformerProps.property.preCdkTransformers">preCdkTransformers</a></code> | <code>any[]</code> | Optional. |
| <code><a href="#appsync-transformer.AppSyncTransformerProps.property.syncEnabled">syncEnabled</a></code> | <code>boolean</code> | Whether to enable Amplify DataStore and Sync Tables. |
| <code><a href="#appsync-transformer.AppSyncTransformerProps.property.tableNames">tableNames</a></code> | <code>{[ key: string ]: string}</code> | A map of names to specify the generated dynamo table names instead of auto generated names. |
| <code><a href="#appsync-transformer.AppSyncTransformerProps.property.xrayEnabled">xrayEnabled</a></code> | <code>boolean</code> | Determines whether xray should be enabled on the AppSync API. |

---

##### `schemaPath`<sup>Required</sup> <a name="schemaPath" id="appsync-transformer.AppSyncTransformerProps.property.schemaPath"></a>

```typescript
public readonly schemaPath: string;
```

- *Type:* string

Relative path where schema.graphql exists.

---

##### `apiName`<sup>Optional</sup> <a name="apiName" id="appsync-transformer.AppSyncTransformerProps.property.apiName"></a>

```typescript
public readonly apiName: string;
```

- *Type:* string
- *Default:* `${id}-api`

String value representing the api name.

---

##### `authorizationConfig`<sup>Optional</sup> <a name="authorizationConfig" id="appsync-transformer.AppSyncTransformerProps.property.authorizationConfig"></a>

```typescript
public readonly authorizationConfig: AuthorizationConfig;
```

- *Type:* aws-cdk-lib.aws_appsync.AuthorizationConfig
- *Default:* API_KEY authorization config

Optional.

{@link AuthorizationConfig} type defining authorization for AppSync GraphqlApi. Defaults to API_KEY

---

##### `customVtlTransformerRootDirectory`<sup>Optional</sup> <a name="customVtlTransformerRootDirectory" id="appsync-transformer.AppSyncTransformerProps.property.customVtlTransformerRootDirectory"></a>

```typescript
public readonly customVtlTransformerRootDirectory: string;
```

- *Type:* string
- *Default:* process.cwd()

The root directory to use for finding custom resolvers.

---

##### `dynamoDbStreamConfig`<sup>Optional</sup> <a name="dynamoDbStreamConfig" id="appsync-transformer.AppSyncTransformerProps.property.dynamoDbStreamConfig"></a>

```typescript
public readonly dynamoDbStreamConfig: {[ key: string ]: StreamViewType};
```

- *Type:* {[ key: string ]: aws-cdk-lib.aws_dynamodb.StreamViewType}

A map of @model type names to stream view type e.g { Blog: StreamViewType.NEW_IMAGE }.

---

##### `enableDynamoPointInTimeRecovery`<sup>Optional</sup> <a name="enableDynamoPointInTimeRecovery" id="appsync-transformer.AppSyncTransformerProps.property.enableDynamoPointInTimeRecovery"></a>

```typescript
public readonly enableDynamoPointInTimeRecovery: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to enable dynamo Point In Time Recovery.

Default to false for backwards compatibility

---

##### `fieldLogLevel`<sup>Optional</sup> <a name="fieldLogLevel" id="appsync-transformer.AppSyncTransformerProps.property.fieldLogLevel"></a>

```typescript
public readonly fieldLogLevel: FieldLogLevel;
```

- *Type:* aws-cdk-lib.aws_appsync.FieldLogLevel
- *Default:* FieldLogLevel.NONE

Optional.

{@link FieldLogLevel} type for AppSync GraphqlApi log level

---

##### `nestedStackName`<sup>Optional</sup> <a name="nestedStackName" id="appsync-transformer.AppSyncTransformerProps.property.nestedStackName"></a>

```typescript
public readonly nestedStackName: string;
```

- *Type:* string
- *Default:* "appsync-nested-stack"

Specify a custom nested stack name.

---

##### `outputPath`<sup>Optional</sup> <a name="outputPath" id="appsync-transformer.AppSyncTransformerProps.property.outputPath"></a>

```typescript
public readonly outputPath: string;
```

- *Type:* string
- *Default:* "./appsync"

Path where generated resolvers are output.

---

##### `postCdkTransformers`<sup>Optional</sup> <a name="postCdkTransformers" id="appsync-transformer.AppSyncTransformerProps.property.postCdkTransformers"></a>

```typescript
public readonly postCdkTransformers: any[];
```

- *Type:* any[]
- *Default:* undefined

Optional.

Additonal custom transformers to run after the CDK resource generations.
Mostly useful for deep level customization of the generated CDK CloudFormation resources.
These should extend Transformer class from graphql-transformer-core

---

##### `preCdkTransformers`<sup>Optional</sup> <a name="preCdkTransformers" id="appsync-transformer.AppSyncTransformerProps.property.preCdkTransformers"></a>

```typescript
public readonly preCdkTransformers: any[];
```

- *Type:* any[]
- *Default:* undefined

Optional.

Additonal custom transformers to run prior to the CDK resource generations.
Particularly useful for custom directives.
These should extend Transformer class from graphql-transformer-core

---

##### `syncEnabled`<sup>Optional</sup> <a name="syncEnabled" id="appsync-transformer.AppSyncTransformerProps.property.syncEnabled"></a>

```typescript
public readonly syncEnabled: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to enable Amplify DataStore and Sync Tables.

---

##### `tableNames`<sup>Optional</sup> <a name="tableNames" id="appsync-transformer.AppSyncTransformerProps.property.tableNames"></a>

```typescript
public readonly tableNames: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* undefined

A map of names to specify the generated dynamo table names instead of auto generated names.

---

##### `xrayEnabled`<sup>Optional</sup> <a name="xrayEnabled" id="appsync-transformer.AppSyncTransformerProps.property.xrayEnabled"></a>

```typescript
public readonly xrayEnabled: boolean;
```

- *Type:* boolean
- *Default:* false

Determines whether xray should be enabled on the AppSync API.

---

### CdkTransformerFunctionResolver <a name="CdkTransformerFunctionResolver" id="appsync-transformer.CdkTransformerFunctionResolver"></a>

#### Initializer <a name="Initializer" id="appsync-transformer.CdkTransformerFunctionResolver.Initializer"></a>

```typescript
import { CdkTransformerFunctionResolver } from 'appsync-transformer'

const cdkTransformerFunctionResolver: CdkTransformerFunctionResolver = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appsync-transformer.CdkTransformerFunctionResolver.property.fieldName">fieldName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#appsync-transformer.CdkTransformerFunctionResolver.property.typeName">typeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#appsync-transformer.CdkTransformerFunctionResolver.property.defaultRequestMappingTemplate">defaultRequestMappingTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#appsync-transformer.CdkTransformerFunctionResolver.property.defaultResponseMappingTemplate">defaultResponseMappingTemplate</a></code> | <code>string</code> | *No description.* |

---

##### `fieldName`<sup>Required</sup> <a name="fieldName" id="appsync-transformer.CdkTransformerFunctionResolver.property.fieldName"></a>

```typescript
public readonly fieldName: string;
```

- *Type:* string

---

##### `typeName`<sup>Required</sup> <a name="typeName" id="appsync-transformer.CdkTransformerFunctionResolver.property.typeName"></a>

```typescript
public readonly typeName: string;
```

- *Type:* string

---

##### `defaultRequestMappingTemplate`<sup>Required</sup> <a name="defaultRequestMappingTemplate" id="appsync-transformer.CdkTransformerFunctionResolver.property.defaultRequestMappingTemplate"></a>

```typescript
public readonly defaultRequestMappingTemplate: string;
```

- *Type:* string

---

##### `defaultResponseMappingTemplate`<sup>Required</sup> <a name="defaultResponseMappingTemplate" id="appsync-transformer.CdkTransformerFunctionResolver.property.defaultResponseMappingTemplate"></a>

```typescript
public readonly defaultResponseMappingTemplate: string;
```

- *Type:* string

---

### CdkTransformerGlobalSecondaryIndex <a name="CdkTransformerGlobalSecondaryIndex" id="appsync-transformer.CdkTransformerGlobalSecondaryIndex"></a>

#### Initializer <a name="Initializer" id="appsync-transformer.CdkTransformerGlobalSecondaryIndex.Initializer"></a>

```typescript
import { CdkTransformerGlobalSecondaryIndex } from 'appsync-transformer'

const cdkTransformerGlobalSecondaryIndex: CdkTransformerGlobalSecondaryIndex = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appsync-transformer.CdkTransformerGlobalSecondaryIndex.property.indexName">indexName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#appsync-transformer.CdkTransformerGlobalSecondaryIndex.property.partitionKey">partitionKey</a></code> | <code><a href="#appsync-transformer.CdkTransformerTableKey">CdkTransformerTableKey</a></code> | *No description.* |
| <code><a href="#appsync-transformer.CdkTransformerGlobalSecondaryIndex.property.projection">projection</a></code> | <code>any</code> | *No description.* |
| <code><a href="#appsync-transformer.CdkTransformerGlobalSecondaryIndex.property.sortKey">sortKey</a></code> | <code><a href="#appsync-transformer.CdkTransformerTableKey">CdkTransformerTableKey</a></code> | *No description.* |

---

##### `indexName`<sup>Required</sup> <a name="indexName" id="appsync-transformer.CdkTransformerGlobalSecondaryIndex.property.indexName"></a>

```typescript
public readonly indexName: string;
```

- *Type:* string

---

##### `partitionKey`<sup>Required</sup> <a name="partitionKey" id="appsync-transformer.CdkTransformerGlobalSecondaryIndex.property.partitionKey"></a>

```typescript
public readonly partitionKey: CdkTransformerTableKey;
```

- *Type:* <a href="#appsync-transformer.CdkTransformerTableKey">CdkTransformerTableKey</a>

---

##### `projection`<sup>Required</sup> <a name="projection" id="appsync-transformer.CdkTransformerGlobalSecondaryIndex.property.projection"></a>

```typescript
public readonly projection: any;
```

- *Type:* any

---

##### `sortKey`<sup>Required</sup> <a name="sortKey" id="appsync-transformer.CdkTransformerGlobalSecondaryIndex.property.sortKey"></a>

```typescript
public readonly sortKey: CdkTransformerTableKey;
```

- *Type:* <a href="#appsync-transformer.CdkTransformerTableKey">CdkTransformerTableKey</a>

---

### CdkTransformerHttpResolver <a name="CdkTransformerHttpResolver" id="appsync-transformer.CdkTransformerHttpResolver"></a>

#### Initializer <a name="Initializer" id="appsync-transformer.CdkTransformerHttpResolver.Initializer"></a>

```typescript
import { CdkTransformerHttpResolver } from 'appsync-transformer'

const cdkTransformerHttpResolver: CdkTransformerHttpResolver = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appsync-transformer.CdkTransformerHttpResolver.property.fieldName">fieldName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#appsync-transformer.CdkTransformerHttpResolver.property.typeName">typeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#appsync-transformer.CdkTransformerHttpResolver.property.defaultRequestMappingTemplate">defaultRequestMappingTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#appsync-transformer.CdkTransformerHttpResolver.property.defaultResponseMappingTemplate">defaultResponseMappingTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#appsync-transformer.CdkTransformerHttpResolver.property.httpConfig">httpConfig</a></code> | <code>any</code> | *No description.* |

---

##### `fieldName`<sup>Required</sup> <a name="fieldName" id="appsync-transformer.CdkTransformerHttpResolver.property.fieldName"></a>

```typescript
public readonly fieldName: string;
```

- *Type:* string

---

##### `typeName`<sup>Required</sup> <a name="typeName" id="appsync-transformer.CdkTransformerHttpResolver.property.typeName"></a>

```typescript
public readonly typeName: string;
```

- *Type:* string

---

##### `defaultRequestMappingTemplate`<sup>Required</sup> <a name="defaultRequestMappingTemplate" id="appsync-transformer.CdkTransformerHttpResolver.property.defaultRequestMappingTemplate"></a>

```typescript
public readonly defaultRequestMappingTemplate: string;
```

- *Type:* string

---

##### `defaultResponseMappingTemplate`<sup>Required</sup> <a name="defaultResponseMappingTemplate" id="appsync-transformer.CdkTransformerHttpResolver.property.defaultResponseMappingTemplate"></a>

```typescript
public readonly defaultResponseMappingTemplate: string;
```

- *Type:* string

---

##### `httpConfig`<sup>Required</sup> <a name="httpConfig" id="appsync-transformer.CdkTransformerHttpResolver.property.httpConfig"></a>

```typescript
public readonly httpConfig: any;
```

- *Type:* any

---

### CdkTransformerLocalSecondaryIndex <a name="CdkTransformerLocalSecondaryIndex" id="appsync-transformer.CdkTransformerLocalSecondaryIndex"></a>

#### Initializer <a name="Initializer" id="appsync-transformer.CdkTransformerLocalSecondaryIndex.Initializer"></a>

```typescript
import { CdkTransformerLocalSecondaryIndex } from 'appsync-transformer'

const cdkTransformerLocalSecondaryIndex: CdkTransformerLocalSecondaryIndex = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appsync-transformer.CdkTransformerLocalSecondaryIndex.property.indexName">indexName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#appsync-transformer.CdkTransformerLocalSecondaryIndex.property.projection">projection</a></code> | <code>any</code> | *No description.* |
| <code><a href="#appsync-transformer.CdkTransformerLocalSecondaryIndex.property.sortKey">sortKey</a></code> | <code><a href="#appsync-transformer.CdkTransformerTableKey">CdkTransformerTableKey</a></code> | *No description.* |

---

##### `indexName`<sup>Required</sup> <a name="indexName" id="appsync-transformer.CdkTransformerLocalSecondaryIndex.property.indexName"></a>

```typescript
public readonly indexName: string;
```

- *Type:* string

---

##### `projection`<sup>Required</sup> <a name="projection" id="appsync-transformer.CdkTransformerLocalSecondaryIndex.property.projection"></a>

```typescript
public readonly projection: any;
```

- *Type:* any

---

##### `sortKey`<sup>Required</sup> <a name="sortKey" id="appsync-transformer.CdkTransformerLocalSecondaryIndex.property.sortKey"></a>

```typescript
public readonly sortKey: CdkTransformerTableKey;
```

- *Type:* <a href="#appsync-transformer.CdkTransformerTableKey">CdkTransformerTableKey</a>

---

### CdkTransformerResolver <a name="CdkTransformerResolver" id="appsync-transformer.CdkTransformerResolver"></a>

#### Initializer <a name="Initializer" id="appsync-transformer.CdkTransformerResolver.Initializer"></a>

```typescript
import { CdkTransformerResolver } from 'appsync-transformer'

const cdkTransformerResolver: CdkTransformerResolver = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appsync-transformer.CdkTransformerResolver.property.fieldName">fieldName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#appsync-transformer.CdkTransformerResolver.property.typeName">typeName</a></code> | <code>string</code> | *No description.* |

---

##### `fieldName`<sup>Required</sup> <a name="fieldName" id="appsync-transformer.CdkTransformerResolver.property.fieldName"></a>

```typescript
public readonly fieldName: string;
```

- *Type:* string

---

##### `typeName`<sup>Required</sup> <a name="typeName" id="appsync-transformer.CdkTransformerResolver.property.typeName"></a>

```typescript
public readonly typeName: string;
```

- *Type:* string

---

### CdkTransformerTable <a name="CdkTransformerTable" id="appsync-transformer.CdkTransformerTable"></a>

#### Initializer <a name="Initializer" id="appsync-transformer.CdkTransformerTable.Initializer"></a>

```typescript
import { CdkTransformerTable } from 'appsync-transformer'

const cdkTransformerTable: CdkTransformerTable = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appsync-transformer.CdkTransformerTable.property.globalSecondaryIndexes">globalSecondaryIndexes</a></code> | <code><a href="#appsync-transformer.CdkTransformerGlobalSecondaryIndex">CdkTransformerGlobalSecondaryIndex</a>[]</code> | *No description.* |
| <code><a href="#appsync-transformer.CdkTransformerTable.property.gsiResolvers">gsiResolvers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#appsync-transformer.CdkTransformerTable.property.localSecondaryIndexes">localSecondaryIndexes</a></code> | <code><a href="#appsync-transformer.CdkTransformerLocalSecondaryIndex">CdkTransformerLocalSecondaryIndex</a>[]</code> | *No description.* |
| <code><a href="#appsync-transformer.CdkTransformerTable.property.partitionKey">partitionKey</a></code> | <code><a href="#appsync-transformer.CdkTransformerTableKey">CdkTransformerTableKey</a></code> | *No description.* |
| <code><a href="#appsync-transformer.CdkTransformerTable.property.resolvers">resolvers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#appsync-transformer.CdkTransformerTable.property.tableName">tableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#appsync-transformer.CdkTransformerTable.property.sortKey">sortKey</a></code> | <code><a href="#appsync-transformer.CdkTransformerTableKey">CdkTransformerTableKey</a></code> | *No description.* |
| <code><a href="#appsync-transformer.CdkTransformerTable.property.ttl">ttl</a></code> | <code><a href="#appsync-transformer.CdkTransformerTableTtl">CdkTransformerTableTtl</a></code> | *No description.* |

---

##### `globalSecondaryIndexes`<sup>Required</sup> <a name="globalSecondaryIndexes" id="appsync-transformer.CdkTransformerTable.property.globalSecondaryIndexes"></a>

```typescript
public readonly globalSecondaryIndexes: CdkTransformerGlobalSecondaryIndex[];
```

- *Type:* <a href="#appsync-transformer.CdkTransformerGlobalSecondaryIndex">CdkTransformerGlobalSecondaryIndex</a>[]

---

##### `gsiResolvers`<sup>Required</sup> <a name="gsiResolvers" id="appsync-transformer.CdkTransformerTable.property.gsiResolvers"></a>

```typescript
public readonly gsiResolvers: string[];
```

- *Type:* string[]

---

##### `localSecondaryIndexes`<sup>Required</sup> <a name="localSecondaryIndexes" id="appsync-transformer.CdkTransformerTable.property.localSecondaryIndexes"></a>

```typescript
public readonly localSecondaryIndexes: CdkTransformerLocalSecondaryIndex[];
```

- *Type:* <a href="#appsync-transformer.CdkTransformerLocalSecondaryIndex">CdkTransformerLocalSecondaryIndex</a>[]

---

##### `partitionKey`<sup>Required</sup> <a name="partitionKey" id="appsync-transformer.CdkTransformerTable.property.partitionKey"></a>

```typescript
public readonly partitionKey: CdkTransformerTableKey;
```

- *Type:* <a href="#appsync-transformer.CdkTransformerTableKey">CdkTransformerTableKey</a>

---

##### `resolvers`<sup>Required</sup> <a name="resolvers" id="appsync-transformer.CdkTransformerTable.property.resolvers"></a>

```typescript
public readonly resolvers: string[];
```

- *Type:* string[]

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="appsync-transformer.CdkTransformerTable.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

---

##### `sortKey`<sup>Optional</sup> <a name="sortKey" id="appsync-transformer.CdkTransformerTable.property.sortKey"></a>

```typescript
public readonly sortKey: CdkTransformerTableKey;
```

- *Type:* <a href="#appsync-transformer.CdkTransformerTableKey">CdkTransformerTableKey</a>

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="appsync-transformer.CdkTransformerTable.property.ttl"></a>

```typescript
public readonly ttl: CdkTransformerTableTtl;
```

- *Type:* <a href="#appsync-transformer.CdkTransformerTableTtl">CdkTransformerTableTtl</a>

---

### CdkTransformerTableKey <a name="CdkTransformerTableKey" id="appsync-transformer.CdkTransformerTableKey"></a>

#### Initializer <a name="Initializer" id="appsync-transformer.CdkTransformerTableKey.Initializer"></a>

```typescript
import { CdkTransformerTableKey } from 'appsync-transformer'

const cdkTransformerTableKey: CdkTransformerTableKey = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appsync-transformer.CdkTransformerTableKey.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#appsync-transformer.CdkTransformerTableKey.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `name`<sup>Required</sup> <a name="name" id="appsync-transformer.CdkTransformerTableKey.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="appsync-transformer.CdkTransformerTableKey.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

### CdkTransformerTableTtl <a name="CdkTransformerTableTtl" id="appsync-transformer.CdkTransformerTableTtl"></a>

#### Initializer <a name="Initializer" id="appsync-transformer.CdkTransformerTableTtl.Initializer"></a>

```typescript
import { CdkTransformerTableTtl } from 'appsync-transformer'

const cdkTransformerTableTtl: CdkTransformerTableTtl = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appsync-transformer.CdkTransformerTableTtl.property.attributeName">attributeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#appsync-transformer.CdkTransformerTableTtl.property.enabled">enabled</a></code> | <code>boolean</code> | *No description.* |

---

##### `attributeName`<sup>Required</sup> <a name="attributeName" id="appsync-transformer.CdkTransformerTableTtl.property.attributeName"></a>

```typescript
public readonly attributeName: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="appsync-transformer.CdkTransformerTableTtl.property.enabled"></a>

```typescript
public readonly enabled: boolean;
```

- *Type:* boolean

---

### DynamoDBStreamProps <a name="DynamoDBStreamProps" id="appsync-transformer.DynamoDBStreamProps"></a>

#### Initializer <a name="Initializer" id="appsync-transformer.DynamoDBStreamProps.Initializer"></a>

```typescript
import { DynamoDBStreamProps } from 'appsync-transformer'

const dynamoDBStreamProps: DynamoDBStreamProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appsync-transformer.DynamoDBStreamProps.property.modelTypeName">modelTypeName</a></code> | <code>string</code> | The @model type name from the graph schema e.g. Blog. |
| <code><a href="#appsync-transformer.DynamoDBStreamProps.property.streamViewType">streamViewType</a></code> | <code>aws-cdk-lib.aws_dynamodb.StreamViewType</code> | *No description.* |

---

##### `modelTypeName`<sup>Required</sup> <a name="modelTypeName" id="appsync-transformer.DynamoDBStreamProps.property.modelTypeName"></a>

```typescript
public readonly modelTypeName: string;
```

- *Type:* string

The @model type name from the graph schema e.g. Blog.

---

##### `streamViewType`<sup>Required</sup> <a name="streamViewType" id="appsync-transformer.DynamoDBStreamProps.property.streamViewType"></a>

```typescript
public readonly streamViewType: StreamViewType;
```

- *Type:* aws-cdk-lib.aws_dynamodb.StreamViewType

---

### OverrideResolverProps <a name="OverrideResolverProps" id="appsync-transformer.OverrideResolverProps"></a>

#### Initializer <a name="Initializer" id="appsync-transformer.OverrideResolverProps.Initializer"></a>

```typescript
import { OverrideResolverProps } from 'appsync-transformer'

const overrideResolverProps: OverrideResolverProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appsync-transformer.OverrideResolverProps.property.fieldName">fieldName</a></code> | <code>string</code> | The fieldname to override e.g. listThings, createStuff. |
| <code><a href="#appsync-transformer.OverrideResolverProps.property.typeName">typeName</a></code> | <code>string</code> | Example: Query, Mutation, Subscription For a GSI this might be Post, Comment, etc. |
| <code><a href="#appsync-transformer.OverrideResolverProps.property.requestMappingTemplateFile">requestMappingTemplateFile</a></code> | <code>string</code> | The full path to the request mapping template file. |
| <code><a href="#appsync-transformer.OverrideResolverProps.property.responseMappingTemplateFile">responseMappingTemplateFile</a></code> | <code>string</code> | The full path to the resposne mapping template file. |

---

##### `fieldName`<sup>Required</sup> <a name="fieldName" id="appsync-transformer.OverrideResolverProps.property.fieldName"></a>

```typescript
public readonly fieldName: string;
```

- *Type:* string

The fieldname to override e.g. listThings, createStuff.

---

##### `typeName`<sup>Required</sup> <a name="typeName" id="appsync-transformer.OverrideResolverProps.property.typeName"></a>

```typescript
public readonly typeName: string;
```

- *Type:* string

Example: Query, Mutation, Subscription For a GSI this might be Post, Comment, etc.

---

##### `requestMappingTemplateFile`<sup>Optional</sup> <a name="requestMappingTemplateFile" id="appsync-transformer.OverrideResolverProps.property.requestMappingTemplateFile"></a>

```typescript
public readonly requestMappingTemplateFile: string;
```

- *Type:* string

The full path to the request mapping template file.

---

##### `responseMappingTemplateFile`<sup>Optional</sup> <a name="responseMappingTemplateFile" id="appsync-transformer.OverrideResolverProps.property.responseMappingTemplateFile"></a>

```typescript
public readonly responseMappingTemplateFile: string;
```

- *Type:* string

The full path to the resposne mapping template file.

---

### SchemaTransformerOutputs <a name="SchemaTransformerOutputs" id="appsync-transformer.SchemaTransformerOutputs"></a>

#### Initializer <a name="Initializer" id="appsync-transformer.SchemaTransformerOutputs.Initializer"></a>

```typescript
import { SchemaTransformerOutputs } from 'appsync-transformer'

const schemaTransformerOutputs: SchemaTransformerOutputs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#appsync-transformer.SchemaTransformerOutputs.property.cdkTables">cdkTables</a></code> | <code>{[ key: string ]: <a href="#appsync-transformer.CdkTransformerTable">CdkTransformerTable</a>}</code> | *No description.* |
| <code><a href="#appsync-transformer.SchemaTransformerOutputs.property.functionResolvers">functionResolvers</a></code> | <code>{[ key: string ]: <a href="#appsync-transformer.CdkTransformerFunctionResolver">CdkTransformerFunctionResolver</a>[]}</code> | *No description.* |
| <code><a href="#appsync-transformer.SchemaTransformerOutputs.property.httpResolvers">httpResolvers</a></code> | <code>{[ key: string ]: <a href="#appsync-transformer.CdkTransformerHttpResolver">CdkTransformerHttpResolver</a>[]}</code> | *No description.* |
| <code><a href="#appsync-transformer.SchemaTransformerOutputs.property.mutations">mutations</a></code> | <code>{[ key: string ]: <a href="#appsync-transformer.CdkTransformerResolver">CdkTransformerResolver</a>}</code> | *No description.* |
| <code><a href="#appsync-transformer.SchemaTransformerOutputs.property.noneResolvers">noneResolvers</a></code> | <code>{[ key: string ]: <a href="#appsync-transformer.CdkTransformerResolver">CdkTransformerResolver</a>}</code> | *No description.* |
| <code><a href="#appsync-transformer.SchemaTransformerOutputs.property.queries">queries</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#appsync-transformer.SchemaTransformerOutputs.property.subscriptions">subscriptions</a></code> | <code>{[ key: string ]: <a href="#appsync-transformer.CdkTransformerResolver">CdkTransformerResolver</a>}</code> | *No description.* |

---

##### `cdkTables`<sup>Optional</sup> <a name="cdkTables" id="appsync-transformer.SchemaTransformerOutputs.property.cdkTables"></a>

```typescript
public readonly cdkTables: {[ key: string ]: CdkTransformerTable};
```

- *Type:* {[ key: string ]: <a href="#appsync-transformer.CdkTransformerTable">CdkTransformerTable</a>}

---

##### `functionResolvers`<sup>Optional</sup> <a name="functionResolvers" id="appsync-transformer.SchemaTransformerOutputs.property.functionResolvers"></a>

```typescript
public readonly functionResolvers: {[ key: string ]: CdkTransformerFunctionResolver[]};
```

- *Type:* {[ key: string ]: <a href="#appsync-transformer.CdkTransformerFunctionResolver">CdkTransformerFunctionResolver</a>[]}

---

##### `httpResolvers`<sup>Optional</sup> <a name="httpResolvers" id="appsync-transformer.SchemaTransformerOutputs.property.httpResolvers"></a>

```typescript
public readonly httpResolvers: {[ key: string ]: CdkTransformerHttpResolver[]};
```

- *Type:* {[ key: string ]: <a href="#appsync-transformer.CdkTransformerHttpResolver">CdkTransformerHttpResolver</a>[]}

---

##### `mutations`<sup>Optional</sup> <a name="mutations" id="appsync-transformer.SchemaTransformerOutputs.property.mutations"></a>

```typescript
public readonly mutations: {[ key: string ]: CdkTransformerResolver};
```

- *Type:* {[ key: string ]: <a href="#appsync-transformer.CdkTransformerResolver">CdkTransformerResolver</a>}

---

##### `noneResolvers`<sup>Optional</sup> <a name="noneResolvers" id="appsync-transformer.SchemaTransformerOutputs.property.noneResolvers"></a>

```typescript
public readonly noneResolvers: {[ key: string ]: CdkTransformerResolver};
```

- *Type:* {[ key: string ]: <a href="#appsync-transformer.CdkTransformerResolver">CdkTransformerResolver</a>}

---

##### `queries`<sup>Optional</sup> <a name="queries" id="appsync-transformer.SchemaTransformerOutputs.property.queries"></a>

```typescript
public readonly queries: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `subscriptions`<sup>Optional</sup> <a name="subscriptions" id="appsync-transformer.SchemaTransformerOutputs.property.subscriptions"></a>

```typescript
public readonly subscriptions: {[ key: string ]: CdkTransformerResolver};
```

- *Type:* {[ key: string ]: <a href="#appsync-transformer.CdkTransformerResolver">CdkTransformerResolver</a>}

---



