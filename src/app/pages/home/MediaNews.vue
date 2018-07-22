<template>
    <b-container>
        <b-row class="justify-content-md-start">
            <b-col col md="4" class="about">
                <div class="title">
                    Сердце в СМИ
                </div>
                <div class="text">
                    Севастопольские и федеральные средства массовой информации<br>
                    регулярно делают материалы о нашей работе.<br>
                    Это важно для нас что бы рассказывать обществу о судьбах людей
                </div>
            </b-col>

            <b-col col md="4" v-for="(publication, index) in publications" :key="index" class="info">
                <a class="wrapper"
                   :href="publication.url">
                    <div class="image-wrapper">
                        <b-image class="image" :src="publication.logo" width="300"/>
                    </div>

                    <div>
                        <div class="quote">“</div>
                        <div class="text">{{publication.text}}</div>
                    </div>
                </a>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    export default {
        name: 'MediaNews',
        data() {
            return {
                publications: [
                    {
                        url: 'http://ruinformer.com/page/serdce-sevastopolja-i-nash-dom-sevastopol-prodolzhajut-ustraivat-sudbu-tamary-bajadzhi',
                        logo: '/media/informer_logo.png',
                        text: '«Сердце Севастополя» и «Наш дом — Севастополь» продолжают устраивать судьбу Тамары Баяджи'
                    },
                    {
                        url: 'http://primechaniya.ru/home/news/noyabr_2017/peshhernaya_zhenshhina-_uzhas_v_centre_sevastopolya/',
                        logo: '/media/premechaniya_logo.png',
                        text: 'Пещерная женщина: ужас в центре Севастополя'
                    },
                    {
                        url: 'https://sevastopol.su/news/pochti-polden-rukovoditel-volontyorskogo-dvizheniya-serdce-sevastopolya-anastasiya-makeeva',
                        logo: '/media/forPost_logo.png',
                        text: 'Помогать надо «с головой» — севастопольский волонтёр'
                    },
                    {
                        url: 'http://primechaniya.ru/home/news/mart-2018/grazhdanskoe-obshhestvo-kak-sevastopolcy-spasayut-drug-druga/',
                        logo: '/media/premechaniya_logo.png',
                        text: 'Гажданское общество: как севастопольцы спасают друг друг'
                    },
                    {
                        url: 'https://news.rambler.ru/other/38570403-oslepshaya-zhenschina-prozhila-bolshe-goda-v-sevastopolskoy-peschere/',
                        logo: '/media/rambler_logo.jpg',
                        text: 'Ослепшая женщина прожила больше года в севастопольской пещере'
                    },
                    /* {
                         url: 'https://primechaniya.ru/home/news/maj-2018/a-tebya-my-prokatim-na-kapote/',
                         logo: 'https://primechaniya.ru/v5/images/logo-2017-1.png',
                         text: 'А тебя мы прокатим на капоте»'
                     },
                      {
                         url: 'https://primechaniya.ru/home/news/mart-2018/dva-mesyaca-do-detdoma/',
                         logo: 'https://primechaniya.ru/v5/images/logo-2017-1.png',
                         text: 'Два месяца до детдома'
                     },
                     */
                ]
            }
        }
    }
</script>

<style lang="less" scoped>
    .about {

        margin-bottom: 50px;

        .title {
            color: #181818;
            font-size: 28px;
            font-weight: 500;
            line-height: 1.071;
            padding-bottom: 20px;
        }

        .text {
            color: #979797;
            font-size: 14px;
            font-weight: 500;
            line-height: 1.429;
        }
    }

    .info {
        cursor: pointer;

        margin-bottom: 50px;

        .wrapper {
            color: inherit;
            text-decoration: none;

            &:hover {
                color: inherit;
                text-decoration: none;
            }

            .image-wrapper {
                height: 100px;
                display: flex;
                align-items: center;
                justify-content: center;

                .image {
                    margin-bottom: 20px;
                    margin-left: 10px;
                }
            }

            .quote {
                float: left;
                color: #ffeea9;
                font-size: 54px;
                padding-top: 10px;
                display: inline-block;
                padding-right: 10px;
            }

            .text {
                color: #181818;
                font-size: 14px;
                font-style: italic;
                display: inline;
            }
        }
    }
</style>