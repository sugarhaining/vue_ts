<template>
    <div class="main">
        <ApolloQuery :query="gql => gql`query {
                        users {
                            _id
                            name
                            products {
                                name
                            }
                        }
                    }`">
            <template  slot-scope="{ result: { data, loading } }">
                <div v-if="data || !loading">
                    {{data}}
                </div>
            </template>
        </ApolloQuery>
        {{user}}
    </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
import gql from 'graphql-tag';
import USER from '../graphql/user.gql';

Component.registerHooks([
    'apollo'
])

@Component({

})
export default class Message extends Vue {
    public user = 'default';
    get apollo() {
        return {
            user: {
                query: gql`
                    query {
                        users {
                            _id
                            name
                            products {
                                name
                            }
                        }
                    }`,
            }
        }
    }
}

</script>

<style lang='scss' scoped>
  
</style>
