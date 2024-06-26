class GraphQLError extends Error {
    constructor(errors) {
        super(errors[0].message)
        this.errors = errors;
    }
}

export async function query(query, variables = {}) {
    const authToken = localStorage.getItem("token")
    const response = await fetch('https://clearspace-back.up.railway.app/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': authToken ? `Bearer ${authToken}` : null
        },
        body: JSON.stringify({ query, variables })
    });

    const { data, errors } = await response.json();

    if (errors?.length > 0) {
        //return error with multiple attributes
        throw new GraphQLError(errors);
    }

    return data;
}