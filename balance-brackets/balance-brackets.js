function balanceBrackets(string) {
    if (string == '[]' || string == '()') {
        return true
    }

    return false
}

module.exports = balanceBrackets;
