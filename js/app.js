var Meals = Backbone.Collection.extend({
    //model: meal
});

var Meal = Backbone.Model.extend({
   defaults: {
        type: 'Snack',
        meal: 'Not Specified',
        calories: 0
   }
});

var MealView = Backbone.View.extend({

});

var MealsList = Backbone.View.extend({
    el: '.page',

    render: function() {
        // Create context for this
        var self = this;


        this.model.each(function(meal) {
            var template = _.template($('#mealListTemplate').html(), { meals: meals.models});
            self.$el.html(template);
        });




        /**
         ** Use a similar set up to this when connecting to a db like firebase (example is from heroku setup)

        // Create new users collection -- pulls data down each time?? Thus new collection populated??
        var meals = new Meals();

        users.fetch({
            success: function(users) {
                var template = _.template($('#userListTemplate').html(), { users: users.models});
                self.$el.html(template);
            }
        })
        */
    }
});

var meals = new Meals([
    new Meal({ id: 1, mealType: 'Breakfast', meal: 'Oatmeal', calories: 110 }),
    new Meal({ id: 2, mealType: 'Lunch', meal: 'Peanut Butter Sandwich', calories: 190 }),
    new Meal({ id: 3, mealType: 'Snack', meal: 'Carrot Cake Cliff Bar', calories: 230 }),
    new Meal({ id: 4, mealType: 'Dinner', meal: 'Spagetti with Marinara Sauce', calories: 270 })
    ]);

var mealsView = new MealsList({ model: meals });
mealsView.render();