const express = require('express');
const app = express();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mysql = require('mysql');
// const { Sequelize, DataTypes, Model } = require("sequelize");
// const sequelize = new Sequelize("crowspace", "root", "1234", {
//     dialect: "mysql",
//     host: "localhost",
//     port: 3306,
//     define: {
//         timestamps: false
//     },
//     insecureAuth : true
// });
//
// const User = sequelize.define("account", {
//     id: {
//         type: Sequelize.INTEGER,
//         autoIncrement: true,
//         primaryKey: true,
//         allowNull: false
//     },
//     name: {
//         type: Sequelize.STRING,
//         allowNull: false
//     },
//     age: {
//         type: Sequelize.INTEGER,
//         allowNull: false
//     }
// });
//
// class Bog extends Model {}
//
// Bog.init({
//     // Model attributes are defined here
//     firstName: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     lastName: {
//         type: DataTypes.STRING
//         // allowNull defaults to true
//     }
// }, {
//     // Other model options go here
//     sequelize, // We need to pass the connection instance
//     modelName: 'Bog' // We need to choose the model name
// });
//
// User.create({
//     name: "Tom",
//     age: 35
// }).catch(err=>console.log(err));
//
// sequelize.sync().catch(err=> console.log(err));

const unlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(bodyParser.json());
app.use(cors({credentials: true, origin: 'http://localhost:4200'}));
app.use(cookieParser());

const db = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '1234',
    database: 'crowspacee',
    insecureAuth : true
})

db.connect((err) => {
    if(err) {
        throw (err);
    }
    console.log('Database was connected');
})

app.post('/sign-up', (req, res) => {

    const newValues = `email = "${req.body.email}", password = "${
        req.body.password}"`;

    db.query(`INSERT INTO users SET ${newValues};`, (err) => {
        if (err) {
            console.log(err);
            if (err.code === 'ER_DUP_ENTRY') {
                res.status(400).json({ msg: 'Such user already exists!'});
            }
        }
        else {
            res.status(200).json({msg: ''});
        }
    });

});

app.post('/sign-in', (req, res) => {

    if(!req.body) return res.sendStatus(400);

    db.query(`SELECT id, password FROM users WHERE email="${req.body.email}";`, (err, result) => {

        if (result.length === 0) {
            res.status(400).json({ msg: "The user hasn't been signed up in the system!"})

            return;
        }

        if (req.body.password === result[0].password) {
            const token = jwt.sign({
                    id: result[0].id,
                    email: req.body.email,
                    password: result[0].password,
                }, 'Hahaha', { expiresIn: 3600000 }
            );

            res.cookie('USER', token, { httpOnly: false, maxAge: 3600000 });
            res.status(200).json({ msg: ''});
        } else {
            res.status(400).json({ msg: "Incorrect password!"})
        }

    });

})

app.get('/account', (req, res) => {

    const userCookieJwt = req.cookies['USER'];

    jwt.verify(userCookieJwt, 'Hahaha', function(err, decoded) {
        if (err) {
            res.status(403).json(
                {errors: [{msg: 'FORBIDDEN_ADMIN_MSG'}]});
        } else {
            db.query(`SELECT id, email, login, image, balance, about FROM users WHERE id=${decoded.id};`, (err, data) => {
                if (err) {
                    console.log(err);
                } else {
                    res.status(200).json(data[0]);
                }
            });
        }
    });
});

app.get('/account/settings', (req, res) => {

    const userCookieJwt = req.cookies['USER'];

    jwt.verify(userCookieJwt, 'Hahaha', function(err, decoded) {
        if (err) {
            res.status(403).json(
                {errors: [{msg: 'FORBIDDEN_ADMIN_MSG'}]});
        } else {
            db.query(`SELECT id, email, login, image, balance, country, city, phone_number AS phoneNumber, birthday, gender, about FROM users WHERE id=${decoded.id};`, (err, data) => {
                if (err) {
                    console.log(err);
                } else {
                    res.status(200).json(data[0]);
                }
            });
        }
    });
});

