const schedule = require('../models/scheduleModel');

const ScheduleSocketCtrl = async (socket, data) => {
    const { day, description, id, label, time, title } = data;
    const role = "Hr"
    const userId = '66e873f1fd8e15498c071045'

    const create = await schedule.create({ userId, role, day, description, id, label, time, title })

    socket.emit('schedule-create-response', create)
}

module.exports = ScheduleSocketCtrl