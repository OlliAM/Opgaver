class User {
    constructor(name, address){
        this.name = name
        this.address = address
        this.nr = User.nr++
    }
    static nr = 0
}

export default User