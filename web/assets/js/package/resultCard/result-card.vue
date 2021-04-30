<template>
    <!--<div class="col-12 col-md-6 col-lg-4 p-3">-->
        <div class="card">
            <a class="pkg-link" :href="'/package/' + page.id ">
                <div class="row m-0 card-header p-3">
                    <div class="col page-name align-self-center"><!-- CR_ToDo page-name style is not applied -->
                        {{ page.display_name }}
                    </div>
                    <div class="col-auto p-0 align-self-center">
                        <img :src="iconsource" class="repo-type">
                    </div>
                </div>
            </a>
            <div class="p-2">
                <div class="mt-5">
                    {{ description }}
                </div>

                <div class="mt-5">
                    <!-- CR_ToDo I needed an additional <p> tag to separate downloads from rating -->

                    <p v-if="page.downloads"><br><br>Downloads: {{ page.downloads }}</p>
                    <p v-if="page.AvgRating >= 0">Rating: {{ page.AvgRating }}</p>

                    <!-- CR_ToDo isn't this redundant? we either show or we don't, but why set it to None, if it's not shown?
                    {% if page.AvgRating >= 0 %}
                        Rating: {{ page.AvgRating < 0 ? 'None' : page.AvgRating }}<br>
                    {% endif %}-->
                </div>

                <div class="mt-5" v-if="page.devs">
                    Developers
                    <ul v-for="group in page.developers" :key="group.id">
                        <li><a :href="'/group/' + group.id">{{ group.name }}</a></li>

                    <!-- CR-ToDo do we have an example for this?
                    {% if group.getPersonalUser() is null %}
                        {# normal group of users #}
                        <li><a href="/group/{{ group.id }}">{{ group.getName() }}</a></li>
                    {% else %}
                        {# single user personal dev group #}
                        <li><a href="/user/{{ group.getPersonalUser().id }}">{{ group.getPersonalUser().getDisplayName() }}</a></li>
                    {% endif %}
                    -->

                    </ul>
                </div>
            </div>
        </div>
</template>

<script>
export default {
    props: [ 'page' ],
    computed: {
        iconsource: function() {
            let type = this.page.repo_type
            if ( type == 'gpm') {
                return "/images/partners/gpm.png"
            } else if ( type == 'vipm' ) {
                return "/images/partners/vipm.png"
            } else {
                return ""
            } 
        },
        description: function() {
            let description = this.page.description
            return description.length > 150 ? description.slice(0,150) + '...' : description
        }
    }

}
</script>

<style>
.card {
    height: 100%;
    border: 0;
}

.card-header {
    border-radius: 0.25rem 0.25rem 0.25rem 0.25rem !important;
    background-color: #f5f5f5;
    height: 100px;
    padding: 0;
    border: 0;
}

.pkg-link {
    color: #444;
}

.pkg-link:hover {
    color: #444;
}

.repo-type {
    height: 2rem;
    float: right;
}

.page-name {
    font-weight: bold;
    font-size: 20px;
}

.hide {
    display: none;
}
</style>