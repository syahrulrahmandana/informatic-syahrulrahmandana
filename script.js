function getData() {
    const data = fetch('./data.json').then(res => res.json())
    return data
  }
  
  
  async function friendListsElement() {
    const friendLists = document.getElementById("friend_list");
    const data = await getData() 
    const lists = `
    ${data.map(i => `
        <div class="grid-container" >
        <div class="card" >
        <div class="card-content">
            <img
              src="${i.fotoselfie}"
              alt="Profile Image" 
              class="profile-image"
            />
            <div class="bio">
              <h3>${i.nama}</h3>
              <p>${i.nim}</p>
            </div>
          </div>
          <div class="deskripsi">
            <table class="info-table">
              <tr>
                <td class="label">TTL</td>
                <td class="value">
                  <span class="titikDua">:</span>${i.ttl}
                </td>
              </tr>
              <tr>
                <td class="label">Alamat</td>
                <td class="value"><span class="titikDua">:</span>${i.alamat}</td>
              </tr>
              <tr>
                <td class="label">No HP</td>
                <td class="value"><span class="titikDua">:</span>${i.no}</td>
              </tr>
            </table>
          </div>
        </div>
        </div>
      `).join("")}
    `;
  
    return friendLists.innerHTML = lists
  }
  
  friendListsElement()
  