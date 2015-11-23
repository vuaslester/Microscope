/**
 * Created by yhf on 15/11/23.
 */
Meteor.publish('posts', function() {
    return Posts.find();
});

Meteor.publish('somePosts', function(){
    return Posts.find({'author': 'Tom'});
});