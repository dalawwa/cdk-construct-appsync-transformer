import {
  ObjectTypeDefinitionNode,
  InterfaceTypeDefinitionNode,
  FieldDefinitionNode,
  DirectiveNode,
} from 'graphql';
import { Transformer, TransformerContext } from 'graphql-transformer-core';

export class TtlTransformer extends Transformer {
  constructor() {
    super('TtlTransformer', 'directive @ttl on FIELD_DEFINITION');
  }

  public field = (
    parent: ObjectTypeDefinitionNode | InterfaceTypeDefinitionNode,
    definition: FieldDefinitionNode,
    directive: DirectiveNode,
    acc: TransformerContext,
  ) => {
    if (directive.name.value !== 'ttl') {
      return;
    }
    acc;
    const fieldName = definition.name.value;

    const ddbTable = acc.getResource(`${parent.name.value}Table`);
    if (!ddbTable) {
      return;
    }
    acc.setResource(`${parent.name.value}Table`, {
      ...ddbTable,
      Properties: {
        ...ddbTable.Properties,
        TimeToLiveSpecification: {
          AttributeName: fieldName,
          Enabled: true,
        },
      },
    });
  };
}
