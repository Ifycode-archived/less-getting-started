registerPlugin({
    install: function (less, pluginManager, functions) {
        functions.add('returnTen', function() {
            return 10;
        });

        functions.add('average', function() {
            let total = 0;
            for (let x = 0; x < arguments.length; x++) {
                total += arguments[x].value;
            }

            let calcAverage = total / arguments.length;
            return calcAverage + 'px';
        });
    }
})