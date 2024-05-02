export async function query(query, variables = {}) {
    const response = await fetch('http://localhost:4000/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query, variables })
    });

    const { data, errors } = await response.json();

    if (errors?.length > 0) {
        throw new Error(`GraphQL query error: ${errors[0].message} ${errors[0].locations.map(l => `at line ${l.line}, column ${l.column}`).join(', ')}`);
    }

    return data;
}