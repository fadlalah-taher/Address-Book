const Contact = require("../../model/Contact");

async function addContacts(req, res){
    try{
        const {fullname,  email, number, relationStatus, location} = req.body;
        console.log(req.query);
        // console.log(req.user);
        // console.log(req.params);
        //console.log(req);
        const contact = await new Contact({ fullname, email, number, relationStatus, location, "userId": req.query});
        const result = await contact.save();
        
        return res.send({"success": true, "results": result});
    }catch (error) {
        console.log(error);
    }
}

// async function getContacts(req, res){
//     try{
//         const contacts = await Contact.find({'userId': req.userId.id});
//         return res.send({"success": true, "results": contacts})
//     }catch (error) {
//         console.log(error);
//     }   
// }

async function deleteContact(req, res){ // success
    try{
        console.log(req.query.id);
        console.log(req.query);
        console.log(req.params.id);
        const contact = await Contact.findByIdAndDelete(req.query.id);
        return res.send({"success": true, "results": contact})
    }catch (error) {
        console.log(error);
    }   
}

async function getContacts(req, res) { // success
    try {
      console.log(req.query);
  
      if (req.query.id) { // ?id=k1231 -> query paramet
        const id = req.query.id;
        const result = await Contact.findById(id);
        console.log('result of specific user =>', result);
        return res.send(result);
      }
  
      const result = await await Contact.find();//.populate('contacts');
      console.log('result =>', result);
  
      return res.send(result);
    } catch (error) {
      console.log(error);
    }
}


async function updateContact(req, res) {
    try{
        const {fullname,  email, number, relationStatus, location} = req.body;
        const contact = await Contact.findByIdAndUpdate(req.query.id, {fullname,  email, number, relationStatus, location})
        return res.send({"success": true, "results": contact})
    }catch (error) {
        console.log(error);
    }
}


module.exports = {addContacts, getContacts, deleteContact, updateContact};