const express = require('express');
const router = express.Router();

// @route   POST /clients/
// @desc    display all clients from Law Firm
// @access  Private
router.get('/', (req, res) => {

});

// @route   POST /clients/client/:id
// @desc    display individual client
// @access  Private
router.post('/:id', (req, res) => {

});

// @route   POST /clients/addClient
// @desc    Add client to Client List
// @access  Private
router.post('/addClient', (req, res) => {

});

// @route   POST /clients/recentClients
// @desc    display Recent clients (5 -10)
// @access  Private
router.post('/recentClients', (req, res) => {

});

// @route   POST /clients/updateClient
// @desc    Update Client info
// @access  Private
router.put('/updateClient', (req, res) => {

});

// @route   POST /clients/deleteClient
// @desc    delete client from application
// @access  Private
router.delete('/deleteClient', (req, res) => {

});

module.exports = router;
