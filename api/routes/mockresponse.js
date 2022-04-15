const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) =>{
    res.status(200).json({
        'items':[
            {
                name: 'Engineering VIIII Semester Examinations Jan 2021',
                url: 'https://firebasestorage.googleapis.com/v0/b/new-database-d16b8.appspot.com/o/IN%2FKU%2FCS%2F05%2FDatesheet%2FEngineering%20V%20Semester%20Examinations%20Jan%202021.pdf?alt=media&token=c38ca851-1060-47d1-adae-0015876927e7',
                directory:'IN/KU/CS/05/Datesheet',
            },
            {
                name: 'Engineering VII Semester Examinations Jan 2021',
                url: 'https://firebasestorage.googleapis.com/v0/b/new-database-d16b8.appspot.com/o/IN%2FKU%2FCS%2F07%2FDatesheet%2FEngineering%20VII%20Semester%20Examinations%20Jan%202021.pdf?alt=media&token=43357cec-58c9-45b7-b0af-f608cae6db95',
                directory:'IN/KU/CS/07/Datesheet',         
            }
        
        ]
     
    });
});
router.post('/', (req, res, next) =>{
    res.status(201).json(
        {
        message: 'post working'
    }
    );
});

// router.get('/:id', (req, res, next) => {
// const id = req.params.itemId;
// if(id === 'demoId'){
//     res.status(200).json({
//         message: 'demoId response',
//         id: id
//     });

// }else{
//     res.status(200).json({
//         message: 'u passed an id'
//     });
// }
// });

module.exports = router;