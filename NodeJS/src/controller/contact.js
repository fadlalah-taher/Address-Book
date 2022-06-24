const Contact = require("../../model/Contact");

async function addContacts(req, res){
    try{
        const contact = await new Contact({ fullname, email, number, relationStatus, location, "user": req.user});
        const result = await contact.save();
        
        return res.send({"success": true, "results": result});
    }catch (error) {
        console.log(error);
      }
}

module.exports = {addContacts};