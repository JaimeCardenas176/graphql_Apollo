import { gql } from "apollo-server-express";

export const typeDefs = gql`
enum ProfType{
    FUNCIONARIO,
    INDEFINIDO,
    BECARIO
}

type Profesional{
    _id: ID!,
    name: String!,
    dni: String!,
    type: ProfType
}

type Query{
    profById(id: ID!): Profesional
    profesional: [Profesional]
}
`