    import User from "../model/user.js"
    import Archive from "../archive.js";

    class UserController {
        static users = [];

        get users() {
            // konverter intern rep af users til et array af users
            return UserController.users
        }

        static async addUser(username, password) {
            UserController.users.push(new User(username, password))
            await Archive.writeFile('./data/users.json', JSON.stringify(UserController.users))
        }

        static async startup() {
            let data = await Archive.readFile('./data/users.json')
            if (data) {
                UserController.users = JSON.parse(data)
            }
            const biggestID = UserController.users.reduce((maxId, user) => {
                return user.id > maxId ? user.id : maxId;
            }, 0)
            User.id = biggestID + 1
        }

        static validateUser(username, password) {
            let altErGodt = false;
            let i = 0
            const users = UserController.users
            while (!altErGodt && i < users.length) {
                let user = users[i]
                if (user.username === username && user.password === password) {
                    altErGodt = true
                }
                i++
            }
            return { altErGodt, username, password }
        }
    }

    export default UserController