/**
 * Created by yhf on 15/11/23.
 */

Template.postsList.helpers({
    posts: function() {
        return Posts.find();
    }
});