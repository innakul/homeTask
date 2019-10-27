function updateSentence (sentence, letterNumber, newLetter) {
    if (sentence) {
        if (!letterNumber || !newLetter) return sentence;       
        const letterIndex = letterNumber - 1;   
        const wordsList = sentence.split(' ');
        const updatedWordsList = wordsList.map( word => {
            if (!word[letterIndex]) return word;  
            const lettersList = word.split('');
            lettersList[letterIndex] = newLetter;
            return lettersList.join('');
        } );
        return updatedWordsList.join(' ');
    } 
    return null;    
}
updateSentence ('mama', 1, 's'); 