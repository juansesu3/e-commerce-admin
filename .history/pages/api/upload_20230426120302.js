import multiparty from 'multiparty';

export default async function handle(req, res) {
    const form = multiparty.Form();

}

export const config = {
    api: { boduParser: false },
}