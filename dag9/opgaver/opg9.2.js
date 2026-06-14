class StringStack {
    constructor() {
        this.stack = []
    }

    push(string) {
        if (typeof string !== "string") {
            console.log("Only strings allowed")
        }
        else {
            this.stack.push(string)
        }
    }

    pop() {
        if (this.stack.length == 0) {
            console.log("Stack is empty")
        }
        else {
            this.stack.pop()
        }
    }
}

stringStack = new StringStack()
stringStack.push("Jim")
stringStack.push("er")
stringStack.push("asian")
console.log(stringStack.stack)
stringStack.pop()
stringStack.push("nerd")
console.log(stringStack.stack)
stringStack.push(1)
stringStack.pop()
stringStack.pop()
stringStack.pop()
stringStack.pop()