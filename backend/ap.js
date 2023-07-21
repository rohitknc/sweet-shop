var e = require("express");
var r = e.Router();
var multer = require("multer");
var conn = require("./conn");
var path = require('path');
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname))
    }
})
var upload = multer({
    storage: storage
})
r.post("/upload", upload.single("image"), (req, res) => {
    const image = req.file.filename;
    console.log(image);
    const email = req.body.email;
    conn.query("update signup set image=? where email=?", [image, email], (err, result) => {
        if (err)
            return err;
        else {
            res.json({
                submit: true,
                iamge: image
            });
        }
    })
})
r.post("/regi", (req, res) => {
    console.log("sita ram ");
    console.log(req.body);
    const { status, fname, email, password, phonenum } = req.body;
    conn.query("select * from signup where email=?", [email], (err, result) => {
        if (err) {
            res.json({
                m: "star"
            });
        }
        else {
            if (result.length > 0) {
                res.send({
                    m: "already exist",
                    rk: result
                });
            }
            else {
                conn.query("insert into signup set?", req.body, (err, result1) => {
                    if (err) {
                        res.json({
                            m: err
                        });
                    }
                    else {
                        res.send({
                            m: result1,
                            k: "submitted succwssfully"
                        });
                    }
                });
            }
        }
    });
});


r.post('/login', (req, res) => {
    console.log(req.body);
    email = req.body.email;
    ps = req.body.password;
    conn.query("select * from signup where email=? and password=?", [email, ps], (err, result) => {
        if (err) {
            res.send({
                err: err
            });
        }
        else {
            if (result.length > 0) {
                res.json({
                    ms: "true",
                    email: email,
                    ps: ps
                });
                conn.query("update signup set status=? where email=?", ["active", email], (err, rs) => {
                    if (err) {
                        res.send(err);
                    }
                });
            }
            else {
                res.json({
                    ms: "not correct"
                })
            }
        }
    });
});
r.post('/pdata', (req, res) => {
    conn.query("insert into product set?", req.body, (err, result) => {
        if (err) {
            res.json({
                m: err
            });
        }
        else {
            res.send({
                m: result,
                k: "submitted succwssfully"
            });
        }
    })
});
r.post('/cdata', (req, res) => {
    conn.query("insert into catagary set?", req.body, (err, result) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send({
                m: "send successfully"
            });
        }
    });
});
r.get('/getdata', (req, res) => {
    conn.query("select * from catagary", (err, result) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(result);
        }
    });
});
r.post('/delete', (req, res) => {
    const cat = req.body.k;
    conn.query("delete from catagary where cat=?", [cat], (err, result) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(result);
        }
    });
});
r.get('/getpdata', (req, res) => {
    conn.query("select * from product", (err, result) => {
        console.log(result);
        if (err) {
            res.send(err);
        }
        else {
            res.send(result);
        }
    });
});
r.post('/delete1', (req, res) => {
    pname = req.body.k;
    conn.query("delete from product where pname=?", [pname], (err, result) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(result);
        }
    });
});
r.post('/submit2', (req, res) => {
    cn = req.body.cname;
    em = req.body.email;
    c = req.body.contact;
    city = req.body.city;
    a = req.body.address;
    pprice = req.body.pprice
    pname = req.body.pname;
    q = req.body.quantity;
    conn.query("insert into booking values(?,?,?,?,?,?,?,?,?)", [cn, em, c, city, a, pname, pprice, q, "place order"], (err, result) => {
        if (err) {
            res.send(err);
        }
        else {
            console.log("submitted ");
        }
    }
    );
});
r.post("/power", (req, res) => {

    conn.query("select * from signup where status=?", ["active"], (err, result) => {
        if (err) {
            res.send(err);
        }
        else {

            res.json(
                {
                    submit: true,
                    data: result[0]
                }
            )
        }

    });


});
r.post("/edit", (req, res) => {
    var name = req.body.name;
    var email = req.body.email;
    console.log(name, email);
    conn.query("update signup set fname=? where email=?", [name, email], (err, result) => {
        if (err)
            return err
        else {
            res.json({
                submit: true
            })
        }
    })
})
r.get("/dash", (req, res) => {
    conn.query("select * from signup", (err, r1) => {
        if (err) {
            return err
        }
        else {
            conn.query("select * from product", (err, r2) => {
                if (err)
                    return err
                else {
                    conn.query("select * from booking", (err, r3) => {
                        if (err)
                            return err
                        else {
                            conn.query("select * from booking where status=?", ['order placed'], (err, r4) => {
                                if (err)
                                    return err
                                else {
                                    res.send({
                                        rs1: r1.length,
                                        rs2: r2.length,
                                        rs3: r3.length,
                                        rs4: r4.length
                                    })
                                }
                            })
                        }
                    })
                }
            })
        }
    })
})
r.post("/logout", (req, res) => {
    conn.query("update signup set status=? where status=?", ['inactive', 'active'], (err, result) => {
        if (err)
            return err;
        else {
            res.send(true);
        }
    })
})
r.get("/getall", (req, res) => {
    conn.query("select * from signup", (err, result) => {
        if (err) {
            return err;
        }
        else {
            res.send({
                result: result
            })
        }
    })
})
r.get('/getpro', (req, res) => {
    conn.query('select * from booking', (err, result) => {
        if (err)
            return err
        else {
            res.send({
                result: result
            })
        }
    })
})
r.post('/pass', (req, res) => {
    conn.query('update booking set status=? where pname=? and email=?', ["order placed", req.body.m, req.body.x], (err, rs) => {
        if (err) {
            return err
        }
        else {
            console.log("changed")
        }
    })
})
r.get("/getvi", (req, res) => {
    conn.query("select * from signup where status=?", ["active"], (err, r1) => {
        if (err)
            return err
        else {
            conn.query("select * from booking where email=?", [r1[0].email], (err, r2) => {
                if (err)
                    return err
                else {
                    res.send(r2);
                }
            })
        }
    })
})
r.get("/dest",(req,res)=>
{
    conn.query("update signup set status=? where status=?",["inactive","active"],(err,ress)=>
    {
        if (err)
        return err
        else{
            res.send("success");
        }
    })
})
module.exports = r;