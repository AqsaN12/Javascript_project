function make_album(artist_name, album_title, no_of_tracks=0){
    albums = []
    if(arguments.length == 2){
        album = {
            artist: artist_name,
            title: album_title
        }
    }else{
        album = {
            artist: artist_name,
            title: album_title,
            total_tracks: no_of_tracks
        }
    }  
    
    albums.push(album)
    console.log("Album added successfully: ", album)
}





make_album("Muhammad Ahmad", "Inteqaam")
make_album("Malik Asad", "Ishq me ruswai", 3)
make_album("Usama", "Me mar chuka hn")