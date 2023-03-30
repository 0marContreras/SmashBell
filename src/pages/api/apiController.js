const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const startggUrl = "https://api.start.gg/gql/alpha";
const apiKey = '1ab56b87f62bb1948ed4bb0c786618fa';

export function getEvents(eventNum) {
  return fetch(startggUrl, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'Accept': 'application/json',
      Authorization: 'Bearer ' + apiKey
    },
    body: JSON.stringify({
      query: 'query TournamentsByVideogames($perPage: Int, $videogameIds: [ID]) {tournaments(query: {perPage: $perPage page: 1 sortBy: "startAt asc" filter: {upcoming: true hasOnlineEvents: false videogameIds: $videogameIds}}) {nodes {id name slug rules images{url} events{id}}}}',
      variables: {
        videogameIds: [1386],
        page: 1,
        perPage: 100
      },
    })
  })
    .then(r => r.json())     
    .then(data => {
      const respuesta = [];
      for (let i = 0; i <= eventNum; i++) {
        

        if (data.data.tournaments.nodes[i].images[0] == null){
          data.data.tournaments.nodes[i].images[0] = { url:'https://i.imgur.com/TqfzjAs.jpeg'};
          data.data.tournaments.nodes[i].images[1] = { url:'https://i.imgur.com/TqfzjAs.jpeg'};

        }else if(data.data.tournaments.nodes[i].images.length < 2){

          data.data.tournaments.nodes[i].images[1] = data.data.tournaments.nodes[i].images[0];
        } else{
        
      }
      console.log(data.data.tournaments.nodes[i])
      respuesta[i] = data.data.tournaments.nodes[i];
      }
      return respuesta;
    });
}




const getEventId = (tournamentName, eventName) => {
    const eventSlug = `tournament/${tournamentName}/event/${eventName}`;
    let eventId;
    fetch(startggUrl, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'Accept': 'application/json',
            Authorization: 'Bearer ' + apiKey
        },

        body: JSON.stringify({
            query: "query EventQuery($slug:String) {event(slug: $slug) {id name}}",
            variables: {
                slug: eventSlug
            },
        })
    }).then(r => r.json())
    .then(data => {
        console.log(data.data);
        eventId = data.data.event.id;
    })

    return eventId;
}



export function getStandings() {
let stnd = [];
 return fetch(startggUrl, {
      method: 'POST',
      headers: {
          'content-type': 'application/json',
          'Accept': 'application/json',
          Authorization: 'Bearer ' + apiKey
      },

      body: JSON.stringify({
          query: "query EventStandings($eventId: ID!, $page: Int!, $perPage: Int!) {event(id: $eventId) {id name standings(query: {perPage: $perPage, page: $page}) {nodes {placement entrant {id name}}}}}",
          variables: {
              eventId: 848958,
              page: 1,
              perPage: 100
          },
      })
  }).then(r => r.json())
  .then(data => {
      //console.log(data.data.event.standings.nodes[0]);
      stnd[0] = data.data.event.standings.nodes[0];
      stnd[1] = data.data.event.standings.nodes[1];
      stnd[2] = data.data.event.standings.nodes[2];

      return stnd;
  })
}

    
  export function getSets(pSlug) {
    let slug = "user/" + pSlug;
  
    return fetch(startggUrl, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'Accept': 'application/json',
        Authorization: 'Bearer ' + apiKey
      },
      body: JSON.stringify({
        query: "query EventQuery($slug: String) {user(slug: $slug) {id player{id gamerTag}}}",
        variables: {
          slug: slug
        },
      })
    })
    .then(r => r.json())
    .then(data => {
      let playerId = data.data.user.player.id;
      return fetch(startggUrl, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'Accept': 'application/json',
          Authorization: 'Bearer ' + apiKey
        },
        body: JSON.stringify({
          query: "query Sets($id: ID!) {player(id: $id) {id sets(perPage: 100, page: 1) {nodes {id displayScore event {id name tournament {id name}}}}}}",
          variables: {
            id: playerId
          },
        })
      })
      .then(r => r.json())
      .then(data => {
        let sets = data.data.player.sets.nodes;
        return sets.slice(0, 20); // return only the first 10 sets
      });
    });
  }
  