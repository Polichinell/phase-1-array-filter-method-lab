const findMatching = (matching, name) => {
    return matching.filter(name2 => name2.toLowerCase() === name.toLocaleLowerCase())
}

const fuzzyMatch = (matching, firstLett) => {
    return matching.filter(name => name.startsWith(firstLett))
}

const matchName = (obj, driver) => {
    return obj.filter(person => person.name === driver)
}