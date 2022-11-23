const asyncHandler = require('express-async-handler')
// @desc    Get tasks
// @route   GET /api/tasks
// @access  Private
const getTasks = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'get tasks'})
})

// @desc    Set task
// @route   POST /api/tasks
// @access  Private
const setTask = asyncHandler(async (req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please enter text')
    }

    res.status(200).json({message: 'set task'})
})

// @desc    Update tasks
// @route   PUT /api/tasks/:id
// @access  Private
const updateTask = asyncHandler(async (req, res) => {
    res.status(200).json({message: `update task ${req.params.id}`})
})

// @desc    Get tasks
// @route   GET /api/tasks/:id
// @access  Private
const deleteTask = asyncHandler(async (req, res) => {
    res.status(200).json({message: `delete task ${req.params.id}`})
})

module.exports = {
    getTasks,
    setTask,
    updateTask,
    deleteTask
}