
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const startggUrl = "https://api.start.gg/gql/alpha";
const apiKey = '1ab56b87f62bb1948ed4bb0c786618fa';

export function getEvents(eventNum){
    let respuesta = new Array();
    fetch(startggUrl, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'Accept': 'application/json',
            Authorization: 'Bearer ' + apiKey
        },

        body: JSON.stringify({
            query: 'query TournamentsByVideogames($perPage: Int, $videogameIds: [ID]) {tournaments(query: {perPage: $perPage page: 1 sortBy: "startAt asc" filter: {upcoming: true videogameIds: $videogameIds}}) {nodes {id name slug}}}',
            variables: {
                videogameIds: [1],
                page: 1,
                perPage: 100
            },
        })
    }).then(r => r.json())
    .then(data => {
        for(let i = 0; i <= eventNum; i++){
        //console.log(data.data.tournaments.nodes[i]);
        respuesta[i] = data.data.tournaments.nodes[i];
        

    }
    console.log(respuesta);
    })
}