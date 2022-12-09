<template>
    <div>
        <h2> Edit product </h2>
        <form v-on:submit.prevent="putProduct">
            <div class="form-group">
                <label for="productId">ProductId</label>
                <input type="text" class="form-control" id="productId" placeholder="" v-model="product.productId">
            </div>
            <div class="form-group">
                <label for="productTitle">ProductTitle</label>
                <input type="text" class="form-control" id="productTitle" placeholder="" v-model="product.productTitle">
            </div>
            <div class="form-group">
                <label for="productDescription">ProductDescription</label>
                <input type="text" class="form-control" id="productDescription" placeholder=""
                    v-model="product.productDescription">
            </div>
            <div class="form-group">
                <label for="productPrice">ProductPrice</label>
                <input type="text" class="form-control" id="productPrice" placeholder="" v-model="product.productPrice">
            </div>
            <div class="form-group">
                <label for="productQuantity">ProductQuantity</label>
                <input type="text" class="form-control" id="productQuantity" placeholder=""
                    v-model="product.productQuantity">
            </div>
            <div class="form-group">
                <label for="productImage">ProductImage</label>
                <input type="text" class="form-control" id="productImage" placeholder="" v-model="product.productImage">
            </div>
            <div class="form-group">
                <label for="productSize">ProductSize</label>
                <input type="text" class="form-control" id="productSize" placeholder="" v-model="product.productSize">
            </div>
            <br/>
            <div class="form-group">
                <button id="edit" class="btn btn-outline-dark" @click="putProduct()">Edit product</button>
                
                <router-link to="/Productsadmin">
                    <button id="cancel" style="margin-left:10px;" class="btn btn-outline-dark">Cancel</button>
                </router-link>
                <!-- <button type=button @click.prevent="onCancel" >Cancel</button> -->
            </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: "EditProduct",
    props: {
        ProductTitle: String,
        ProductDescription: String,
        ProductPrice: Number,
        ProductQuantity: Number,
        ProductImage: String,
        ProductSize: String,
        ProductId: Number
    },
    data() {
        return {
            product: [],
            error: null,
            id: this.$route.params.ProductId
        }
    },
    mounted() {
        this.getProduct()
    },
    methods: {
        getProduct() {
            const id = this.$route.params.PId;
            fetch(`https://localhost:7092/api/Products/${id}`)
                .then(response => {
                    if (response.ok) {
                        return response.json()
                    } else {
                        console.log(response)
                        alert("Server returned " + response.status + " : " + response.statusText);
                    }
                })
                .then(response => {
                    this.product = response;
                })
                .catch(err => {
                    this.error = err;
                });
        },

        putProduct() {
            const id = this.$route.params.PId;
            axios.put(`https://localhost:7092/api/Products/${id}`, {
                ProductId: this.product.productId,
                ProductTitle: this.product.productTitle,
                ProductDescription: this.product.productDescription,
                ProductPrice: this.product.productPrice,
                ProductQuantity: this.product.productQuantity,
                ProductImage: this.product.productImage,
                ProductSize: this.product.productSize

            }).finally(() => {
                this.$router.push({ name: 'home' });
            });
        }



    },
    mounted: function () {
        this.getProduct(this.id);
    }
}

</script>