/**
 * Parses markdown files into HTML and makes them compatible with Bulma css
 * @param {string} file The path to the markdown file
 * @returns {Promise<string>}
 */
async function parseMD(file) {
    const mdText = await fetch(file).then(res => res.text())
    return marked.parse(mdText)
        .replace(/<h1>/g, `<h1 class="title is-2">`)
        .replace(/<\/h1>/g, `<hr></h1>`)
        .replace(/<h2>/g, `<h2 class="title is-4">`)
        .replace(/<h3>/g, `<h3 class="title is-5">`)
}

async function loadNews(elementID) {
    const files = await fetch("./updates/directory.json").then(res => res.json())
    for (const file of files.reverse()) {
        const html = await parseMD(`./updates/${file}`)
        document.getElementById(elementID).innerHTML += html
    }
}

loadNews('news')