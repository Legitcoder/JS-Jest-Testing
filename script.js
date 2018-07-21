const googleDatabase = [
    'casts.com',
    'souprecipes.com',
    'flowser.com',
    'animals.com',
    'catpictures.com',
    'myfavouritecats.com'
];

const googleSearch = (searchInput, db) => {
    const matches = db.filter(website => website.includes(searchInput))
    return matches.length > 3 ? matches.slice(0, 3) : matches;
}

//console.log(googleSearch('cat', googleDatabase));

module.exports = googleSearch;
