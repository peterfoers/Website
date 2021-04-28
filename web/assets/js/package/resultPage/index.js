import Vue from 'vue';
import ResultPage from './result-page';

new Vue({
    render (createElement) {
        return createElement(ResultPage);
    }
}).$mount('#rslt_page')