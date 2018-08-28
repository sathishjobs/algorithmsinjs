/**
 * Time Complexity
 * bigO notation : 
 * Linear runtime O(n)
 */

function harmlessRansomNote(noteText, magazineText) {
    //convert the noteText to array by word
    let noteArr = noteText.split(' ');
    //convert the magazineText to array by word
    var magazineArr = magazineText.split(' ');
    //hold the word count for magazineArr
    var magazineObj = {};
    //create the magazineObj with word count of magazineArr
    magazineArr.forEach(word => {
        if (!magazineObj[word]) magazineObj[word] = 0;
        magazineObj[word]++;
    })
    //result holder
    var noteIsPossible = true;
    noteArr.forEach(word => {
        //check the noteArr found in mazagineObj 
        if (magazineObj[word]) {
            //if it is found reduce the word count
            magazineObj[word]--;
            //if it is word count is < 0 set noteIsPossible = false
            if (magazineObj[word] < 0) noteIsPossible = false;
        }
        else noteIsPossible = false;
    })
    return noteIsPossible;
}

harmlessRansomNote('this is a secret note for you from a secret admirer', 'puerto rico is a place of great wonder and excitement it has many secret waterfall locatoins that i am an admirer of you must hike quite a distance to find the secret places as they are far from populated areas but it is worth the effort a tip i have for you is to go early in the morning when it is not so hot out also note that you must wear hiking boots this is one of the best places i have ever visited');
