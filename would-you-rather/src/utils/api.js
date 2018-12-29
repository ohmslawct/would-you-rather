import firebaseApp from "../firebaseApp";

//
// let users = {
//   sarah_edo: {
//     id: "sarah_edo",
//     name: "Sarah Drasner",
//     author: "Sarah D.",
//     avatarURL: "https://tylermcginnis.com/would-you-rather/sarah.jpg",
//     polls: ['8xf0y6ziyjabvozdd253nd', 'hbsc73kzqi75rg7v1e0i6a', '2mb6re13q842wu8n106bhk', '6h5ims9iks66d4m7kqizmv', '3sklxkf9yyfowrf0o1ftbb'],
//   },
//   tylermcginnis: {
//     id: "tylermcginnis",
//     author: "Sarah D.",
//     name: "Tyler McGinnis",
//     avatarURL: "https://tylermcginnis.com/would-you-rather/tyler.jpg",
//     polls: ['5c9qojr2d1738zlx09afby', 'f4xzgapq7mu783k9t02ghx', 'nnvkjqoevs8t02lzcc0ky', '4pt0px8l0l9g6y69ylivti', 'fap8sdxppna8oabnxljzcv', 'leqp4lzfox7cqvsgdj0e7', '26p5pskqi88i58qmza2gid', 'xi3ca2jcfvpa0i3t4m7ag'],
//   }
// }

let users = {
  sarahedo: {
    id: 'sarahedo',
    name: 'Sarah Edo',
    answers: {
      "8xf0y6ziyjabvozdd253nd": 'optionOne',
      "6ni6ok3ym7mf1p33lnez": 'optionOne',
      "am8ehyc8byjqgar0jgpub9": 'optionTwo',
      "loxhs1bqm25b708cmbf3g": 'optionTwo'
    },
    questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9']
  },
  tylermcginnis: {
    id: 'tylermcginnis',
    name: 'Tyler McGinnis',
    answers: {
      "vthrdm985a262al8qx3do": 'optionOne',
      "xj352vofupe1dqz9emx13r": 'optionTwo',
    },
    questions: ['loxhs1bqm25b708cmbf3g', 'vthrdm985a262al8qx3do'],
  },
  johndoe: {
    id: 'johndoe',
    name: 'John Doe',
    answers: {
      "xj352vofupe1dqz9emx13r": 'optionOne',
      "vthrdm985a262al8qx3do": 'optionTwo',
      "6ni6ok3ym7mf1p33lnez": 'optionOne'
    },
    questions: ['6ni6ok3ym7mf1p33lnez', 'xj352vofupe1dqz9emx13r'],
  }
}


let polls2 = {
  "8xf0y6ziyjabvozdd253nd": {
    author: "sarah_edo",
    id: "8xf0y6ziyjabvozdd253nd",
    text: "Poll #1",
    timestamp: 1518122597860,
  },
  "5c9qojr2d1738zlx09afby": {
    author: "tylermcginnis",
    id: "5c9qojr2d1738zlx09afby",
    text: "Poll #2",
    timestamp: 1518043995650,
  }
}

