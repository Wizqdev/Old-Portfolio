const fetch = require('isomorphic-unfetch')


export default async (req, res) => {
    let _ = await (await fetch('https://api.github.com/users/Prajwal433/repos', {
    })).json();

    
    try {
        res.send([..._])
    } catch {
        res.status(500);
    }
}
