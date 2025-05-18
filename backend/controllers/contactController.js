const asyncHandler = require('express-async-handler')
const Contact = require('../models/contactModel');
//@desc get all contacts
//@route GET /api/mycontacts
//@access private
const getContacts = asyncHandler (async (req,res) =>{
    const contacts = await Contact.find({user_id:req.createduser.id});
    res.status(200).json(contacts)
});
//@desc create a contacts
//@route POST /api/mycontacts
//@access private
const createContact = asyncHandler(async (req,res) =>{
    console.log("the request body is:",req.body)
    const{name,email,phone} = req.body
    if(!name || !email || !phone){
        res.status(400)
        throw new Error("All fields are mandatory !");
    }
    const contact = await Contact.create({
        name,
        email,
        phone,
        user_id: req.createduser.id
    })
    res.status(201).json(contact)

});
//@desc get a contact
//@route GET /api/mycontacts/:id
//@access private
const getContact =asyncHandler(async (req,res) =>{
    const contact = await Contact.findById(req.params.id)
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }
    res.status(200).json(contact)
});

//@desc update a contacts
//@route PUT /api/mycontacts/:id
//@access private
const updateContact =asyncHandler(async (req,res) =>{
    const contact = await Contact.findById(req.params.id)
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }
    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}

    )
    res.status(200).json(updatedContact)
});
//@desc delete a contacts
//@route delete /api/mycontacts/:id
//@access private
const deleteContact = asyncHandler(async (req,res) =>{
    const contact = await Contact.findById(req.params.id)
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }
    await Contact.findByIdAndDelete(req.params.id);
    res.status(200).json(contact)
});

module.exports = {getContacts,createContact,getContact,updateContact,deleteContact}