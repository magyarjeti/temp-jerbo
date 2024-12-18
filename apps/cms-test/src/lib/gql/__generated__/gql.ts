/* eslint-disable */
import * as types from './graphql';
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
	'\n\tmutation createContent($input: CreateContentInput!) {\n\t\tcreateContent(input: $input) {\n\t\t\tid\n\t\t\tupdatedAt\n\t\t}\n\t}\n':
		types.CreateContentDocument,
	'\n\tquery getContent($id: HashID) {\n\t\tcontent(id: $id) {\n\t\t\tid\n\t\t\tbody\n\t\t\tlayout\n\t\t\tslug\n\t\t\tstatus\n\t\t\tupdatedAt\n\t\t\ttags {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t\tslug\n\t\t\t}\n\t\t\ttitle {\n\t\t\t\tkey\n\t\t\t\tvalue\n\t\t\t}\n\t\t}\n\t}\n':
		types.GetContentDocument,
	'\n\tquery getContents(\n\t\t$page: Int\n\t\t$search: String\n\t\t$first: Int\n\t\t$byType: [ContentType!]\n\t\t$byStatus: [ContentStatus!]\n\t) {\n\t\tcontents(page: $page, search: $search, byType: $byType, byStatus: $byStatus, first: $first) {\n\t\t\tdata {\n\t\t\t\tid\n\t\t\t\tstatus\n\t\t\t\ttitle {\n\t\t\t\t\tkey\n\t\t\t\t\tvalue\n\t\t\t\t}\n\t\t\t}\n\t\t\tpaginatorInfo {\n\t\t\t\tcount\n\t\t\t\tcurrentPage\n\t\t\t\tfirstItem\n\t\t\t\thasMorePages\n\t\t\t\tlastItem\n\t\t\t\tlastPage\n\t\t\t\tperPage\n\t\t\t\ttotal\n\t\t\t}\n\t\t}\n\t}\n':
		types.GetContentsDocument,
	'\n\tquery products($domain: String!) {\n\t\tproducts(domain: $domain) {\n\t\t\tdata {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t}\n\t\t}\n\t}\n':
		types.ProductsDocument,
	'\n\tmutation UpdateContent($input: UpdateContentInput!) {\n\t\tupdateContent(input: $input) {\n\t\t\tid\n\t\t\tupdatedAt\n\t\t}\n\t}\n':
		types.UpdateContentDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: '\n\tmutation createContent($input: CreateContentInput!) {\n\t\tcreateContent(input: $input) {\n\t\t\tid\n\t\t\tupdatedAt\n\t\t}\n\t}\n',
): (typeof documents)['\n\tmutation createContent($input: CreateContentInput!) {\n\t\tcreateContent(input: $input) {\n\t\t\tid\n\t\t\tupdatedAt\n\t\t}\n\t}\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: '\n\tquery getContent($id: HashID) {\n\t\tcontent(id: $id) {\n\t\t\tid\n\t\t\tbody\n\t\t\tlayout\n\t\t\tslug\n\t\t\tstatus\n\t\t\tupdatedAt\n\t\t\ttags {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t\tslug\n\t\t\t}\n\t\t\ttitle {\n\t\t\t\tkey\n\t\t\t\tvalue\n\t\t\t}\n\t\t}\n\t}\n',
): (typeof documents)['\n\tquery getContent($id: HashID) {\n\t\tcontent(id: $id) {\n\t\t\tid\n\t\t\tbody\n\t\t\tlayout\n\t\t\tslug\n\t\t\tstatus\n\t\t\tupdatedAt\n\t\t\ttags {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t\tslug\n\t\t\t}\n\t\t\ttitle {\n\t\t\t\tkey\n\t\t\t\tvalue\n\t\t\t}\n\t\t}\n\t}\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: '\n\tquery getContents(\n\t\t$page: Int\n\t\t$search: String\n\t\t$first: Int\n\t\t$byType: [ContentType!]\n\t\t$byStatus: [ContentStatus!]\n\t) {\n\t\tcontents(page: $page, search: $search, byType: $byType, byStatus: $byStatus, first: $first) {\n\t\t\tdata {\n\t\t\t\tid\n\t\t\t\tstatus\n\t\t\t\ttitle {\n\t\t\t\t\tkey\n\t\t\t\t\tvalue\n\t\t\t\t}\n\t\t\t}\n\t\t\tpaginatorInfo {\n\t\t\t\tcount\n\t\t\t\tcurrentPage\n\t\t\t\tfirstItem\n\t\t\t\thasMorePages\n\t\t\t\tlastItem\n\t\t\t\tlastPage\n\t\t\t\tperPage\n\t\t\t\ttotal\n\t\t\t}\n\t\t}\n\t}\n',
): (typeof documents)['\n\tquery getContents(\n\t\t$page: Int\n\t\t$search: String\n\t\t$first: Int\n\t\t$byType: [ContentType!]\n\t\t$byStatus: [ContentStatus!]\n\t) {\n\t\tcontents(page: $page, search: $search, byType: $byType, byStatus: $byStatus, first: $first) {\n\t\t\tdata {\n\t\t\t\tid\n\t\t\t\tstatus\n\t\t\t\ttitle {\n\t\t\t\t\tkey\n\t\t\t\t\tvalue\n\t\t\t\t}\n\t\t\t}\n\t\t\tpaginatorInfo {\n\t\t\t\tcount\n\t\t\t\tcurrentPage\n\t\t\t\tfirstItem\n\t\t\t\thasMorePages\n\t\t\t\tlastItem\n\t\t\t\tlastPage\n\t\t\t\tperPage\n\t\t\t\ttotal\n\t\t\t}\n\t\t}\n\t}\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: '\n\tquery products($domain: String!) {\n\t\tproducts(domain: $domain) {\n\t\t\tdata {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t}\n\t\t}\n\t}\n',
): (typeof documents)['\n\tquery products($domain: String!) {\n\t\tproducts(domain: $domain) {\n\t\t\tdata {\n\t\t\t\tid\n\t\t\t\tname\n\t\t\t}\n\t\t}\n\t}\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
	source: '\n\tmutation UpdateContent($input: UpdateContentInput!) {\n\t\tupdateContent(input: $input) {\n\t\t\tid\n\t\t\tupdatedAt\n\t\t}\n\t}\n',
): (typeof documents)['\n\tmutation UpdateContent($input: UpdateContentInput!) {\n\t\tupdateContent(input: $input) {\n\t\t\tid\n\t\t\tupdatedAt\n\t\t}\n\t}\n'];

export function graphql(source: string) {
	return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
	TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
