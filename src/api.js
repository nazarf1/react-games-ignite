const base_url = 'https://www.freetogame.com/api/';

export const shooterGames = () => `${base_url}games?category=shooter`;

export const allGames = () => `${base_url}games`;

export const pcGames = () => `${base_url}games?platform=pc`;

export const gameDetails = (id) => `${base_url}game?id=${id}`;
