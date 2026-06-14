console.log(balancedParentheses(`{[()]}`))
console.log(balancedParentheses(`({[]})[]`))
console.log(balancedParentheses(`{[(])}`))
console.log(balancedParentheses(`({[})`))
console.log(balancedParentheses(`(([])`))

function balancedParentheses(string) {
    let stack = [];
    let parentheses = {'}': '{', ')': '(', ']': '['};
    let i = 0;
    let balanced = true;

    while(balanced && i < string.length) {
        let char = string[i];
        if(Object.values(parentheses).includes(char)) {
            stack.push(char);
        }
        else if(Object.keys(parentheses).includes(char)) {
            if(stack[stack.length-1] === parentheses[char]) stack.pop();
            else balanced = false;
        }
        i++;
    }
    return balanced && stack.length === 0;
}