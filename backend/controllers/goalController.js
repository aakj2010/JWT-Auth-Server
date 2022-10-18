const asyncHandler = require('express-async-handler')

// @desc Get goals
// @route GET /api/goals
// @accesss Private
const getGoals = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Get Goals' })
})


// @desc Set goal
// @route POST /api/goals
// @accesss Private
const setGoal = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please Add a text field')
    }
    res.status(200).json({ message: 'Set Goals' })
})


// @desc Update goal
// @route PUT /api/goals/:id
// @accesss Private
const updateGoal = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Update Goal ${req.params.id}` })
})


// @desc delete goal
// @route DELETE /api/goals/:id
// @accesss Private
const deleteGoal = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Delete Goal ${req.params.id}` })
})



module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}