const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log(req.oidc.isAuthenticated()); // true or false for if user is logged in or not
    res.render('index', { 
        title: 'Express Demo', 
        year: 2023,
        isAuthenticated: req.oidc.isAuthenticated(),
        user: req.oidc.user,
    });
});

router.get('/about', (req, res) => {
    console.log(req.oidc.isAuthenticated());
    res.render('about', { 
        title: 'About Us',
        text: 'This is the about page',
        isAuthenticated: req.oidc.isAuthenticated(),
        user: req.oidc.user, 
    });
});

router.get('/contact', (req, res) => {
    console.log(req.oidc.isAuthenticated());
    res.render('contact', { 
        title: 'Contact Us',
        text: 'This is the contact page',
        isAuthenticated: req.oidc.isAuthenticated(),
        user: req.oidc.user, 
    });
});

/*router.get('/login', (req, res) => {
    
    res.render('index', { title: 'Login Demo', year: 2023 });
});*/

module.exports = router;