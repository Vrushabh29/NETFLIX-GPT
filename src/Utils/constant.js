
 export const LOGOURL="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

 export const USER_AVTAR="https://avatars.githubusercontent.com/u/106738520?v=4";

 export const API_CONSTANT = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: "Bearer "+process.env.REACT_APP_TMDB_KEY
     //Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZGJlODlmMmJhZjE4ZjBkOWUxY2JiYTlhMDQzMDNlYiIsIm5iZiI6MTc0NDYzOTAzNi42MDcsInN1YiI6IjY3ZmQxNDNjZWY1YWU2ODdjYmQ5MTRkOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eVKO_PCTuyW-YpiA9MbnM9qnVDG4Ru59MVCVYFdzElM"
    }
  };

  export const IMG_CDN_URL="https://image.tmdb.org/t/p/w500";

  export const BACKGROUND_URL="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"


  export const LANGUAGECONSTANT=[{Identifire:'en', value:"English"},{Identifire:'hindi' ,value:"Hindi"},{Identifire:'spanish', value:"Spanish"}]

 // export const  OPENAI_Key="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"

  //export const GEMINI_API="AIzaSyBedArsH_9kWt2eYMkjPAUSUxUKKzhI8Kg"

  export const GEMINI_API= process.env.REACT_APP_GEMINI_API