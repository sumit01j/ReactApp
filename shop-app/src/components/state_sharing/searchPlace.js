export default function filterPlaces(places, searchQuery){

    searchQuery = searchQuery.toLowerCase()

    const result = places.filter(p=> p.name.toLowerCase().startsWith(searchQuery))

    return result
}