let polls = {
  "8xf0y6ziyjabvozdd253nd": {
    id: '8xf0y6ziyjabvozdd253nd',
    author: 'sarahedo',
    timestamp: 1467166872634,
    optionOne: {
      votes: ['sarahedo'],
      text: 'have horrible short term memory',
    },
    optionTwo: {
      votes: [],
      text: 'have horrible long term memory'
    }
  },
  "6ni6ok3ym7mf1p33lnez": {
    id: '6ni6ok3ym7mf1p33lnez',
    author: 'johndoe',
    timestamp: 1468479767190,
    optionOne: {
      votes: [],
      text: 'become a superhero',
    },
    optionTwo: {
      votes: ['johndoe', 'sarahedo'],
      text: 'become a supervillian'
    }
  },
  "am8ehyc8byjqgar0jgpub9": {
    id: 'am8ehyc8byjqgar0jgpub9',
    author: 'sarahedo',
    timestamp: 1488579767190,
    optionOne: {
      votes: [],
      text: 'be telekinetic',
    },
    optionTwo: {
      votes: ['sarahedo'],
      text: 'be telepathic'
    }
  },
  "loxhs1bqm25b708cmbf3g": {
    id: 'loxhs1bqm25b708cmbf3g',
    author: 'tylermcginnis',
    timestamp: 1482579767190,
    optionOne: {
      votes: [],
      text: 'be a front-end developer',
    },
    optionTwo: {
      votes: ['sarahedo'],
      text: 'be a back-end developer'
    }
  },
  "vthrdm985a262al8qx3do": {
    id: 'vthrdm985a262al8qx3do',
    author: 'tylermcginnis',
    timestamp: 1489579767190,
    optionOne: {
      votes: ['tylermcginnis'],
      text: 'find $50 yourself',
    },
    optionTwo: {
      votes: ['johndoe'],
      text: 'have your best friend find $500'
    }
  },
  "xj352vofupe1dqz9emx13r": {
    id: 'xj352vofupe1dqz9emx13r',
    author: 'johndoe',
    timestamp: 1493579767190,
    optionOne: {
      votes: ['johndoe'],
      text: 'write JavaScript',
    },
    optionTwo: {
      votes: ['tylermcginnis'],
      text: 'write Swift'
    }
  },
}




function getUsers() {
  // get current user
  // let currentUser = "Qa0ooijJoRcEX4Axn7n2f0f47FF2"
  // return currentUser;
    return new Promise((res, rej) => {
      setTimeout(() => res({...users}), 1000)
    })
  }

function getPolls(){
  // get Polls
  return new Promise((res, rej) => {
    setTimeout(() => res({...polls}), 1000)
    console.log("Polls: ", polls)
  })
}

export function getInitialData () {

  return Promise.all([
    getUsers()
    ,
    getPolls(),
  ]).then(([users, polls]) => {
  //  console.log("Polls: ", polls)
    return {users, polls,}
}
)}


function _savePoll(poll) {

//let author = poll.author;

let author = firebaseApp.auth().currentUser.email;

if (author === ""){
  author = firebaseApp.auth().currentUser.email;
}


  console.log("Saving Poll....",poll, poll.poll, "Author: ", author);

  let optionOneText= poll.poll.textOne.textOne;
  let optionTwoText= poll.poll.textTwo.textTwo;

  return new Promise( (res, rej) => {

    const formattedPoll = formatPoll({
      optionOneText,
      optionTwoText,
      author
    })

    setTimeout(() => {
      polls = {
        ...polls,
        [formattedPoll.id]: formattedPoll,
      }
      res(formattedPoll)
    }, 1000)  // setTimeout


  })
}














export function formatPoll ({ optionOneText, optionTwoText, author }) {
  return {
    id: generateUID(),
    timestamp: Date.now(),
    author,
    optionOne: {
      votes: [],
      text: optionOneText,
    },
    optionTwo: {
      votes: [],
      text: optionTwoText,
    }
  }
}


export function formatDate (timestamp) {
  const d = new Date(timestamp)
  const time = d.toLocaleTimeString('en-US')
  return time.substr(0, 5) + time.slice(-2) + ' | ' + d.toLocaleDateString()
}

// function formatPoll({ text, author }) {
//   return {
//     author,
//     id: generateUID(),
//     text,
//     timestamp: Date.now()
//   }
// }

export function savePoll (poll) {
  return _savePoll(poll)
}


export function saveLikeToggle (info) {
  return _saveLikeToggle(info)
}

export function _saveLikeToggle ({ id, hasLiked, authedUser }) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      polls = {
        ...polls,
        [id]: {
          ...polls[id],
          likes: hasLiked === true
            ? polls[id].likes.filter((uid) => uid !== authedUser)
            : polls[id].likes.concat([authedUser])
        }
      }

      res()
    }, 500)
  })
}


function generateUID () {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}
