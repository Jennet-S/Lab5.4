const friends = require('../models/friends');

function findFriendById(id) {
    return friends.find(friend => friend.id == id);
}

function addFriend(newFriend) {
    if (!newFriend.id) {
        newFriend.id = friends.length +1;
    }
    friends.push(newFriend);
    return newFriend;
}

function updateFriendById(id, updateFriend) {
    const index = friends.findIndex(friend => friend.id == id);
    if (index !== -1) {
        friends[index] = updateFriend;
        return updateFriend;
    } else {
        return null;
    }
} 
module.exports = {
    findFriendById,
    addFriend,
    updateFriendById
};