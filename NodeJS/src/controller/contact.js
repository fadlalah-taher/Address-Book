const Contact = require("../../model/Contact");

// Add Contact
async function addContacts(req, res){
    try{
        const {fullname,  email, number, relationStatus, location} = req.body;
        console.log(req.query.id);
        const contact = await new Contact({ fullname, email, number, relationStatus, location, "user": req.query.id});
        const result = await contact.save();
        
        return res.send({"success": true, "results": result});
    }catch (error) {
        res.send(error);
        console.log(error); 
    }
}

// Delete Contact By ID
async function deleteContact(req, res){ 
    try{
        console.log(req.query.id);
        const contact = await Contact.findByIdAndDelete(req.query.id);
        return res.send({"success": true, "results": contact})
    }catch (error) {
        res.send(error);
        console.log(error);
    }   
}

// Get all Contacts or get Contact By his ID
async function getContacts(req, res) { 
    try {
      console.log(req.query);
  
      if (req.query.id) { 
        const id = req.query.id;
        const result = await Contact.findById(id);
        console.log('result of specific user =>', result);
        return res.send(result);
      }
  
      const result = await Contact.find();//.populate('contacts');
      console.log('result =>', result);
  
      return res.send(result);
    } catch (error) {
        res.status(500).send(error);
        console.log(error);
    }
}

// get Contacts by specific user by Id

async function getContactsByUserId(req, res) { // success
    try {
        console.log(req.query);
        console.log(req.query.id);

        const result = await Contact.find({'user': req.query.id});
        console.log('result of specific user =>', result);
        return res.send({"success": true, "results": result})
    } catch (error) {
        console.log(error);
    }
}

// Update Contact
async function updateContact(req, res) {
    try{
        const {fullname,  email, number, relationStatus, location} = req.body;
        const contact = await Contact.findByIdAndUpdate(req.query.id, {fullname,  email, number, relationStatus, location})
        return res.send({"success": true, "results": contact})
    }catch (error) {
        console.log(error);
    }
}


module.exports = {addContacts, getContacts, deleteContact, updateContact, getContactsByUserId};