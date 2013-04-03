var AttackSummaryView = Backbone.View.extend({
    initialize: function () {
        _.bindAll(this, "render");
        this.listenTo(this.collection, "add change", this.render);
    },
    render: function() {
        var burstercount=[];
        for (var i=0;i<8;i++) {
            burstercount[i]=0;
        }
        _.each(this.collection.pluck("level"),function(e){burstercount[e-1]++});
        var htmls=[];
        for (var i=0; i<8; i++) {
            var b=burstercount[i];
            if (b>0) {
                htmls.push(b + 'x <span style="color:' + level_color[i] + '">L'+ (i+1) + '</span>');
            }
        }
        this.$el.html(htmls.join(", "));
    }
});