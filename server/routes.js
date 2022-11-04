const express = require('express');
const brightLite = require('./models/BrightLite');
const handyStandy = require('./models/HandyStandy');
const caffeinated = require('./models/Caffeinated');
const trackMate = require('./models/TrackMate');
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
        lightStatus: data.lightStatus,
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

// ====================================================================









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

router.get('/api/getall/', async (req, res) => {
    const findAll = await brightLite.find();
    res.json(findAll)
})

router.patch('/api/updateLed/:name', async (req, res) => {
    const findAll = await ledState.find();
    const arrayName = findAll.filter(item => item.name == req.params.name);
    currentId = "";

    if (arrayName.length === 0) {
        const newValue = new ledState({
            name: req.params.name,
            led: req.body.led,
        });
        newValue.save()
            .then(item2 => {
                res.json(item2)
            })
            .catch(err => {
                res.status(400).json({ msg: "There is an error", err });
            });
    }
    else {
        currentId = arrayName[0]._id

        const findLed = await ledState.updateOne(
            { _id: currentId },
            {
                $set: {
                    led: req.body.led
                }
            }
        );
        res.json(findLed);
    }


})

module.exports = router;