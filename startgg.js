require('dotenv').config();
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const startggUrl = "https://api.start.gg/gql/alpha";
const apiKey = process.env.STARTGG_KEY;

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

const getCompletedMatches = (eventId) => {

    fetch(startggUrl, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'Accept': 'application/json',
            Authorization: 'Bearer ' + apiKey
        },

        body: JSON.stringify({
            query: "query EventSets($eventId: ID!, $page: Int!, $perPage: Int!) { event(id: $eventId) {sets(page: $page perPage: $perPage sortType: STANDARD) {pageInfo {total} nodes {id slots {entrant {name}}}}}}",
            variables: {
                eventId: eventId,
                page: 1,
                perPage: 5
            },
        })
    }).then(r => r.json())
    .then(data => {
        console.log(data.data);
        console.log(data.data.event.sets.nodes[0])
    })
}


const getStandings = (eventId) => {

    fetch(startggUrl, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'Accept': 'application/json',
            Authorization: 'Bearer ' + apiKey
        },

        body: JSON.stringify({
            query: "query EventStandings($eventId: ID!, $page: Int!, $perPage: Int!) {event(id: $eventId) {id name standings(query: {perPage: $perPage, page: $page}) {nodes {placement entrant {id name}}}}}",
            variables: {
                eventId: eventId,
                page: 1,
                perPage: 100
            },
        })
    }).then(r => r.json())
    .then(data => {
        console.log(data.data.event.standings.nodes[0]);
    })
}





//https://www.start.gg/tournament/revenge-round-8/event/ultimate-singles
getEventId('smash-ultimate-summit-6', 'ultimate-singles');
getCompletedMatches(848958);
getStandings(848958);