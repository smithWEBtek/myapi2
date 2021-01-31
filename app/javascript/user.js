$(()=> {
  $('button.new-api-user').on('click', () => {  
    $.ajax({
      url: 'https://randomuser.me/api/',
      dataType: 'json',
      success: function(data) {
        console.log('person data: ', data);
        let obj = data.results[0]
        let newUser = new User(obj)
        let newUserHtml = newUser.userHtml(newUser)
        $('div#api-users').append(newUserHtml)
      }
    })
  })

  class User {
    constructor(obj){
      this.username = obj.id.name
      this.city = obj.location.city
      this.state = obj.location.state
      this.country = obj.location.country
      this.image_url = obj.picture.medium
    } 
  }

  User.prototype.userHtml = function() {
    return(`
      <div class="user">
        <h3>${this.username}</h3>
        <p>${this.city}, ${this.state}, ${this.country}</p>
        <img src=${this.image_url} class="api-user" />
      </div>
    `)
  }
})