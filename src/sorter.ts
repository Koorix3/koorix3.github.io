/**
 * Character Sorter 
 */

interface Character {
  name: string;
  imageName: string;
}

interface State {
  unsortedList: Array<Character[]>;
  currentCompare: Array<Character[]>;
  sortedStep: Character[];
}

let test = new Promise(function(resolve, reject) {});

class Sorter {
  private characterList: Character[];

  private sortedList = [];
  private state : State = {
    unsortedList: [],
    currentCompare: [],    
    sortedStep: []
  };

  constructor(characterListToSort: Character[]) {
    let characterList = this.shuffle(characterListToSort);

    this.state = this.initializeState(characterList);
  }

  /**
   * Shuffles the given array and returns a new stack 
   * @param array Character array to shuffle
   */
  shuffle(array: Character[]) : Character[] {
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
  initializeState(characterList: Character[]) : State {
    // Make list of characters a list of lists containing a character each, 
    // which is the state from which the merge sort can start sorting
    let spreadCharacterList = characterList.map((elem) => {
      return [elem];
    });

    return {
      unsortedList: spreadCharacterList.slice(2),
      currentCompare: spreadCharacterList.slice(0, 2),    
      sortedStep: []
    };
  }

}