app.post('/account/balance', (req, res) => {

    const userCookieJwt = req.cookies['USER'];

    jwt.verify(userCookieJwt, 'Hahaha', function(err, decoded) {
        if (err) {
            res.status(403).json(
                {errors: [{msg: 'FORBIDDEN_ADMIN_MSG'}]});
        } else {
            db.query(`SELECT balance FROM users WHERE id=${decoded.id};`, (err, data) => {
                if (err) {
                    console.log(err);
                } else {
                    const idUser = decoded.id;
                    updateBalance(data[0].balance, idUser);
                }
            });
        }
    });

    function updateBalance(balance, idUser) {

        const newBalance = +balance + +req.body.amount;

        db.query(`UPDATE users SET balance=${newBalance} WHERE id=${idUser};`, (err, data) => {
            if (err) {
                console.log(err);
            } else {
                res.status(200).json(data[0]);
            }
        });
    }
});

app.get('/account/my-projects', (req, res) => {

    const userCookieJwt = req.cookies['USER'];

    jwt.verify(userCookieJwt, 'Hahaha', function(err, decoded) {
        if (err) {
            res.status(403).json(
                {errors: [{msg: 'FORBIDDEN_ADMIN_MSG'}]});
        } else {
            db.query(`SELECT id, title, description, link_campaign AS linkCampaign, image, financial_goal AS financialGoal, country, time_end AS timeEnd, time_start AS timeStart, categories, money_pledged AS moneyPledged FROM campaigns WHERE user_id=${decoded.id};`, (err, data) => {
                if (err) {
                    console.log(err);
                } else {
                    res.status(200).json(data);
                }
            });
        }
    });
});

app.get('/users', (req, res) => {

    db.query(`SELECT id, email, login, image FROM users`, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            res.status(200).json(data);
        }
    });
});

app.get('/users/:id', (req, res) => {

    db.query(`SELECT id, email, login, image FROM users WHERE id=${req.params["id"]};`, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            res.status(200).json(data[0]);
        }
    });
});

app.get('/campaigns', (req, res) => {

    db.query(`SELECT id, title, description, user_id AS userId, link_campaign AS linkCampaign, image, video, financial_goal AS financialGoal, country, time_end AS timeEnd, checking_account AS checkingAccount, time_start AS timeStart, categories, money_pledged AS moneyPledged FROM campaigns;`, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            res.status(200).json(data);
        }
    });
});

app.get('/campaigns/:linkCampaign', (req, res) => {

    db.query(`SELECT campaigns.id, title, description, user_id, link_campaign, campaigns.image, video, financial_goal, campaigns.country, time_end, checking_account, time_start, categories, money_pledged, login FROM campaigns INNER JOIN users ON campaigns.user_id = users.id WHERE campaigns.link_campaign = "${req.params['linkCampaign']}";`, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            res.status(200).json(data[0]);
        }
    });
});

app.get('/rewards', (req, res) => {

    db.query('SELECT id, image, project, cost, bought, rewards.left, title, rewards.description, link_campaign AS linkCampaign, methods_receiving AS methodsReceiving FROM rewards;', (err, data) => {
        if (err) {
            console.log(err);
        }
        else {
            res.status(200).json(data);
        }
    });

});

app.get('/rewards/:id', (req, res) => {

    const userCookieJwt = req.cookies['USER'];

    jwt.verify(userCookieJwt, 'Hahaha', function(err, decoded) {
        if (err) {
            res.status(403).json(
                {errors: [{msg: 'FORBIDDEN_ADMIN_MSG'}]});
        } else {
            db.query(`SELECT id, image, project, cost, bought, rewards.left, title, rewards.description, link_campaign AS linkCampaign, methods_receiving AS methodsReceiving FROM rewards WHERE id=${req.params["id"]};`, (err, data) => {
                if (err) {
                    console.log(err);
                } else {
                    res.status(200).json(data[0]);
                }
            });
        }
    });
});

app.listen(3000, () => {
    console.log('Server start');
});
