const express = require('express');
const brightLite = require('./models/BrightLite');
const handyStandy = require('./models/HandyStandy');
const caffeinated = require('./models/Caffeinated');
const trackMate = require('./models/d');
const ybf = require('./models/YourBiggestFan');
const caffeinatedInputSchema = require('./models/CaffinatedUserInput');
const router = express();

router.post('/api/brightLite', (req, res) => {

    const data = req.body;

    const newData = new brightLite({
        name: data.name,
        lightLevels: data.lightLevels,
        time: data.time,
        date: Date.now,
        timeline: Array,
        red: +data.red,
        green: +data.green,
        blue: +data.blue,
        timeDiff: +data.timeDiff,
        mode: data.mode
    })

    newData.save()
        .then(i => {
            res.json(i);
        })

        .catch(err => {
            res.status(400).json({ msg: "There was an error", err });
        });
})

//Get current LED State 

router.get('/api/getLed/:name',async (req, res) =>{
    //get the name
    const findLight = await brightLite.find({
        name: req.params.name
    }); 

    if(!findLight){
       return res.status(404).json({msg: "Led name not found"})
    }
    return res.status(200).json(findLight)
});

router.post('/api/handystandy', (req, res) => {

    const data = req.body;

    const newData = new handyStandy({
        name: data.name,
        vibrationCount: data.vibrationCount,
        messages: data.messages,
        date: Date.now,
        timeline: Array
    })

    newData.save()
        .then(i => {
            res.json(i);
        })

        .catch(err => {
            res.status(400).json({ msg: "There was an error", err });
        });
})




// Caffeinated
// ====================================================================

// Set User Input 

router.post('/api/caffeinateduserinput', (req, res) => {

    const newData = new caffeinatedInputSchema({
        userInput: +req.body.userInput
    });

    newData.save()
        .then(item => {
            res.json(item);
        })

        .catch(err => {
            res.status(400).json({ msg: "There was an error", err });
        });
})


// Update User Input 

router.patch('/api/updateuserinput/:id', async (req, res) => {

    const input = await caffeinatedInputSchema.updateOne(
        { _id: req.params.id },
        {
            $set: {
                userInput: req.body.userInput
            }
        }
    );
    res.json(input);
})

// Get User Input 

router.get('/api/getuserinput/', async (req, res) => {
    const findAll = await caffeinatedInputSchema.find();
    res.json(findAll)
})



// Set Cup Ammount 

router.post('/api/caffeinated', (req, res) => {

    const newData = new caffeinated({
        cupsDrunk: +req.body.cupsDrunk,
        // date: Date.now
    })

    newData.save()
        .then(item => {
            res.json(item);
        })

        .catch(err => {
            res.status(400).json({ msg: "There was an error", err });
        });
})

// Get Cups 

router.get('/api/getcups/', async (req, res) => {
    const findAll = await caffeinated.find();
    res.json(findAll)
})

router.post('/api/trackmate', (req, res) => {

    const data = req.body;

    const newData = new trackMate({
        name: data.name,
        coordinates: data.coordinates,
        time: data.time,
        date: Date.now,
        timeline: Array,
        trackStatus: data.trackStatus,
        timeDiff: +data.timeDiff
    })

    newData.save()
        .then(i => {
            res.json(i);
        })

        .catch(err => {
            res.status(400).json({ msg: "There was an error", err });
        });
})

router.post('/api/yourbiggestfan', (req, res) => {

    const data = req.body;

    const newData = new ybf({
        name: data.name,
        temp: +data.temp,
        timeline: Array,
        fanStatus: data.fanStatus
    })

    newData.save()
        .then(i => {
            res.json(i);
        })

        .catch(err => {
            res.status(400).json({ msg: "There was an error", err });
        });
})

router.get('/api/get-light/:name', async (req, res) => {
    const findAll = await brightLite.find();
    res.json(findAll)
})

router.patch('/api/updateLed/:name', async (req, res) => {
    const {red, green, blue} = req.body
    const findAll = await brightLite.findOne({
        name: req.params.name
    })

    if (findAll) {
        const findLed = await brightLite.updateOne(
            { name: req.params.name },
            {
                $set: {
                    state: req.body.state,
                    red: red,
                    green: green,
                    blue: blue
                },

            },
            
        );
        console.log(req.body.state);
        res.json(findLed);
    }


})

module.exports = router;