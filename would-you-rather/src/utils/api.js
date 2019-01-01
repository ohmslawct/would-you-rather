import firebaseApp from "../firebaseApp";
import gageAvatar from "../images/gage.jpg";

let users = {
  sarahedo: {
    id: 'gage',
    name: 'gage',
    answers: {
      "8xf0y6ziyjabvozdd253nd": 'optionOne',
      "6ni6ok3ym7mf1p33lnez": 'optionOne',
      "am8ehyc8byjqgar0jgpub9": 'optionTwo',
      "loxhs1bqm25b708cmbf3g": 'optionTwo'
    },
    questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9'],
    avatarURL: gageAvatar,

  },
  tylermcginnis: {
    id: 'mariah',
    name: 'mariah',
    answers: {
      "vthrdm985a262al8qx3do": 'optionOne',
      "xj352vofupe1dqz9emx13r": 'optionTwo',
    },
    questions: ['loxhs1bqm25b708cmbf3g', 'vthrdm985a262al8qx3do'],
    avatarURL: "https://cdn3.iconfinder.com/data/icons/avatars-9/145/Avatar_Cat-512.png",

  },
  johndoe: {
    id: 'dianne',
    name: 'dianne',
    answers: {
      "xj352vofupe1dqz9emx13r": 'optionOne',
      "vthrdm985a262al8qx3do": 'optionTwo',
      "6ni6ok3ym7mf1p33lnez": 'optionOne'
    },
    questions: ['6ni6ok3ym7mf1p33lnez', 'xj352vofupe1dqz9emx13r'],
    avatarURL: "https://store.playstation.com/store/api/chihiro/00_09_000/container/US/en/99/UP2538-CUSA05620_00-AV00000000000074//image?_version=00_09_000&platform=chihiro&w=720&h=720&bg_color=000000&opacity=100",

  }
}


let polls = {
  "8xf0y6ziyjabvozdd253nd": {
    id: '8xf0y6ziyjabvozdd253nd',
    author: 'mariah',
    timestamp: 1467166872634,
    optionOne: {
      votes: [],
      text: 'Eat sushi?',
    },
    optionTwo: {
      votes: [],
      text: 'Eat tacos?'
    }
  },
  "6ni6ok3ym7mf1p33lnez": {
    id: '6ni6ok3ym7mf1p33lnez',
    author: 'dianne',
    timestamp: 1468479767190,
    optionOne: {
      votes: [],
      text: 'Walk down the beach in Maine in the winter.',
    },
    optionTwo: {
      votes: ['johndoe', 'sarahedo'],
      text: 'Eat sixty scoops of ice cream in a warm restaurant.'
    }
  },
  "am8ehyc8byjqgar0jgpub9": {
    id: 'am8ehyc8byjqgar0jgpub9',
    author: 'gage',
    timestamp: 1488579767190,
    optionOne: {
      votes: [],
      text: 'Watch a movie.',
    },
    optionTwo: {
      votes: ['sarahedo'],
      text: 'Go swimming.'
    }
  },
  "loxhs1bqm25b708cmbf3g": {
    id: 'loxhs1bqm25b708cmbf3g',
    author: 'mariah',
    timestamp: 1482579767190,
    optionOne: {
      votes: [],
      text: 'Buy a toy',
    },
    optionTwo: {
      votes: ['sarahedo'],
      text: 'Buy a car'
    }
  },
  "vthrdm985a262al8qx3do": {
    id: 'vthrdm985a262al8qx3do',
    author: 'gage',
    timestamp: 1489579767190,
    optionOne: {
      votes: ['gage'],
      text: 'Ride a train',
    },
    optionTwo: {
      votes: ['mariah'],
      text: 'Ride an airplane'
    }
  },
  "xj352vofupe1dqz9emx13r": {
    id: 'xj352vofupe1dqz9emx13r',
    author: 'gage',
    timestamp: 1493579767190,
    optionOne: {
      votes: ['dianne'],
      text: 'Own a coffee shop',
    },
    optionTwo: {
      votes: ['mariah'],
      text: 'Own a restaurant'
    }
  },

  "zj352vofupe1dqz9emx13r": {
    id: 'zj352vofupe1dqz9emx13r',
    author: 'gage',
    timestamp: 1493579767191,
    optionOne: {
      votes: [],
      text: 'Buy Lego Millenium Falcon',
    },
    optionTwo: {
      votes: [],
      text: 'Contribute to your Roth IRA'
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
