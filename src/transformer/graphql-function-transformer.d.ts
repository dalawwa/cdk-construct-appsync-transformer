import { Transformer, TransformerContext } from "graphql-transformer-core";
import {
  ObjectTypeDefinitionNode,
  FieldDefinitionNode,
  DirectiveNode,
  InterfaceTypeDefinitionNode,
} from "graphql";
declare module "graphql-function-transformer" {
  export class FunctionTransformer extends Transformer {
    constructor();
    field: (
      parent: ObjectTypeDefinitionNode | InterfaceTypeDefinitionNode,
      definition: FieldDefinitionNode,
      directive: DirectiveNode,
      acc: TransformerContext
    ) => void;
    role: (name: string, region: string) => any;
    datasource: (name: string, region: string) => any;
    function: (name: string, region: string) => any;
    resolver: (
      type: string,
      field: string,
      name: string,
      region?: string
    ) => any;
    appendFunctionToResolver(resolver: any, functionId: string): any;
  }
}
