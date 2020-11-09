const Label = require('../models/label')


const AddLabel = async (request, response) => {
    try {
        const label = await new Label(request.body)
        await label.save()
        return response.status(201).json({
            label,
        })
    } catch (error) {
        return response.status(500).json({error: error.message})
    }
}

const FindAll = async (request, response) => {
    try{
        const labels = await Label.find()
        return response.status(200).json({labels})
    } catch (error) {
        return response.status(500).send(error.message)
    }
}

module.exports = {
    AddLabel,
    FindAll,
}