# swapi-ava-app

#React application that displays a filterable list of characters from the movie franchise Star Wars. Querying data from an open API called SWAPI (Star Wars API)

#App Overview
The app consist of a main view that will display the list of characters and a filter section, where the user can filter the characters by certain criteria.

#Clicking on one of the characters from the list will open a detailed view of this character. When the user changes the filter settings in the filter section, the list of characters instantly adapt to only show characters that match the chosen filter settings.

#Character List
The character list is a simple list that displays the name of the character. Each list entry should be clickable and open the detail view for the selected character when the user clicks the list entry.

#Filter
The filter section allow the user to filter the list of characters according to the following filter settings:
● The movie the character appeared in (i.e. show only characters that appeared in A New Hope)
● The character's species (API do not provide kind of human species, so filtering by this criteria is not available).
● A range of years that the character's birth year falls in (i.e. show only characters born between 30 BBY and 5 ABY, see API documentation for field birth_year at https://swapi.dev/documentation#people)

All filter settings should be treated using an AND relationship, i.e. if the user chooses to filter by movie and species, only characters that appear in the given movie AND are of the specified species should be displayed.

Added a switch to OR relationship.

#Character Details
The character details that are shown when the user selects a character from the character list show a brief summary of the character, including the name of the character, the movie the character appeared in, the species of the character and the spaceships associated with the character.

Note: The most important endpoint is the /people endpoint to query the characters to display in the character list. As the SWAPI does not support filtering the data, it will fetch all data on server.js and filter on the client side. No unnecessary API requests will be sended.
