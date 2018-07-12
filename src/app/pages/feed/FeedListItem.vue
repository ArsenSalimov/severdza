<template>
    <b-card class="feed-list-item w-100">
        <b-card-body>
            <p class="text-right">{{formattedDate}}</p>
            <p v-if="!isTextShouldBeTrimmed || isExpaned" class="card-text">{{text}}</p>
            <template v-else>
                <p class="card-text">{{trimmedText}}</p>
                <p class="show-more-button" @click.prevent="showFull">Показать полностью</p>
            </template>

            <photo-attachments v-if="feedItem.photos" :photos="feedItem.photos" />
        </b-card-body>
    </b-card>
</template>

<script>
    import {isToday, isYesterday, isThisYear, format} from 'date-fns';
    import ru from 'date-fns/locale/ru'
    import PhotoAttachments from './PhotoAttachments';

    const SHORT_TEXT_LENGTH = 500;

    export default {
        name: 'FeedListItem',
        props: ['feedItem'],
        components: {
            PhotoAttachments
        },
        data() {
            return {
                isExpaned: false
            }
        },
        computed: {
            text() {
                return this.feedItem.text
            },
            date() {
                return this.feedItem.date
            },
            formattedDate() {
                if (isToday(this.date)) {
                    return this.format(this.date, 'HH:mm');
                } else if (isYesterday(this.date)) {
                    return `Вчера ${this.format(this.date, 'HH:mm')}`
                } else if (isThisYear(this.date)) {
                    return `${this.format(this.date, 'D MMMM')} в ${this.format(this.date, 'HH:mm')}`
                } else {
                    return `${this.format(this.date, 'D MMM YYYY')} в ${this.format(this.date, 'HH:mm')}`
                }
            },
            isTextShouldBeTrimmed() {
                return this.text.length > SHORT_TEXT_LENGTH;
            },
            trimmedText() {
                return this.isTextShouldBeTrimmed ? this.text.substr(0, SHORT_TEXT_LENGTH - 3) + ' ...' : this.text;
            }
        },
        methods: {
            format(date, formatString) {
                return format(date, formatString, {locale: ru});
            },
            showFull() {
                this.isExpaned = true;
            }
        }
    }
</script>

<style lang="less" scoped>
    .feed-list-item {
        white-space: pre-line;

        .hash-tag {
            color: #0099f5;
        }

        .show-more-button {
            color: #42648b;
            opacity: 0.8;
            margin: 0;
            font-weight: 500;
            cursor: pointer;

            &:hover {
                opacity: 1;
            }
        }
    }
</style>