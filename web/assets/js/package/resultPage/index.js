import Vue from 'vue';
import ResultPage from './result-page';

new Vue({
    el: 'ResultPage',
    render (createElement) {
        return createElement(ResultPage,
            {
                props: {
                    list: this.$el.attributes.list.value
                }
            });
    }
})