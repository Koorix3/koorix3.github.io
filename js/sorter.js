/**
 * Character Sorter
 */
let test = new Promise(function (resolve, reject) { });
class Sorter {
    constructor(characterListToSort, voteContainer) {
        this.LEFT_SIDE_WINNER = 1;
        this.RIGHT_SIDE_WINNER = 2;
        this.sortedList = [];
        this.state = {
            unsortedList: [],
            currentCompare: [],
            sortedStep: []
        };
        let characterList = this.shuffle(characterListToSort);
        this.voteContainer = voteContainer;
        this.state = this.initializeState(characterList);
        this.presentVote(this.state);
    }
    /**
     * Shuffles the given array and returns a new stack
     * @param array Character array to shuffle
     */
    shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }
    /**
     * Creates the state of the first vote from the given Character list
     * @param characterList Character array to be initialized
     */
    initializeState(characterList) {
        // Make list of characters a list of lists containing a character each, 
        // which is the state from which the merge sort can start sorting
        let spreadCharacterList = characterList.map((elem) => {
            return [elem];
        });
        return {
            currentCompare: spreadCharacterList.slice(0, 2),
            unsortedList: spreadCharacterList.slice(2),
            sortedStep: []
        };
    }
    presentVote(state) {
        let leftCharacter = state.currentCompare[0][0];
        let rightCharacter = state.currentCompare[1][0];
        let leftWindow = this.voteContainer.find('#left-character-window');
        let rightWindow = this.voteContainer.find('#right-character-window');
        leftWindow.find('h3.character-name').text(leftCharacter.name);
        rightWindow.find('h3.character-name').text(rightCharacter.name);
        leftWindow.find('img').attr('src', leftCharacter.imageName);
        rightWindow.find('img').attr('src', rightCharacter.imageName);
    }
    castVote(decision) {
        let currentState = this.state;
        // move winner to sorted list    
        let winnerList = (decision === this.LEFT_SIDE_WINNER) ? 0 : 1;
        currentState.sortedStep.push(currentState.currentCompare[winnerList].shift());
        // get next sorting step state
        let newState = this.getNextSortingStep(currentState);
        // present new vote
        this.presentVote(newState);
    }
    getNextSortingStep(currentState) {
        // check for trivial solutions (one of the lists is empty)
        return null;
    }
}
