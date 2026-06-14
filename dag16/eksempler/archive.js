import fs from 'fs/promises'

class Archive {
    static async writeFile(file, content) {
        try {
            await fs.writeFile(file, content);
        } catch (err) {
            console.log(err);
        }
    }

    static async readFile(file) {
        let data
        if (await Archive.fileExists(file)) {
            data = await fs.readFile(file, { encoding: 'utf-8' })
        }
        return data
    }

    static async fileExists(file) {
        try {
            await fs.access(file)
            return true
        } catch {
            return false
        }
    }
}

export default Archive