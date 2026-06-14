class User {
    constructor(username, password) {
        this.username = username
        this.password = password
        this.id = User.id++
    }
    static id = 0
}

// const x = 5
export default User
// export {User, x}