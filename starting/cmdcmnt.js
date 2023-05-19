// insert the data in dbs
//  create the dbs
//      use dbname

db.new.insertMany(
    [
      {
        id: "1",
        name: "Iron man",
        poster: "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_FMjpg_UX1000_.jpg",
        rating: 8.8,
       video: "https://www.youtube.com/embed/8ugaeA-nMTc",
        summary: "A billionaire industrialist and genius inventor, Tony Stark (Robert Downey Jr.), is conducting weapons tests overseas, but terrorists kidnap him to force him to build a devastating weapon. Instead, he builds an armored suit and upends his captors. Returning to America, Stark refines the suit and uses it to combat crime and terrorism."
      },
      {
        id: "2",
        name: "Captain America",
        poster: "https://m.media-amazon.com/images/M/MV5BMTYzOTc2NzU3N15BMl5BanBnXkFtZTcwNjY3MDE3NQ@@._V1_.jpg",
        rating: 7,
        video: "https://www.youtube.com/embed/JerVrbLldXw",
        summary: "It is 1941 and the world is in the throes of war. Steve Rogers (Chris Evans) wants to do his part and join America's armed forces, but the military rejects him because of his small stature. Finally, Steve gets his chance when he is accepted into an experimental program that turns him into a supersoldier called Captain America. Joining forces with Bucky Barnes (Sebastian Stan) and Peggy Carter (Hayley Atwell), Captain America leads the fight against the Nazi-backed HYDRA organization."
      },
      {
        id: "3",
        name: "The Avengers ",
        poster: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
        rating: 8.1,
        video: "https://www.youtube.com/embed/eOrNdBpGMv8",
        summary: "When Thor's evil brother, Loki (Tom Hiddleston), gains access to the unlimited power of the energy cube called the Tesseract, Nick Fury (Samuel L. Jackson), director of S.H.I.E.L.D., initiates a superhero recruitment effort to defeat the unprecedented threat to Earth. Joining Fury are Iron Man (Robert Downey Jr.), Captain America (Chris Evans), the Hulk (Mark Ruffalo), Thor (Chris Hemsworth), the Black Widow (Scarlett Johansson) and Hawkeye (Jeremy Renner)."
      },
      {
        id: "4",
        name: "Avengers Age of Ultron",
        poster: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C5274B5DDCA43717329720CA260559AEA5C64D7FE2F3ED0E0C7A4A00AEAF34E8/scale?width=1200&aspectRatio=1.78&format=jpeg",
        rating: 8.8,
        video: "https://www.youtube.com/embed/tmeOjFno6Do",
        summary: "Imprisoned on the other side of the universe, the mighty Thor finds himself in a deadly gladiatorial contest that pits him against the Hulk, his former ally and fellow Avenger. Thor's quest for survival leads him in a race against time to prevent the all-powerful Hela from destroying his home world and the Asgardian civilization."
      },
      {
        id: "5",
        name: "Thor Rongnarok",
        poster: "https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_.jpg",
        rating: 6,
        video: "https://www.youtube.com/embed/v7MGUNV8MxU",
        summary: "'Discover Your Destiny' is a story about enlightenment of Dar Sanderson, who is an incredibly ambitious executive. The book throws light on the fact that 'happiness and harmony can never be achieved and assured by SUCCESS'. Dar is an achiever in almost every aspect of life, yet he is void from the inside."
      },
      {
        id: "6",
        name: "Captain America Civi War",
        poster: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/52C108DF6292E38F697B97A15684BB24A4A7B02D70D1B6B72B7D65E75D24B7A0/scale?width=1200&aspectRatio=1.78&format=jpeg",
        rating: 8.6,
        video: "https://www.youtube.com/embed/dKrVegVI0Us",
        summary: "Political pressure mounts to install a system of accountability when the actions of the Avengers lead to collateral damage. The new status quo deeply divides members of the team. Captain America (Chris Evans) believes superheroes should remain free to defend humanity without government interference. Iron Man (Robert Downey Jr.) sharply disagrees and supports oversight. As the debate escalates into an all-out feud, Black Widow (Scarlett Johansson) and Hawkeye (Jeremy Renner) must pick a side."
      },
      {
        id: "7",
        name: "Avangers Infinity War",
        poster: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_.jpg",
        rating: 8,
        video: "https://www.youtube.com/embed/6ZfuNTqbHE8",
        summary: "Iron Man, Thor, the Hulk and the rest of the Avengers unite to battle their most powerful enemy yet -- the evil Thanos. On a mission to collect all six Infinity Stones, Thanos plans to use the artifacts to inflict his twisted will on reality. The fate of the planet and existence itself has never been more uncertain as everything the Avengers have fought for has led up to this moment."
      },
      {
        id: "8",
        name: "Avangers Endgame",
        poster: "https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg?region=0%2C0%2C540%2C810",
        rating: 8,
        video: "https://www.youtube.com/embed/TcMBFSGVi1c",
        summary: "Adrift in space with no food or water, Tony Stark sends a message to Pepper Potts as his oxygen supply starts to dwindle. Meanwhile, the remaining Avengers -- Thor, Black Widow, Captain America and Bruce Banner -- must figure out a way to bring back their vanquished allies for an epic showdown with Thanos -- the evil demigod who decimated the planet and the universe."
      }
    ]
    )


    // show the collection
db.new.find({}).pretty()

// get data by name
db.new.find({name: "The Avengers"})

//  get data by rating in greater then or lesthen
//  gretere - $gt
db.new.find({
    rating:{$gt:8}
})
// less then -- $lt
db.new.find({
    rating:{$lt:8}
})

//  inclution

db.new.find({}, {name:1},{rating:1}).pretty()

// exclution
db.new.find({},{name:0, rating:0}).pretty()

// sorting in ascending , and decending
//  asec by rating 1 
db.new.find({}).sort({rating:1}).pretty()
// des by id -1
db.new.find({}).sort({id:-1}).pretty()

// limit method
// wee need highest 1st 3 datas
db.new.find({}).sort({rating:-1}).limit(3)

// need offset

db.new.find({}).sort({id:1}).limit(2).skip(2).pretty()

db.new.find({id:0, name:1, rating:1}).sort({rating:-1}).limit(2)

db.pannai.insertMany([
  {_id:0, prodectName: "Aadu", status: "new", quantiy:15},
  {_id:2, prodectName: "maadu", status: "new", quantiy:20},
  {_id:3, prodectName: "Aadu", status: "new", quantiy:10},
  {_id:4, prodectName: "maadu", status: "urgend", quantiy:30},
  {_id:5, prodectName: "Aadu", status: "urgend", quantiy:40},
  {_id:6, prodectName: "maadu", status: "urgend", quantiy:5},
  {_id:7, prodectName: "koli", status: "sale", quantiy:37}
])

db.pannai.find({status: "urgend"}).pretty()

// aggregate
// its like find method and group by elametn

db.pannai.aggregate([{$match: {status: "urgend"}}]).pretty()

db.pannai.aggregate([{$match: {status: "sale"}}]).pretty()


db.pannai.aggregate([{$match:{status :"urgend"}}, {$group: {name: "$prodectName", totalUrgent: {$sum: "$quantiy"}}}])


db.new.updateMany({},{$set:{language: "Tamil"}})

db.pannai.updateOne({_id:7},{$set:{status: "sale"}})

db.new.updateOne({"id":"6", "id":"4"},{$set: {language: "English"}})

db.new.find({"id":"2"}).pretty()








