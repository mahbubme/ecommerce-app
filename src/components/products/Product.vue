<template>
    <b-col sm="6" md="4" class="single-product">
        <b-card>
            <b-card-header v-if="product.isExclusive" class="exclusive">Exclusive</b-card-header>
            <b-card-img :src="product.img" :alt="product.title" class="product-img"></b-card-img>
            <b-card-body class="product-content">
                <div class="product-details">
                    <h4 class="product-title"><router-link :to="{ name: 'product', params: { id: product.id }}">{{ product.title }}</router-link></h4>
                    <span class="product-category">{{ product.category }}</span>
                    <h5 class="product-price">${{ product.price }}</h5>
                </div>
                <div class="add-to-cart">
                    <b-button @click="addToCart">Add To Cart</b-button>
                </div>
            </b-card-body>
        </b-card>
    </b-col>
</template>

<script>
    export default {
        props: ['product'],
        methods: {
            addToCart() {
                this.$store.commit('addToCart', this.product);
            }
        }
    }
</script>

<style>
    .single-product{
        position: relative;
        margin-bottom: 20px;
    }

    .single-product .card{
        border: 0;
        -webkit-box-shadow: 0px 0px 16px 6px #dad8d863;
        -moz-box-shadow: 0px 0px 16px 6px #dad8d863;
        box-shadow: 0px 0px 16px 6px #dad8d863;
    }

    .card-header.exclusive{
        position: absolute;
        top: 15px;
        left: 15px;
        border-bottom: 0;
        background: linear-gradient(135deg, #2d22c1, #da43a5b0);
        color: #fff;
        border-radius: 6px;
        padding: 4px 14px;
        font-size: 12px;
    }

    .exclusive{
        position: relative;
    }

    .single-product .product-img{
        padding: 20px 50px;
    }

    .single-product .card-body{
        padding: 0;
    }

    .card-body.product-content{
        border: 1px solid #ddd;
        padding: 18px 20px 25px 20px;
        border-radius: 0 0 6px 6px;
        overflow: hidden;
    }

    .single-product .product-details{
        width: 65%;
        float: left;
        padding-right: 10px;
    }

    .single-product .add-to-cart{
        width: 35%;
        float: left;
        vertical-align: top;
        overflow: hidden;
        padding-top: 8px;
    }

    .product-details .product-title{
        margin: 0;
    }

    .product-details .product-title a{
        font-size: 16px;
        margin: 0;
        color: #6c757d;
    }

    .product-details .product-title a:hover{
        color: #17a2b8;
        text-decoration: none;
    }

    .product-details .product-category{
        font-size: 14px;
        color: #6c757d;
        font-weight: 400;
        text-transform: capitalize;
    }

    .product-details .product-price{
        font-size: 16px;
        margin: 12px 0 0 0;
        color: #6c757d;
        font-weight: 400;
    }

    .product-content .add-to-cart .btn{
        font-size: 12px;
        text-transform: uppercase;
        font-weight: 700;
        color: #000;
        background: transparent;
        border-image: linear-gradient(to right, #2d22c1 0%,#da43a5b0 100%);
        border-image-slice: 1;
        border-width: 2px;
        padding: 6px 0;
        width: 100%;
    }

    .product-content .add-to-cart .btn:hover,
    .product-content .add-to-cart .btn:focus{
        -webkit-box-shadow: none;
        box-shadow: none;
        color: #17a2b8;
    }

    @media (max-width: 800px) {
        .single-product .product-details{
            width: 60%;
            float: left;
        }
        .single-product .add-to-cart{
            width: 40%;
        }

        .product-content .add-to-cart .btn{
            font-size: 8px;
        }

        .product-details .product-title a{
            font-size: 12px;
        }

        .product-details .product-category{
            font-size: 10px;
        }

        .product-details .product-price{
            font-size: 12px;
        }
    }

    @media (min-width: 801px) and (max-width: 1024px) {
        .product-content .add-to-cart .btn{
            font-size: 10px;
        }
    }

</style>