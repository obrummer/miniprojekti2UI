const palveluurl = '/api/';



export function createuser(user, callback) {
    console.log(user);
    // fetch(palveluurl+'users',  {
    //     method: 'POST',
    //     headers: {'Content-Type': 'application/json' },
    //     body: JSON.stringify(user)
    // })
    //     .then((function(response) {
    //         callback();
    //     }));
}

export function getDiscussion(id){
 return fetch(palveluurl + 'thread/'+id, {accept: 'application/json'})
    .then(function(response) {
        return response.json()
       
    });
}

