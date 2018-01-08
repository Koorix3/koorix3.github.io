/**
 * Character Sorter
 */
class Sorter {
    constructor(characterListToSort, voteContainer) {
        this.LEFT_SIDE_WINNER = 1;
        this.RIGHT_SIDE_WINNER = 2;
        this.LEFT_SIDE = 0;
        this.RIGHT_SIDE = 1;
        this.sortedList = [];
        this.state = {
            unsortedList: [],
            currentCompare: [],
            sortedStep: []
        };
        this.stateHistoryStack = [];
        this.voteContainer = voteContainer;
        this.state = this.initializeState(characterListToSort);
        this.preloadImages(characterListToSort);
        this.bindEvents();
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
        let shuffledCharacterList = this.shuffle(characterList);
        // Make list of characters a list of lists containing a character each, 
        // which is the state from which the merge sort can start sorting
        let spreadCharacterList = shuffledCharacterList.map((elem) => {
            return [elem];
        });
        return {
            currentCompare: spreadCharacterList.slice(0, 2),
            unsortedList: spreadCharacterList.slice(2),
            sortedStep: []
        };
    }
    preloadImages(characterList) {
        let imageLoader = $('#image-loader');
        characterList.forEach(element => {
            let image = $('<img />').attr('src', element.imageName);
            imageLoader.append(image);
        });
    }
    bindEvents() {
        // character click event
        this.voteContainer.find('.vote-character').on('click', (event) => {
            let target = event.delegateTarget;
            let vote = ($(target).attr('id') === 'left-character-window') ? 1 : 2;
            this.castVote(vote);
        });
        this.voteContainer.find('#undo-last').on('click', () => this.undoLastStep());
    }
    presentVote(state) {
        let leftCharacter = state.currentCompare[this.LEFT_SIDE][0];
        let rightCharacter = state.currentCompare[this.RIGHT_SIDE][0];
        let leftWindow = this.voteContainer.find('#left-character-window');
        let rightWindow = this.voteContainer.find('#right-character-window');
        leftWindow.find('h3.character-name').text(leftCharacter.name);
        rightWindow.find('h3.character-name').text(rightCharacter.name);
        leftWindow.find('img').attr('src', leftCharacter.imageName);
        rightWindow.find('img').attr('src', rightCharacter.imageName);
        leftWindow.find('.series-name').text(leftCharacter.seriesTitle);
        rightWindow.find('.series-name').text(rightCharacter.seriesTitle);
    }
    castVote(decision) {
        let currentState = this.state;
        // Save current state for undoing
        this.stateHistoryStack.push($.extend(true, {}, currentState));
        this.voteContainer.find('#undo-last').removeClass('disabled').removeAttr('disabled');
        // move winner to sorted list    
        let winnerList = (decision === this.LEFT_SIDE_WINNER) ? 0 : 1;
        currentState.sortedStep.push(currentState.currentCompare[winnerList].shift());
        // get next sorting step state
        let newState = this.getNextSortingStep(currentState);
        if (newState === null) {
            this.presentResult(this.state.unsortedList.pop());
            return;
        }
        // present new vote
        this.presentVote(newState);
    }
    presentResult(sortedList) {
        let $resultScreen = $('#result-screen');
        let $tableBody = $resultScreen.find('tbody');
        let trList = [];
        sortedList.forEach((element, index) => {
            let tr = $('<tr></tr>');
            let ranking = $('<td></td>').text(index + 1);
            let name = $('<td></td>').text(element.name);
            tr.append(ranking);
            tr.append(name);
            trList.push(tr);
        });
        $tableBody.append(trList);
        $resultScreen.removeAttr('hidden');
        this.voteContainer.attr('hidden', 'hidden');
    }
    /**
     *
     * @param currentState
     */
    getNextSortingStep(currentState) {
        // check for trivial solutions (one of the lists is empty)
        let solveTrivial = -1;
        if (currentState.currentCompare[this.LEFT_SIDE].length === 0) {
            // merge remaining right side into sorted list
            solveTrivial = this.RIGHT_SIDE;
        }
        else if (currentState.currentCompare[this.RIGHT_SIDE].length === 0) {
            // merge remaining left side into sorted list      
            solveTrivial = this.LEFT_SIDE;
        }
        if (solveTrivial !== -1) {
            currentState.unsortedList.push(currentState.sortedStep.concat(currentState.currentCompare[solveTrivial]));
            if (currentState.unsortedList.length === 1) {
                // finished sorting 
                return null;
            }
            else {
                currentState.currentCompare = currentState.unsortedList.slice(0, 2);
                currentState.unsortedList = currentState.unsortedList.slice(2);
                currentState.sortedStep = [];
            }
        }
        return currentState;
    }
    /**
     *
     */
    undoLastStep() {
        this.state = this.stateHistoryStack.pop();
        this.presentVote(this.state);
        if (this.stateHistoryStack.length === 0) {
            this.voteContainer.find('#undo-last').addClass('disabled').attr('disabled', 'disabled');
        }
    }
}
