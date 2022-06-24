const Contact = require("../../model/Contact");

async function addContacts(req, res){
    try{
        const {fullname,  email, number, relationStatus, location} = req.body;
        console.log(req.query);
        console.log(req.user);
        //console.log(req);
        const contact = await new Contact({ fullname, email, number, relationStatus, location, "userId": req.user});
        const result = await contact.save();
        
        return res.send({"success": true, "results": result});
    }catch (error) {
        console.log(error);
    }
}

async function getContacts(req, res){
    try{
        const contacts = await Contact.find({'userId': req.userId.id});
        return res.send({"success": true, "results": contacts})
    }catch (error) {
        console.log(error);
    }
    
}

module.exports = {addContacts, getContacts};