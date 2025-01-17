const fs = require("fs")
const { createClient } = require('contentful');

const client = createClient({
    space: 'umvhw5y8golx',
    accessToken: 'eyMcIVDs5HIA5n3-WWFP-rScVZSFIW6l0esfv3O7GqM',
    environment: 'master'
})

client.withAllLocales
    .getEntries()
    .then((entries) => {
        // console.log('ALL DATA:', entries)
        const [siteEntries] = entries.items.filter((item) => item.sys.contentType.sys.id === "site")
        console.log(siteEntries);
        const filePath = "./src/data.json"

        const dataStringify = JSON.stringify(siteEntries)

        fs.writeFile(filePath, dataStringify, err => {
            if (err) {
                console.error(err);
            } else {
                console.log("File created successfully!", filePath);

            }
        })

    })
    .catch((err) => console.log('ERROR:', err)
    )