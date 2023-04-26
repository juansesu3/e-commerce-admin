import multiparty from 'multiparty';

export default async function handle(req, res) {
    const form = new multiparty.Form();
   const {fields} new Promise((resolve, reject) => {
        form.parse(req, (err, fields, files ) => {
            if(err) reject(err);
            resolve({fields, files});
            console.log('length:', files.file.length)
            res.json('ok');
        });
        
    });
}

export const config = {
    api: { bodyParser: false },
};