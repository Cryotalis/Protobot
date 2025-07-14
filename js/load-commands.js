$.get(
    "https://opensheet.elk.sh/1yOjZhkn9z8dJ8HMD0YSUl7Ijgd9o1KJ62Ecf4SgyTdU/Commands",
    commands => {
        commands.sort((a,b) => (a.description > b.description) ? 1 : -1)
        commands.forEach(command => {
            const commandType = command.type.includes('game') ? 'game' : 'regular'
            if (command.type.includes('moderator')) command.name += '\u2800<span class="tag is-warning is-rounded">Mod Command</span>'
            if (command.type.includes('context')) command.name += '\u2800<span class="tag is-link is-rounded">Context Command</span>'
            document.getElementById(`${commandType}-commands`).innerHTML += `<tr class="has-text-light"><td>${command.name}</td><td>${command.description}</td></tr>`
        })
    }
)

function showGameCommands() {
    document.getElementById('menu-game-commands').setAttribute('class', 'is-active')
    document.getElementById('menu-regular-commands').setAttribute('class', 'is-inactive')
    document.getElementById('game-commands').style.display = 'contents'
    document.getElementById('regular-commands').style.display = 'none'
}

function showRegCommands() {
    document.getElementById('menu-game-commands').setAttribute('class', 'is-inactive')
    document.getElementById('menu-regular-commands').setAttribute('class', 'is-active')
    document.getElementById('game-commands').style.display = 'none'
    document.getElementById('regular-commands').style.display = 'contents'
}