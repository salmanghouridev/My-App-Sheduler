// controller

export async function getUsers(req, res) {
    try {
        res.status(200).json({ users: "Get User" });
    } catch (error) {
        res.status(400).json({ error });
    }
}