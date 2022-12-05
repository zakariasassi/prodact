const express = require('express')
const users = require('../users.json')
const posts = require('../posts.json')

const router = express.Router()


// const users = {
//     1: {
//         id: 1,
//         name: 'Bruce Steve',
//         salary : '20k'
//     },
//     2: {
//         id: 2,
//         name: 'Zakaria Sassi',
//         salary : '20k'

//     },
//     3: {
//         id: 3,
//         name: ' Ahmed Smith',
//         salary : '20k'

//     },
//     4: {
//         id: 4,
//         name: 'Aya ALi',
//         salary : '20k'

//     },

// }



router.get('/' ,  (req, res) =>  {
    res.send('Prodacts main Page')
}  )

router.get('/posts' ,  (req, res) =>  {
    res.send(
        posts
    )
  

}  )

router.get('/users' ,  (req, res) =>  {
    res.send(
        users
    )
  

}  )



router.get('/posts' ,  (req, res) =>  {
    res.send(
        users
    )
  

}  )


module.exports = router