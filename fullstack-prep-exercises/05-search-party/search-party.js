// // YOUR CODE BELOW
// function searchParty(name, obj) {
//     debugger;
//     let mapToName = [];
//     for (let key in obj) {
//         let element = obj[key];
//         //base case
//         if (element === name) {
//             mapToName.push(key);
//             break;
//         }
//         //if is string
//         if (typeof element === 'string' && element !== name) {
//             continue;
//         }
//         //if is array
//         if (Array.isArray(element) === true) {
//             let arrayElement = searchParty(name, element);
//             if (arrayElement !== null) {
//                 mapToName = mapToName.concat(arrayElement);
//             }
//         }
//         //if is object - dig down
//         //do a recursion here, check if the result is null, if it's not, then push it to the array
//         if (typeof element === 'object' && Array.isArray(element) === false) {
//             let innerElement = searchParty(name, element);
//             if (innerElement !== null) {
//             //mapToName = mapToName.concat(key);
//                 mapToName = mapToName.concat(innerElement);
//                 mapToName[mapToName.length] = key;
//                 break;
//             }
//         }
//     }
//     if (mapToName.length === 0) {
//         return null;
//     }
//     return mapToName;
// }

let newYorkCity = {
    'Manhattan': {
      'Uptown': {
        'Washington Heights': 'Daniel',
        'UWS': 'Cathy'
      },
      'Midtown': {
        'Madison Square': 'Susan',
        'Theater District': ['Robert', 'Latisha']
      },
      'Downtown': {
        'Tribeca': 'Billy',
        'Financial District': {
          'Fullstack': {
            '11th floor': ['David', 'Nimit'],
            '25th floor': 'Ashi'
          }
        }
      }
    },
    'Brooklyn': {
      'Bushwick': 'Marilyn',
      'Bed-Stuy': ['Juan', 'Denice']
    },
    'Queens': {
      'Astoria': 'Ella',
      'Flushing': 'Eric'
    },
    'Bronx': {
      'Fordham': 'Aaron',
      'Melrose': 'Krysten'
    },
    'Staten Island': {
      'Arlington': ['Nadine', 'Mose'],
      'Elm Park': 'Arthur'
    }
  };
  
//   searchParty('Daniel', newYorkCity);

const searchParty = (name, worldObj) => {
    //all the first level places, in an array
    const places = Object.keys(worldObj);
    
    for ( let i = 0; i < places.length; i++) {
        //each individual place (ie object key)
        const place = places[i];
        //the next level of values
        const nextValue = worldObj[place];

        //things that NextValue could be
        if (nextValue === name) {
            return [place];
        }
        else if (typeof nextValue === 'string') {
            continue;
        }
        else if (Array.isArray(nextValue) === true) {
            if (nextValue.includes(name) === true) {
                return [place];
            }
        }
        else if (typeof nextValue === 'object') {
            let innerObject = searchParty(name, nextValue);
            if (innerObject) {
                return [place].concat(innerObject);
            }
        }
    }
    return null;
}

searchParty('Cathy', newYorkCity);