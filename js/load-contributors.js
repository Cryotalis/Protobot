$.get("https://opensheet.elk.sh/1yOjZhkn9z8dJ8HMD0YSUl7Ijgd9o1KJ62Ecf4SgyTdU/Contributors", members => {
    for (const member of members){
        document.getElementById('contributors').innerHTML += `
        <div class="cell">
        <div class="box">
        
          <article class="media">
            <figure class="media-left">
              <p class="image is-64x64"><img src=${member.imageURL}></p>
            </figure>

            <div class="media-content content">
              <p class="has-text-grey-light">
                <strong>${member.name}</strong> <small>${member.tag}</small>
                ${/Developer/i.test(member.roles) ? '<span class="tag is-warning is-rounded">Developer</span>' : ''}
                ${/PC/i.test(member.roles) ? '<span class="tag is-black is-rounded">PC</span>' : ''}
                ${/Playstation/i.test(member.roles) ? '<span class="tag is-link is-rounded">Playstation</span>' : ''}
                ${/Xbox/i.test(member.roles) ? '<span class="tag is-success is-rounded">Xbox</span>' : ''}
                <br>
                <ul class="has-text-grey-light" style="margin-left: 1em;">
                ${member.description.split(', ').map(pt => `<li>${pt}</li>`).join('')}
                </ul>
              </p>
            </div>
          </article>
        </div>
        </div>`
    }
})