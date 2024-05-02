class GraphQLError extends Error {
    constructor(errors) {
        super('GraphQL Error');
        this.errors = errors;
    }
}

export async function query(query, variables = {}) {
    const response = await fetch('https://clearspace-back.up.railway.app/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query, variables })
    });

    const { data, errors } = await response.json();

    if (errors?.length > 0) {
        //return error with multiple attributes
        throw new GraphQLError(errors);
    }

    return data;
}