
export const exerciseOptions = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
    headers: {
      'X-RapidAPI-Key': '5ead577111msh12dd1fce16ec90fp1046b2jsnfc8e8eea33aa',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
}

export const FetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}