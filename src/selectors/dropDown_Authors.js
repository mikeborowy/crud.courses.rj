export function AuthorsFormatedForDropDown(authors) {
    //authors reducer
    return authors.map(author => {
        return {
            value: author.id,
            text: author.firstName + ' ' + author.lastName
        }
    });
}

